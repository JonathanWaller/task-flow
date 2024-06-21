'use client';

import { useState, useContext } from 'react';
import { CurrentTicketContext } from '@/app/dashboard/layout';

import Modal from 'react-modal';

import { ColumnDisplay, TicketType } from '@/app/lib/types';
import CreateForm from '../cards/create-form';
import Ticket from './ticket';

import { useSidebar } from '@/app/context/SidebarContext';

import { modalStyles } from '@/app/lib/utils';

import styles from '@/styles/CardColumn.module.css';

export default function CardColumn({
    display,
    tickets
}: {
    display: ColumnDisplay;
    tickets: TicketType[];
}) {

    const {currentTicket, setCurrentTicket} = useContext(CurrentTicketContext);

    const { openSidebar, closeSidebar, isSidebarOpen } = useSidebar();

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => setIsModalOpen(false);

    const ticketClicked = (ticket: TicketType) => {
        if( isSidebarOpen) {
            closeSidebar();
            setTimeout( () => {
                openSidebar();
            }, 500)
        } else {
            openSidebar();
        }
        
        setCurrentTicket(ticket)
    }

    return (
        <div className={styles.columnContainer}>
            <div className={styles.heading}>{display}</div>
            <div className={styles.columnScroll}>
                {
                    tickets && tickets.map((ticket: TicketType) => (
                        <div onClick={()=>ticketClicked(ticket)} key={ticket.id}>
                            <Ticket 
                                key={ticket.id}
                                details={ticket}
                            />
                        </div>
                    ))
                }
            </div>
            <div 
                className={styles.columnAddButton}
                onClick={()=>setIsModalOpen(true)}
            >
                Add Item
            </div>

            <Modal
                isOpen={isModalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <CreateForm closeModal={closeModal}/>
            </Modal>
        </div>
    )
}