import { useState } from "react";
import { demoInvoices, demoSales, demoInventory, demoCustomers } from "@/data/demoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Download } from "lucide-react";
import { CreateInvoiceDialog } from "@/components/dialogs/CreateInvoiceDialog";
import { downloadInvoice } from "@/utils/invoiceDownload";
import { toast } from "sonner";

export default function Invoices() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'overdue':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const totalInvoiced = demoInvoices.reduce((sum, inv) => sum + inv.total, 0);
  const totalPaid = demoInvoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + inv.total, 0);
  const totalPending = demoInvoices.filter(i => i.status === 'pending').reduce((sum, inv) => sum + inv.total, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Invoices</h1>
          <p className="text-muted-foreground">Manage invoices and payments</p>
        </div>
        <Button className="gradient-primary" onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      <CreateInvoiceDialog open={dialogOpen} onOpenChange={setDialogOpen} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Invoiced</p>
            <p className="text-3xl font-bold">${totalInvoiced.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">{demoInvoices.length} invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Paid</p>
            <p className="text-3xl font-bold text-success">${totalPaid.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">{demoInvoices.filter(i => i.status === 'paid').length} invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Pending</p>
            <p className="text-3xl font-bold text-accent">${totalPending.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">{demoInvoices.filter(i => i.status === 'pending').length} invoices</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Tax</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoInvoices.map((invoice) => {
                  const sale = demoSales.find(s => s.id === invoice.saleId);
                  const car = demoInventory.find(c => c.id === sale?.carId);
                  const customer = demoCustomers.find(c => c.id === sale?.customerId);
                  return (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                      <TableCell>{car?.make} {car?.model}</TableCell>
                      <TableCell>{customer?.name}</TableCell>
                      <TableCell>{new Date(invoice.issueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                      <TableCell>${invoice.tax.toLocaleString()}</TableCell>
                      <TableCell className="font-semibold">${invoice.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            downloadInvoice({
                              id: invoice.id,
                              customer: customer?.name || 'Unknown',
                              vehicle: `${car?.make} ${car?.model}` || 'Unknown',
                              amount: invoice.amount,
                              tax: invoice.tax,
                              total: invoice.total,
                              status: invoice.status,
                              date: invoice.issueDate
                            });
                            toast.success("Invoice downloaded!");
                          }}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
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
