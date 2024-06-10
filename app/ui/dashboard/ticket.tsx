import { useState, useEffect} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import Modal from 'react-modal';

import { TicketType } from "@/app/lib/types";
import { fetchMembers } from "@/app/lib/data";
import { modalStyles } from '@/app/lib/utils';

import EditForm from '../cards/edit-form';

import styles from '@/styles/Ticket.module.css';

import { matchMemberData } from '@/app/lib/data';

const Ticket = ({
    details
}: {
    details: TicketType
}) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [assignedMember, setAssignedMember ] = useState('');

    useEffect( () => {
        if( details ) {    
            const fetchMemberData = async() => {

                setAssignedMember( await matchMemberData(details.assignedto) )
            }
            fetchMemberData();
        }
        
    }, [details, details.assignedto])

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div 
                className={styles.container}
                onClick={()=>setIsModalOpen(true)}
            >
                <div>{details.title}</div>
                <div>{assignedMember}</div>
            </div>

            {/* <Modal
                isOpen={isModalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <EditForm 
                    details={details}
                    closeModal={closeModal}
                />
            </Modal> */}

            {/* <Sidebar>
                <EditForm 
                    details={details}
                    closeModal={closeModal}
                />
            </Sidebar> */}
        </div>
    )
}

export default Ticket;