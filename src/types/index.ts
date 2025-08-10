// Shared type definitions for Pentwheel Dashboard

export type StatusType = 'completed' | 'pending' | 'in-progress';

export interface Return {
  id: string;
  customer: string;
  date: string;
  status: string;
  statusType: StatusType;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Repair {
  id: string;
  startDate: string;
  status: string;
  statusType: StatusType;
  estimatedCompletion?: string;
  assignedTechnician?: string;
  components?: string[];
}

export interface Shipment {
  id: string;
  origin: string;
  serialStart: string;
  serialEnd: string;
  eta: string;
  trackingNumber?: string;
  carrier?: string;
  weight?: number;
}

export interface BOMItem {
  component: string;
  inStock: number;
  needed: number;
  unitCost?: number;
  supplier?: string;
  lastOrdered?: Date;
}

export interface KeyMetrics {
  incoming: {
    value: number;
    subtitle: string;
    change?: number;
  };
  outgoing: {
    value: number;
    subtitle: string;
    change?: number;
  };
  budget: {
    value: string;
    subtitle: string;
    used?: number;
    remaining?: number;
  };
}

// API Response types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// Component props interfaces
export interface MetricCardProps {
  icon: string;
  title: string;
  value: string | number;
  subtitle: string;
  gradientClass: string;
}

export interface StatusBadgeProps {
  status: string;
  statusType: StatusType;
}

export interface SerialNumberProps {
  serial: string;
}

// Dashboard data interface
export interface DashboardData {
  metrics: KeyMetrics;
  returns: Return[];
  repairs: Repair[];
  shipments: Shipment[];
  billOfMaterials: BOMItem[];
}
