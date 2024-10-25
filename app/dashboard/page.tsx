import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getTasksByUserId } from "@/data-access/tasks";
import Planner from "@/features/planner/components/planner";
import { format } from "date-fns";

export default async function Page() {
  const plannerData = await getTasksByUserId(
    "cfed58fe-549e-4f04-af19-15e080a407f2"
  );
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* <pre>{JSON.stringify(plannerData, null, 2)}</pre> */}
        <Planner tasks={plannerData} workouts={[]} recipes={[]} />
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
