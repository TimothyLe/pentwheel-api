import React from 'react';

// Type definitions
interface Return {
  id: string;
  customer: string;
  date: string;
  status: string;
  statusType: 'completed' | 'pending' | 'in-progress';
}

interface Repair {
  id: string;
  startDate: string;
  status: string;
  statusType: 'completed' | 'pending' | 'in-progress';
}

interface Shipment {
  id: string;
  origin: string;
  serialStart: string;
  serialEnd: string;
  eta: string;
}

interface BOMItem {
  component: string;
  inStock: number;
  needed: number;
}

interface KeyMetrics {
  incoming: {
    value: number;
    subtitle: string;
  };
  outgoing: {
    value: number;
    subtitle: string;
  };
  budget: {
    value: string;
    subtitle: string;
  };
}

interface MetricCardProps {
  icon: string;
  title: string;
  value: string | number;
  subtitle: string;
  gradientClass: string;
}

interface StatusBadgeProps {
  status: string;
  statusType: 'completed' | 'pending' | 'in-progress';
}

interface SerialNumberProps {
  serial: string;
}

const PentwheelDashboard: React.FC = () => {
  // Dummy data with type annotations
  const keyMetrics: KeyMetrics = {
    incoming: { value: 47, subtitle: "This week • 12% increase" },
    outgoing: { value: 23, subtitle: "This week • 2,847 total units" },
    budget: { value: "$142K", subtitle: "Used: $89K • Remaining: $53K" }
  };

  const returns: Return[] = [
    { id: "RET-2025-001", customer: "TechCorp Inc.", date: "Aug 7", status: "Processing", statusType: "in-progress" },
    { id: "RET-2025-002", customer: "Global Logistics", date: "Aug 6", status: "Completed", statusType: "completed" },
    { id: "RET-2025-003", customer: "MegaMart", date: "Aug 5", status: "Pending", statusType: "pending" },
    { id: "RET-2025-004", customer: "Northern Supplies", date: "Aug 5", status: "Completed", statusType: "completed" }
  ];

  const repairs: Repair[] = [
    { id: "SRV-001", startDate: "Aug 7, 9:30 AM", status: "In Progress", statusType: "in-progress" },
    { id: "SRV-002", startDate: "Aug 6, 2:15 PM", status: "Parts Needed", statusType: "pending" },
    { id: "SRV-003", startDate: "Aug 5, 11:00 AM", status: "Completed", statusType: "completed" },
    { id: "SRV-004", startDate: "Aug 5, 8:45 AM", status: "Completed", statusType: "completed" }
  ];

  const shipments: Shipment[] = [
    { id: "OS-2025-089", origin: "Shanghai, CN", serialStart: "PWH-24-0891", serialEnd: "PWH-24-0920", eta: "Aug 10" },
    { id: "OS-2025-090", origin: "Hamburg, DE", serialStart: "PWH-24-0921", serialEnd: "PWH-24-0955", eta: "Aug 12" },
    { id: "OS-2025-091", origin: "Tokyo, JP", serialStart: "PWH-24-0956", serialEnd: "PWH-24-0975", eta: "Aug 15" }
  ];

  const billOfMaterials: BOMItem[] = [
    { component: "Motor Assembly", inStock: 45, needed: 12 },
    { component: "Control Board", inStock: 23, needed: 8 },
    { component: "Power Cable", inStock: 156, needed: 15 },
    { component: "Sensor Unit", inStock: 8, needed: 18 },
    { component: "Housing Bracket", inStock: 67, needed: 22 }
  ];

  const getStatusBadgeClass = (statusType: 'completed' | 'pending' | 'in-progress'): string => {
    switch (statusType) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, subtitle, gradientClass }) => (
    <div className="metric-card">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${gradientClass}`}>
          {icon}
        </div>
        <div className="text-lg font-semibold text-gray-800">{title}</div>
      </div>
      <div className="text-4xl font-bold text-purple-600 mb-2">{value}</div>
      <div className="text-gray-600 text-sm">{subtitle}</div>
    </div>
  );

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status, statusType }) => (
    <span className={`status-badge ${getStatusBadgeClass(statusType)}`}>
      {status}
    </span>
  );

  const SerialNumber: React.FC<SerialNumberProps> = ({ serial }) => (
    <span className="serial-number">
      {serial}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600">
      {/* Header */}
      <header className="glass-card p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-15 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full relative flex items-center justify-center">
              <span className="text-white text-2xl">🐋</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">
              Pentwheel
            </h1>
          </div>
          <div className="text-gray-600 text-sm text-center md:text-right">
            <div>Week of August 5-11, 2025</div>
            <div>Last updated: Today at 2:30 PM</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon="📦"
            title="Incoming Shipments"
            value={keyMetrics.incoming.value}
            subtitle={keyMetrics.incoming.subtitle}
            gradientClass="bg-gradient-to-r from-blue-400 to-cyan-400"
          />
          <MetricCard
            icon="🚚"
            title="Outgoing Batches"
            value={keyMetrics.outgoing.value}
            subtitle={keyMetrics.outgoing.subtitle}
            gradientClass="bg-gradient-to-r from-pink-400 to-yellow-400"
          />
          <MetricCard
            icon="💰"
            title="Weekly Budget"
            value={keyMetrics.budget.value}
            subtitle={keyMetrics.budget.subtitle}
            gradientClass="bg-gradient-to-r from-teal-400 to-pink-300"
          />
        </section>

        {/* Main Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Returns */}
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🔄 Recent Returns
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Return ID</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Customer</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Date</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {returns.map((item: Return, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 text-sm">{item.id}</td>
                      <td className="p-3 text-sm">{item.customer}</td>
                      <td className="p-3 text-sm">{item.date}</td>
                      <td className="p-3">
                        <StatusBadge status={item.status} statusType={item.statusType} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Service Repairs */}
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🔧 Service Repairs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Repair ID</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Start Date</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {repairs.map((item: Repair, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 text-sm">{item.id}</td>
                      <td className="p-3 text-sm">{item.startDate}</td>
                      <td className="p-3">
                        <StatusBadge status={item.status} statusType={item.statusType} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Incoming Overseas Shipments */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🌏 Incoming Overseas Shipments
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Shipment ID</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Origin</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Serial Numbers</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">ETA</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((item: Shipment, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 text-sm">{item.id}</td>
                      <td className="p-3 text-sm">{item.origin}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <SerialNumber serial={item.serialStart} />
                          <span className="text-gray-500 text-sm">to</span>
                          <SerialNumber serial={item.serialEnd} />
                        </div>
                      </td>
                      <td className="p-3 text-sm">{item.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Service Bill of Materials */}
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              📋 Service Bill of Materials
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Component</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">In Stock</th>
                    <th className="text-left p-3 font-semibold text-gray-700 text-sm">Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {billOfMaterials.map((item: BOMItem, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 text-sm">{item.component}</td>
                      <td className="p-3 text-sm">{item.inStock}</td>
                      <td className={`p-3 text-sm ${item.inStock < item.needed ? 'text-red-600 font-bold' : ''}`}>
                        {item.needed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PentwheelDashboard;
