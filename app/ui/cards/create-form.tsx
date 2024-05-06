

import { useState, useEffect } from 'react';

import { createTicket } from '@/app/lib/actions';
import { boardColumns } from '@/app/lib/utils';
import { Column, Member } from '@/app/lib/types';

import { fetchMembers } from '@/app/lib/data';

import Input from '../input';
import Button from '../button';

import styles from '@/styles/CreateForm.module.css';

// import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
// } from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';

// import { createInvoice } from '@/app/lib/actions';

// const users = ['Jasmine', 'Randy', 'Clark'];

// const users = [
//     {id: 1, name: 'Jasmine'},
//     {id: 2, name: 'Randy'},
//     {id: 3, name: 'Clark'}
// ]

const Form = ({
  status,
  closeModal
}: {
  status?: 'view' | 'create';
  closeModal?: () => void;
}) => {
    // const [ formData, setFormData ] = useState({
    //     title: '',
    //     description: '',
    //     assignedto: '',
    //     dueDate: null
    // });

    const [ members, setMembers ] = useState<Member[]>([]);
    const [formStatus, setFormStatus] = useState<'loading' | 'error' | 'active'>('loading');

    // const handleChange = (e: any) => {
    //     const { name, value} = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission, e.g., submit data to API or perform validation
    //     console.log('Form submitted:', formData);
    //   };

    // const createTicket = () => {

    // }

    useEffect( () => {
      const fetchTeamMembers = async () => {
        setMembers( await fetchMembers() );
      }

      fetchTeamMembers();
    }, []);

    const checkFormFields = async (formData: FormData) => {
      if( formStatus === 'error') setFormStatus('active');

      const fieldValues: {
        title: string;
        status?: string;
        description: string;
      } = {
        title: '',
        description: ''
      };
      for( let [key, value] of formData.entries()) {
        // @ts-ignore
        fieldValues[key] = value;
      }

      if( 
        !fieldValues.title
        || !fieldValues?.status
        || !fieldValues.description
      ) {
        setFormStatus('error');
        return;
      }

      createTicket(formData);
    }

  return (
    <form
      action={checkFormFields}
      className={styles.container}
    >
      <div className={styles.outer}>
        <div>
          <Input
            id={'title'}
            placeholder={"Title"}
            name={'title'}
            type={'string'}
          />
          <Input
            id='description'
            placeholder="Description"
            name='description'
            type='string'
          />
        </div>

        <label htmlFor="assignedto">
          Assigned To
        </label>

        <div>
          <select
              id="assignedto"
              name="assignedto"
              defaultValue=""
          >
              <option value="" disabled>
                  Select a user
              </option>
              {members?.map((user) => (
                  <option key={user.id} value={user.id}>
                      {user.name}
                  </option>
              ))}
          </select>
        </div>

        <div>
          <select
              id="status"
              name="status"
              defaultValue=""
          >
              <option value="" disabled>
                  Choose the current status
              </option>
              {boardColumns.map((column: Column, index) => (
                  <option key={index} value={column.category}>
                      {column.display}
                  </option>
              ))}
          </select>
        </div>

        <div className={styles.actionContainer}>
          <Button onClick={closeModal}>
            Cancel
          </Button>
          <Button type='submit'>
            Create Ticket
          </Button>
        </div>
      </div>
      
        {formStatus === 'error' && <div className={styles.error}>Fill out all fields</div>}
    </form>
  );
}

export default Form;
