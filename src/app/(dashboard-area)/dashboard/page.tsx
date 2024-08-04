import DashboardTable from "@/components/partials/dashboard-table";
import {Avatar, Card, CardContent} from "@/components/ui";
import UserChart from "./user-chart";
import { IconArrowUp, IconCircleArrowUp } from "@irsyadadl/paranoid";
import UserPieChart from "./user-pie-chart";

export default function Dashboard() {
  return (
    <main>
      <div className="grid gap-4 md:grid-cols-3 my-5">
        {Array.from({length: 3}).map((_, index) => (
          <Card key={index} className="pt-5">
            <CardContent>
              <div className="flex space-x-5 items-center">
                <IconCircleArrowUp className="text-muted-fg w-10 h-10" />
                <div>
                  <h3 className="text-lg font-semibold text-muted-fg">Total Revenue</h3>
                  <span className="text-3xl font-bold text-success">
                    ${Math.floor(Math.random() * 1000)},000
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mb-5">
        <UserChart />
      </div>
      <div className="grid md:grid-cols-6 gap-5">
        <div className="md:col-span-2">
          <UserPieChart />
        </div>
        <div className="md:col-span-4">
          <DashboardTable />
        </div>
      </div>
    </main>
  );
}
