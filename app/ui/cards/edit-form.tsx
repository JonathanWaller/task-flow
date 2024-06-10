
import { TicketType } from "@/app/lib/types";

import { FaHeart, FaPen, FaTimes } from 'react-icons/fa'

import styles from '@/styles/DisplayForm.module.css';

const EditForm = ({
    details,
    closeModal
}: {
    details: TicketType;
    closeModal: () => void;
}) => {
    
    return( 
        <div className={styles.container}>
            <div className={styles.topActions}>
                <FaPen 
                    size={14} 
                    className={styles.editIcon}
                />
                <FaTimes 
                    size={18} 
                    className={styles.closeIcon}
                    onClick={closeModal}
                />
            </div>
            <div>{details.title}</div>
            <div>{details.description}</div>
            <div>
            {/* <BeakerIcon className="w-5 md:w-6" /> */}
            {/* <FaHeart color="red" size={22} /> */}
            
            </div>
            <div>{details.status}</div>
            
        </div>
    )
}

export default EditForm;