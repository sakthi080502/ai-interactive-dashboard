import React, { useMemo } from 'react';
import { DollarSign, ShoppingBag, TrendingUp, CreditCard, LayoutDashboard, Calendar, Download } from 'lucide-react';
import { rawCSVData } from './data';
import { parseCSV } from './utils';
import { StatCard } from './components/StatCard';
import { Charts } from './components/Charts';
import { OrderTable } from './components/OrderTable';

export default function App() {
  const orders = useMemo(() => parseCSV(rawCSVData), []);

  const stats = useMemo(() => {
    const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
    const avgOrderValue = totalRevenue / orders.length;
    
    // Find most popular product
    const productCounts = orders.reduce((acc: any, order) => {
      acc[order.product] = (acc[order.product] || 0) + 1;
      return acc;
    }, {});
    const topProduct = Object.entries(productCounts).sort((a: any, b: any) => b[1] - a[1])[0][0];

    return {
      totalRevenue: totalRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      totalOrders: orders.length,
      avgOrderValue: avgOrderValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      topProduct
    };
  }, [orders]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      {/* Sidebar / Navigation (Desktop) */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 hidden xl:flex flex-col p-6 z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Analytics</h1>
        </div>

        <nav className="space-y-1 flex-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors">
            <ShoppingBag className="w-5 h-5" />
            Orders
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors">
            <TrendingUp className="w-5 h-5" />
            Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors">
            <CreditCard className="w-5 h-5" />
            Payments
          </a>
        </nav>

        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Current Period</p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Calendar className="w-4 h-4" />
            Aug 15 - Oct 07
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="xl:ml-64 p-6 lg:p-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Sales Overview</h2>
            <p className="text-slate-500 mt-1">Monitor your performance and sales metrics in real-time.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
              Refresh Data
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Revenue" 
            value={stats.totalRevenue} 
            icon={<DollarSign className="w-6 h-6" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <StatCard 
            title="Total Orders" 
            value={stats.totalOrders} 
            icon={<ShoppingBag className="w-6 h-6" />}
            trend={{ value: 8.2, isPositive: true }}
          />
          <StatCard 
            title="Avg. Order Value" 
            value={stats.avgOrderValue} 
            icon={<TrendingUp className="w-6 h-6" />}
            trend={{ value: 2.4, isPositive: false }}
          />
          <StatCard 
            title="Top Product" 
            value={stats.topProduct} 
            icon={<CreditCard className="w-6 h-6" />}
            className="lg:col-span-1"
          />
        </div>

        {/* Charts Section */}
        <Charts orders={orders} />

        {/* Table Section */}
        <OrderTable orders={orders} />
      </main>
    </div>
  );
}
