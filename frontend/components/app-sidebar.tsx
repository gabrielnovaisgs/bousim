import { CreditCardIcon, Home, TablePropertiesIcon } from "lucide-react";
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
                                        <Home />
                                        <p>Home</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <CreditCardIcon />
                                        <p>Cartões</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <TablePropertiesIcon />
                                        <p>Transações</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <TablePropertiesIcon />
                                        <p>Orçamentos</p>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/transactions">
                                        <TablePropertiesIcon />
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