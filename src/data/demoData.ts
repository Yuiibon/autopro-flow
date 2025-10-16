export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  color: string;
  mileage: number;
  price: number;
  status: 'available' | 'sold' | 'reserved';
  images: string[];
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Sports';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPurchases: number;
  lastPurchase: string;
  status: 'active' | 'inactive';
}

export interface Sale {
  id: string;
  carId: string;
  customerId: string;
  saleDate: string;
  salePrice: number;
  paymentMethod: 'Cash' | 'Finance' | 'Lease';
  salesPerson: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Invoice {
  id: string;
  saleId: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  tax: number;
  total: number;
  status: 'paid' | 'pending' | 'overdue';
}

export const demoInventory: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M5 Competition',
    year: 2024,
    vin: '1HGBH41JXMN109186',
    color: 'Marina Bay Blue',
    mileage: 1250,
    price: 125000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'Sports',
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'S-Class S500',
    year: 2024,
    vin: '5NPET46C38H347291',
    color: 'Obsidian Black',
    mileage: 890,
    price: 115000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    category: 'Sedan',
  },
  {
    id: '3',
    make: 'Audi',
    model: 'RS Q8',
    year: 2023,
    vin: '3GNDA33D21S512345',
    color: 'Nardo Gray',
    mileage: 5420,
    price: 145000,
    status: 'sold',
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'SUV',
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 Turbo S',
    year: 2024,
    vin: '2HGES26742H561234',
    color: 'GT Silver Metallic',
    mileage: 450,
    price: 235000,
    status: 'reserved',
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'Sports',
  },
  {
    id: '5',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    vin: 'WBADT43452G123456',
    color: 'Deep Blue Metallic',
    mileage: 2100,
    price: 135000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800'],
    fuelType: 'Electric',
    transmission: 'Automatic',
    category: 'Sedan',
  },
  {
    id: '6',
    make: 'Range Rover',
    model: 'Sport SVR',
    year: 2023,
    vin: 'JTHBF5C28D5012345',
    color: 'Santorini Black',
    mileage: 8900,
    price: 142000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'SUV',
  },
  {
    id: '7',
    make: 'Lamborghini',
    model: 'Urus',
    year: 2024,
    vin: '5TDJW5G18FS123456',
    color: 'Arancio Borealis',
    mileage: 320,
    price: 285000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'SUV',
  },
  {
    id: '8',
    make: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    vin: '1G1YY26E365123456',
    color: 'Cricket Ball Red',
    mileage: 750,
    price: 255000,
    status: 'sold',
    images: ['https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    category: 'Coupe',
  },
];

export const demoCustomers: Customer[] = [
  {
    id: '1',
    name: 'James Anderson',
    email: 'james.anderson@email.com',
    phone: '+1 (555) 234-5678',
    address: '123 Luxury Lane, Beverly Hills, CA 90210',
    totalPurchases: 3,
    lastPurchase: '2024-09-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@email.com',
    phone: '+1 (555) 876-5432',
    address: '456 Executive Drive, Manhattan, NY 10021',
    totalPurchases: 2,
    lastPurchase: '2024-08-22',
    status: 'active',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Premium Blvd, San Francisco, CA 94102',
    totalPurchases: 1,
    lastPurchase: '2024-10-01',
    status: 'active',
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    phone: '+1 (555) 456-7890',
    address: '321 Elite Circle, Miami, FL 33139',
    totalPurchases: 4,
    lastPurchase: '2024-07-10',
    status: 'active',
  },
  {
    id: '5',
    name: 'David Thompson',
    email: 'david.thompson@email.com',
    phone: '+1 (555) 567-8901',
    address: '654 Grand Avenue, Chicago, IL 60611',
    totalPurchases: 1,
    lastPurchase: '2024-06-18',
    status: 'inactive',
  },
];

export const demoSales: Sale[] = [
  {
    id: '1',
    carId: '3',
    customerId: '1',
    saleDate: '2024-09-15',
    salePrice: 145000,
    paymentMethod: 'Finance',
    salesPerson: 'Robert Williams',
    status: 'completed',
  },
  {
    id: '2',
    carId: '8',
    customerId: '2',
    saleDate: '2024-08-22',
    salePrice: 255000,
    paymentMethod: 'Cash',
    salesPerson: 'Jennifer Davis',
    status: 'completed',
  },
  {
    id: '3',
    carId: '4',
    customerId: '3',
    saleDate: '2024-10-01',
    salePrice: 235000,
    paymentMethod: 'Lease',
    salesPerson: 'Robert Williams',
    status: 'pending',
  },
];

export const demoInvoices: Invoice[] = [
  {
    id: '1',
    saleId: '1',
    invoiceNumber: 'INV-2024-001',
    issueDate: '2024-09-15',
    dueDate: '2024-10-15',
    amount: 145000,
    tax: 11600,
    total: 156600,
    status: 'paid',
  },
  {
    id: '2',
    saleId: '2',
    invoiceNumber: 'INV-2024-002',
    issueDate: '2024-08-22',
    dueDate: '2024-09-22',
    amount: 255000,
    tax: 20400,
    total: 275400,
    status: 'paid',
  },
  {
    id: '3',
    saleId: '3',
    invoiceNumber: 'INV-2024-003',
    issueDate: '2024-10-01',
    dueDate: '2024-11-01',
    amount: 235000,
    tax: 18800,
    total: 253800,
    status: 'pending',
  },
];
