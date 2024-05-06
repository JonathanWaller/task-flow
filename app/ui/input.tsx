import styles from '@/styles/Input.module.css';

const Input = ({
    label, 
    id,
    placeholder, 
    name,
    // value, 
    // error,
    type
}: {
    label?: string;
    id: string;
    placeholder: string;
    name: string;
    // value: string;
    // error: string;
    type?: string;
}) => {

    return( 
        <div className={styles.inputContainer}>
            <div className={styles.inputInnerContainer}>
                <input
                    className={styles.input}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    type={type ? type : 'text'}
                    autoComplete='off'
                    maxLength={100}
                />
            </div>
        </div>
    )
}

export default Input;