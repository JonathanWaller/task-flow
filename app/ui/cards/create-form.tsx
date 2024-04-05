import { useState } from 'react';

import { createTicket } from '@/app/lib/actions';
import { boardColumns } from '@/app/lib/utils';
import { Column } from '@/app/lib/types';

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

const users = [
    {id: 1, name: 'Jasmine'},
    {id: 2, name: 'Randy'},
    {id: 3, name: 'Clark'}
]

const Form = () => {
    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        assignedTo: '',
        dueDate: null
    });

    const handleChange = (e: any) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission, e.g., submit data to API or perform validation
    //     console.log('Form submitted:', formData);
    //   };

    // const createTicket = () => {

    // }

  return (
    <form
      action={createTicket}
    >
      <div>
        <input
            id="title"
            name="title"
            type="string"
            placeholder="Title"
        />

        <input
            id="description"
            name="description"
            type="string"
            placeholder="Description"
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
            {users.map((user) => (
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

      <div>
        <div>Cancel</div>
        <button type="submit">Create Invoice</button>
      </div>
    </form>
  );
}

export default Form;
