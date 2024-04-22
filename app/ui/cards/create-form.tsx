

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
  closeModal
}: {
  closeModal?: () => void;
}) => {
    // const [ formData, setFormData ] = useState({
    //     title: '',
    //     description: '',
    //     assignedTo: '',
    //     dueDate: null
    // });

    const [ members, setMembers ] = useState<Member[]>([]);

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

    const innerCreateTicket = async (formData: FormData) => {
       console.log('firstll', formData)
    }

  return (
    <form
      // action={createTicket}
      // action={(els: FormData)=>{
      //   console.log('first', els)
      // }}
      action={innerCreateTicket}
      className={styles.container}
    >
      <div>
        {/* <input
            id="title"
            name="title"
            type="string"
            placeholder="Title"
        /> */}

        <Input
          id={'title'}
          placeholder={"Title"}
          name={'title'}
          type={'string'}
        />

        {/* <input
            id="description"
            name="description"
            type="string"
            placeholder="Description"
        /> */}

        <Input
          id='description'
          placeholder="Description"
          name='description'
          type='string'
        />
      </div>

      <label htmlFor="assignedTo">
        Assigned To
      </label>

      <div>
        <select
            id="assignedTo"
            name="assignedTo"
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
        {/* <div>Cancel</div> */}
        <Button
          onClick={closeModal}
        >
          Cancel
        </Button>
        {/* <button type="submit">Create Invoice</button> */}

        <Button
          type='submit'
        >
          Create Ticket
        </Button>
      </div>
    </form>
  );
}

export default Form;
