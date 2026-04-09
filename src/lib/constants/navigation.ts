import {
  Users,
  Mail,
  AlertTriangle,
  FileText,
  Wrench,
  Database,
  FolderOpen,
  ClipboardList,
  BookOpen,
  Activity,
  Zap,
  Flame,
  Droplets,
  Thermometer,
  Folder,
} from 'lucide-react';

export const navItems = [
  { icon: Users,         label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail,          label: 'Messages',           href: '/dashboard/messages'          },
  { icon: AlertTriangle, label: 'Damage Reports',     href: '/dashboard/damage-reports'    },
  { icon: FileText,      label: 'Documents',          href: '/dashboard/documents'         },
  { icon: Wrench,        label: 'Service Providers',  href: '/dashboard/service-providers' },
  { icon: Database,      label: 'Data',               href: '#'                            },
] as const;

export const docSubItems = [
  { id: '',                 label: 'All Files',        icon: FolderOpen    },
  { id: 'rental-contract',  label: 'Rental Contract',  icon: ClipboardList },
  { id: 'house-rules',      label: 'House Rules',      icon: BookOpen      },
  { id: 'meter-readings',   label: 'Meter Readings',   icon: Activity      },
  { id: 'electricity',      label: 'Electricity',      icon: Zap           },
  { id: 'gas',              label: 'Gas',              icon: Flame         },
  { id: 'water',            label: 'Water',            icon: Droplets      },
  { id: 'oil-heating',      label: 'Oil Heating',      icon: Thermometer   },
  { id: 'service-provider', label: 'Service Provider', icon: Wrench        },
  { id: 'others',           label: 'Others',           icon: Folder        },
] as const;
