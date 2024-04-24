'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

import { boardColumns } from './utils';

// const columns = Object.values(boardColumns);
const columns = boardColumns.map( x => x.display);
const FormSchema = z.object({
    id: z.string(),
    // customerId: z.string(),
    title: z.string(),
    description: z.string(),
    assignedTo: z.string(),
    // amount: z.coerce.number(),
    status: z.enum(['backlog', 'todo', 'dev', 'complete']),
    // dueDate: z.string(),
  });

  const CreateTicket = FormSchema.omit({id: true, date: true});

export const createTicket = async (formData: FormData) => {
    console.log('form data: ', formData);
    // const { }

    const { title, status, description, assignedTo} = CreateTicket.parse({
      title: formData.get('title'),
      description: formData.get('description'),
      assignedTo: formData.get('assignedTo'),
      status: formData.get('status')
    })

    await sql`
      INSERT INTO tickets (title, description, assignedTo, status)
      VALUES (${title}, ${description}, ${assignedTo}, ${status})
    `;


}