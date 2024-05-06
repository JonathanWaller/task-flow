import { useState, useEffect} from 'react';


import { TicketType } from "@/app/lib/types";

import { fetchMembers } from "@/app/lib/data";

import styles from '@/styles/Ticket.module.css';

const Ticket = ({
    details
}: {
    details: TicketType
}) => {

    const [assignedMember, setAssignedMember ] = useState('');

    useEffect( () => {
        if( details ) {
            const fetchMemberData = async() => {
                const members = await fetchMembers();
                const found = members.find( x => x.id === details.assignedto) || '';
                found && setAssignedMember( found.name )
            }
            fetchMemberData();
        }
        
    }, [details, details.assignedto])

    return (
        <div 
            className={styles.container}
            onClick={()=>{}}
        >
            <div>{details.title}</div>
            <div>{assignedMember}</div>
        </div>
    )
}

export default Ticket;