import styles from '@/styles/Button.module.css';

const Button = ( {
    children,
    type,
    disabled,
    onClick
}: {
    children: React.ReactNode;
    type?: string;
    disabled?: boolean;
    onClick?: () => void;
}) => {   
     
    return (
        <button
            type={!onClick ? 'submit' : undefined}
            className={styles.btn} 
            disabled={!!disabled} 
            onClick={onClick ? onClick : ()=>{}}
        >
            {children}
        </button>
    )
}

export default Button;