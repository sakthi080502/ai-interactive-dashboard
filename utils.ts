import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Order {
  orderNumber: string;
  product: string;
  price: number;
  date: string;
  paymentMethod: string;
}

export function parseCSV(csv: string): Order[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      orderNumber: values[0],
      product: values[1],
      price: parseFloat(values[2].replace('$', '')),
      date: values[3],
      paymentMethod: values[4]
    };
  });
}
