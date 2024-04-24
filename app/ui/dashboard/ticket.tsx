
import { TicketType } from "@/app/lib/types";

import styles from '@/styles/Ticket.module.css';

const Ticket = ({
    details
}: {
    details: TicketType
}) => {

    return (
        <div className={styles.container}>
            {details.title}
        </div>
    )
}

export default Ticket;