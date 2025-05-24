export interface Car {
  id: number;
  name: string;
  year?: string;
  transmission: 'automatic' | 'manual';
  image: string;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}