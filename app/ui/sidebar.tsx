'use client';

import React, {useContext} from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSidebar } from '../context/SidebarContext';
import { CurrentTicketContext } from '../dashboard/layout';

import styles from '@/styles/Sidebar.module.css';

import { statusColorMapping, statusMapping } from '../lib/utils';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebar();

  const {currentTicket, setCurrentTicket} = useContext(CurrentTicketContext);

  // console.log('plzeee work 4 me: ', currentTicket);

  const { id, title, description, assignedTo, status } = currentTicket;

  const backgroundColor = statusColorMapping[status] || 'green';

  console.log('ASSIGNED TO: ', assignedTo);

  return (
    <ProSidebar 
        collapsed={!isSidebarOpen} 
        
        // rtl={true}
        // rtl={false}
        collapsedWidth='0px'
        onBackdropClick={closeSidebar}
        // onBlur={closeSidebar}
        // collapsed={false}
        // onToggle={closeSidebar}
        // className={styles.sidebar}
        // className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        // className={styles.sidebarzz}
        // className={styles.sidebar}

        // rootStyles={{
        //   [`.${sidebarClasses.container}`]: {
        //     backgroundColor: 'red',
        //   },
        // }}

        rootStyles={{
          backgroundColor: 'red',
          zIndex: '100px',
          position: 'absolute',
          right: 0,
          height: '100%'
        }}
    >
      <div>

        <div className={styles.titlezz}>{title}</div>

        <div 
          className={styles.statusBadge}
          style={{background: backgroundColor}}
        >
          {statusMapping[status]}
        </div>

        <div>{assignedTo}</div>

        <div>{description}</div>

        {/* <div>
          <button onClick={openSidebar}>Open</button>
        </div> */}

        <div>
          <button onClick={closeSidebar}>Close</button>
        </div>
      </div>
    </ProSidebar>
  );
};

export default Sidebar;
