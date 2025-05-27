import { SidebarInset, SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";
import { AppSidebar } from "@components/app-sidebar";
import { Separator } from "@components/ui/separator";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <AppSidebar />
                <SidebarInset className="flex-1 min-w-0 overflow-y-auto">
                    <header className="fixed h-14 w-full z-50 flex items-center border-b px-4 bg-sidebar">
                        <div className="flex items-center gap-2">

                            <SidebarTrigger className="mr-2" />
                            <h3 className="text-lg font-semibold">Dashboard</h3>
                        </div>

                    </header>
                    {children}
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}