import { AppSidebar } from "@/components/app-sidebar";
import { NavSecondary } from "@/components/nav-secondary";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/features/sidebar-right/components/sidebar-right";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getTasksByUserId } from "@/data-access/tasks";
import DateNavigation from "@/features/planner/components/date-navigation";
import Planner from "@/features/planner/components/planner";

export default async function Page() {
  const tasks = await getTasksByUserId("cfed58fe-549e-4f04-af19-15e080a407f2");
  const user = {
    name: "kpauner",
    email: "kpauner@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  };
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <DateNavigation />
          <Separator orientation="vertical" className="h-4" />
          <SidebarTrigger className="ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Planner tasks={tasks} workouts={[]} recipes={[]} />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
