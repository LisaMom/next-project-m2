
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
  team,
  user,
  sidebar,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  user: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-50 flex h-14 items-center border-b px-4">
          <SidebarTrigger className="cursor-pointer" />
        </header>
        <main className="flex-1 p-4">
        {children}
        {team}
        {user}
        </main>
      </div>
    </SidebarProvider>
    
  )
}
