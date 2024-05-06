import { Column } from "./types"

export const boardColumns: Column[] = [
    { category: 'backlog', display: 'Backlog'},
    { category: 'todo', display: 'To Do'},
    { category: 'dev', display: 'In Development'},
    { category: 'complete', display: 'Complete'}
]

export const modalStyles = {
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