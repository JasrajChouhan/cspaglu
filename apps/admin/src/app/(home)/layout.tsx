import { Sidebar } from "components/sidebar/sidebar";
import { SheetSidebar } from "components/sidebar/sheet-sidebar";
import { Topbar } from "components/topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex w-64 border-r bg-white">
          <Sidebar />
        </div>
        <SheetSidebar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
