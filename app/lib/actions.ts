'use server';

import { z } from 'zod';

import { boardColumns } from './utils';

// const columns = Object.values(boardColumns);
const columns = boardColumns.map( x => x.display);
const FormSchema = z.object({
    id: z.string(),
    // customerId: z.string(),
    title: z.string(),
    description: z.string(),
    assignedTo: z.string(),
    amount: z.coerce.number(),
    // status: z.enum(['pendi', 'paid']),
    status: z.enum(['backlog', 'todo', 'dev', 'complete']),
    dueDate: z.string(),
  });

//   const CreateTicket = FormSchema.omit({id: true, date: true});

export const createTicket = async (formData: FormData) => {
    console.log('form data: ', formData);
    // const { }

}