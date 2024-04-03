import styles from '@/styles/CardColumn.module.css';

import { ColumnCategory, ColumnDisplay } from '@/app/types';

import { Column } from '@/app/types';

export default async function CardColumn({
    category,
    display
}: {
    category: ColumnCategory;
    display: ColumnDisplay
}) {


    return (
        <div className={styles.columnContainer}>
            <div className={styles.heading}>{display}</div>
            <div className={styles.columnScroll}></div>
            <div className={styles.columnAddButton}>Add Item</div>
        </div>
    )
}