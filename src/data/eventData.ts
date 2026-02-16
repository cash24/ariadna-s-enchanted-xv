// Guest data - in a real app this would come from a database
export interface GuestData {
  id: string;
  name: string;
  table: number;
  tickets: number;
  companions: string[];
}

const guestDatabase: Record<string, GuestData> = {
  "INV001": { id: "INV001", name: "Familia García", table: 1, tickets: 4, companions: ["María García", "José García", "Luis García"] },
  "INV002": { id: "INV002", name: "Familia López", table: 2, tickets: 3, companions: ["Ana López", "Pedro López"] },
  "INV003": { id: "INV003", name: "Familia Martínez", table: 3, tickets: 2, companions: ["Rosa Martínez"] },
  "INV004": { id: "INV004", name: "Familia Hernández", table: 4, tickets: 5, companions: ["Carlos Hernández", "Sofía Hernández", "Diego Hernández", "Lucía Hernández"] },
  "INV005": { id: "INV005", name: "Familia Rodríguez", table: 5, tickets: 2, companions: ["Elena Rodríguez"] },
};

export const getGuestData = (invitationId: string): GuestData | null => {
  return guestDatabase[invitationId.toUpperCase()] || null;
};

export const EVENT_DATE = new Date("2026-06-20T17:00:00");
export const CHURCH_NAME = "Parroquia de Nuestra Señora de Guadalupe";
export const CHURCH_ADDRESS = "Av. Insurgentes Sur 1234, Col. Centro";
export const CHURCH_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661945024164!2d-99.16869692394988!3d19.427023841867478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2zQ2F0ZWRyYWwgTWV0cm9wb2xpdGFuYQ!5e0!3m2!1ses-419!2smx!4v1";
export const VENUE_NAME = "Salón Real de los Sueños";
export const VENUE_ADDRESS = "Blvd. de las Rosas 567, Col. Jardines";
export const VENUE_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661945024164!2d-99.16869692394988!3d19.427023841867478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2zQ2F0ZWRyYWwgTWV0cm9wb2xpdGFuYQ!5e0!3m2!1ses-419!2smx!4v1";
export const CEREMONY_TIME = "5:00 PM";
export const RECEPTION_TIME = "7:30 PM";
