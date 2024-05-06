'use client';

import { useState } from 'react';
import styles from '@/styles/CardColumn.module.css';

import { ColumnCategory, ColumnDisplay } from '@/app/lib/types';
import CreateForm from '../cards/create-form';
import Ticket from './ticket';

import Modal from 'react-modal';

import { type TicketType } from '@/app/lib/types';

import { Column } from '@/app/lib/types';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'black'
    },
  };

export default function CardColumn({
    category,
    display,
    tickets
}: {
    category: ColumnCategory;
    display: ColumnDisplay;
    tickets: TicketType[];
}) {

    type ModalType = 'create' | 'view';

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [ modalDisplay, setModalDisplay ] = useState< ModalType | null>();

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const modalClick = (type: ModalType) => {
        setModalDisplay( type );
        setIsModalOpen(true)
    }
    
    const closeModal = () => {
        setModalDisplay(null);
        setIsModalOpen(false);
    }


    return (
        <div className={styles.columnContainer}>
            <div className={styles.heading}>{display}</div>
            <div className={styles.columnScroll}>
                {
                    tickets && tickets.map((ticket: TicketType) => (
                        <div
                            key={ticket.id}
                            // onClick={()=>modalClick('view')}
                        >
                             <Ticket 
                                details={ticket}
                            />
                        </div>
                       
                    ))
                }
            </div>
            <div 
                className={styles.columnAddButton}
                onClick={()=>modalClick('create')}
            >
                Add Item
            </div>

            <Modal
                isOpen={isModalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <CreateForm closeModal={closeModal}/>
            </Modal>
        </div>
    )
}