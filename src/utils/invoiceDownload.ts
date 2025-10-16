interface Invoice {
  id: string;
  customer: string;
  vehicle: string;
  amount: number;
  tax: number;
  total: number;
  status: string;
  date: string;
}

export function downloadInvoice(invoice: Invoice) {
  const content = `
AUTODEALER PRO
Invoice #${invoice.id}
========================================

Date: ${new Date(invoice.date).toLocaleDateString()}
Status: ${invoice.status.toUpperCase()}

CUSTOMER INFORMATION
Customer: ${invoice.customer}

VEHICLE INFORMATION
Vehicle: ${invoice.vehicle}

PAYMENT DETAILS
Amount: $${invoice.amount.toLocaleString()}
Tax: $${invoice.tax.toLocaleString()}
----------------------------------------
Total: $${invoice.total.toLocaleString()}

Payment Status: ${invoice.status}

Thank you for your business!
========================================
AutoDealer Pro - Car Dealership Management
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `invoice-${invoice.id}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
