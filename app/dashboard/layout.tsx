'use client';

// import SideNav from '@/app/ui/dashboard/sidenav';
import Sidebar from "../ui/sidebar";
import { SidebarProvider } from "../context/SidebarContext";

import { createContext, useContext, useState } from "react";
 

export const CurrentTicketContext = createContext<any>(null);

export default function Layout({ children }: { children: React.ReactNode }) {

  // const [ currentTicket, setCurrentTicket ] = useState<any>(null);
  const [ currentTicket, setCurrentTicket ] = useState<any>({name: 'betty bop'});

  return (
    <SidebarProvider>
      <CurrentTicketContext.Provider
        value={{
          currentTicket,
          setCurrentTicket
        }}
      >
      <div style={{display: 'flex'}}>
        <div>
          <Sidebar />
        </div>
        <div>
          {/* <SideNav /> */}
        </div>
        <div>{children}</div>
      </div>
      </CurrentTicketContext.Provider>
    </SidebarProvider>
  );
}