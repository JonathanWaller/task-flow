'use client';

import { useState } from 'react';

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

    const { openSidebar } = useSidebar();

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={styles.columnContainer}>
            <div className={styles.heading}>{display}</div>
            <div className={styles.columnScroll}>
                {
                    tickets && tickets.map((ticket: TicketType) => (
                        <div onClick={openSidebar}>
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