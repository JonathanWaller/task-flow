export type ColumnCategory = 'backlog' | 'todo' | 'dev' | 'complete';
export type ColumnDisplay = 'Backlog' | 'To Do' | 'In Development' | 'Complete'; 

export interface Column {
    category: ColumnCategory;
    display: ColumnDisplay
}

export type Member = {
    id: number;
    name: string;
}