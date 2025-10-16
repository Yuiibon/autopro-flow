import { demoSales, demoInventory, demoCustomers } from "@/data/demoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

export default function Sales() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const totalSales = demoSales.reduce((sum, sale) => sum + sale.salePrice, 0);
  const completedSales = demoSales.filter(s => s.status === 'completed').length;
  const averageSale = totalSales / demoSales.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sales</h1>
          <p className="text-muted-foreground">Track and manage your sales</p>
        </div>
        <Button className="gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          New Sale
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Sales</p>
            <p className="text-3xl font-bold">${totalSales.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">{demoSales.length} transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Completed Sales</p>
            <p className="text-3xl font-bold">{completedSales}</p>
            <p className="text-sm text-muted-foreground mt-1">{((completedSales / demoSales.length) * 100).toFixed(0)}% completion rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Average Sale</p>
            <p className="text-3xl font-bold">${averageSale.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">Per transaction</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sale ID</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Sale Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Sales Person</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoSales.map((sale) => {
                  const car = demoInventory.find(c => c.id === sale.carId);
                  const customer = demoCustomers.find(c => c.id === sale.customerId);
                  return (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">#{sale.id}</TableCell>
                      <TableCell>{car?.make} {car?.model}</TableCell>
                      <TableCell>{customer?.name}</TableCell>
                      <TableCell>{new Date(sale.saleDate).toLocaleDateString()}</TableCell>
                      <TableCell className="font-semibold">${sale.salePrice.toLocaleString()}</TableCell>
                      <TableCell>{sale.paymentMethod}</TableCell>
                      <TableCell>{sale.salesPerson}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(sale.status)}>
                          {sale.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
