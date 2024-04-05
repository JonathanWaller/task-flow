'use client';

import { useState } from 'react';
import styles from '@/styles/CardColumn.module.css';

import { ColumnCategory, ColumnDisplay } from '@/app/lib/types';
import CreateForm from '../cards/create-form';

import Modal from 'react-modal';

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
    display
}: {
    category: ColumnCategory;
    display: ColumnDisplay
}) {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsModalOpen(false);
      }


    return (
        <div className={styles.columnContainer}>
            <div className={styles.heading}>{display}</div>
            <div className={styles.columnScroll}></div>
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
                style={customStyles}
                contentLabel="Example Modal"

            >
                {/* <div>hey im a modal</div> */}
                <CreateForm />
            </Modal>
        </div>
    )
}