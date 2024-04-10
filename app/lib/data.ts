'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import { Member } from './types';

export async function fetchMembers () {
    // noStore();

    try {
        const {rows} = await sql<Member>`SELECT * FROM members`;
        return rows;
    } catch (error) {
        console.error(`Database Error: ${error}`);
        throw new Error('Failed to fetch members');
    }
}