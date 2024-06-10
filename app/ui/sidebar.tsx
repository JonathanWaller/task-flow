'use client';

import React from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSidebar } from '../context/SidebarContext';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebar();

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
        <div>hello how are you???</div>

        <div>
          <button onClick={openSidebar}>Open</button>
        </div>

        <div>
          <button onClick={closeSidebar}>Close</button>
        </div>
    </ProSidebar>
  );
};

export default Sidebar;
