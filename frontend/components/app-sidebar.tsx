import { ArrowRightLeftIcon, CreditCardIcon, HomeIcon, NotebookTextIcon, PiggyBankIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "./ui/sidebar";

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel >Bousim</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/">
                                        <HomeIcon />
                                        <p>Home</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/cards">
                                        <CreditCardIcon />
                                        <p>Cartões</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <ArrowRightLeftIcon />
                                        <p>Transações</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <PiggyBankIcon />
                                        <p>Orçamentos</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <NotebookTextIcon />
                                        <p>Relatórios</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}