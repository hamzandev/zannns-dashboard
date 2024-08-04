import DashboardBreadcrumb from "@/components/partials/dashboard-breadcrumb";
import Topbar from "./dashboard/topbar";
import Sidebar from "./dashboard/sidebar";
import {Toast} from "@/components/ui/toast";
import BottomBar from "./dashboard/bottom-bar";

interface DashboardAreaLayoutProps {
  children: React.ReactNode;
}

function DashboardAreaLayout({children}: DashboardAreaLayoutProps) {
  const mainClassName = `px-5 py-3 border-t border-s border-muted bg-muted min-h-screen`;

  return (
    <div className="2xl:container mx-auto flex min-h-screen">
      <Sidebar />
      <div className="md:w-10/12">
        <Topbar />
        <main className={mainClassName}>
          <DashboardBreadcrumb
            links={[{href: "/dashboard", label: "Dashboard"}]}
          />
          {children}
        </main>
        <BottomBar />
      </div>

      {/* Toast */}
      <Toast />
    </div>
  );
}

export default DashboardAreaLayout;