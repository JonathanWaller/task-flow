'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import { Member, TicketType } from './types';

export async function fetchMembers () {
    noStore();

    try {
        const {rows} = await sql<Member>`SELECT * FROM members`;
        return rows;
    } catch (error) {
        console.error(`Database Error: ${error}`);
        throw new Error('Failed to fetch members');
    }
}

export const fetchTickets = async () => {
    noStore();

    try {
        const {rows} = await sql<TicketType>`SELECT * FROM tickets`;
        return rows;
    } catch (error) {
        console.error(`Database Error: ${error}`);
        throw new Error('Failed to fetch tickets');
    }
}