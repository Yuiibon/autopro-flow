import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoInventory, demoSales, demoCustomers } from "@/data/demoData";
import { Car, DollarSign, TrendingUp, Users } from "lucide-react";

export default function Dashboard() {
  const totalInventory = demoInventory.length;
  const availableCars = demoInventory.filter(car => car.status === 'available').length;
  const totalRevenue = demoSales.reduce((sum, sale) => sum + sale.salePrice, 0);
  const totalCustomers = demoCustomers.length;

  const recentSales = demoSales.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your dealership overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Inventory"
          value={totalInventory.toString()}
          subtitle={`${availableCars} available`}
          icon={Car}
          trend={{ value: "12%", positive: true }}
        />
        <StatCard
          title="Total Revenue"
          value={`$${(totalRevenue / 1000).toFixed(0)}K`}
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: "8.2%", positive: true }}
        />
        <StatCard
          title="Total Sales"
          value={demoSales.length.toString()}
          subtitle="This month"
          icon={TrendingUp}
          trend={{ value: "3.1%", positive: true }}
        />
        <StatCard
          title="Total Customers"
          value={totalCustomers.toString()}
          subtitle="Active customers"
          icon={Users}
          trend={{ value: "5.4%", positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => {
                const car = demoInventory.find(c => c.id === sale.carId);
                const customer = demoCustomers.find(c => c.id === sale.customerId);
                return (
                  <div key={sale.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                    <div>
                      <p className="font-medium">{car?.make} {car?.model}</p>
                      <p className="text-sm text-muted-foreground">{customer?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${sale.salePrice.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">{sale.saleDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-sm font-medium">Available</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-success" style={{ width: `${(availableCars / totalInventory) * 100}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold">{availableCars}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-sm font-medium">Sold</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${(demoInventory.filter(c => c.status === 'sold').length / totalInventory) * 100}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold">{demoInventory.filter(c => c.status === 'sold').length}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Reserved</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${(demoInventory.filter(c => c.status === 'reserved').length / totalInventory) * 100}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold">{demoInventory.filter(c => c.status === 'reserved').length}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
