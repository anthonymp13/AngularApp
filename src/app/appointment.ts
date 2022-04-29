export interface Appointment {
  id?: number;
  userId?: number;
  created?: Date;
  lastChanged?: Date;
  start: Date;
  duration: string;
  name: string;
  description: string;
}

