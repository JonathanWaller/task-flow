// import SideNav from '@/app/ui/dashboard/sidenav';
import Sidebar from "../ui/sidebar";
import { SidebarProvider } from "../context/SidebarContext";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div style={{display: 'flex'}}>
        <div>
          <Sidebar />
        </div>
        <div>
          {/* <SideNav /> */}
        </div>
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
}