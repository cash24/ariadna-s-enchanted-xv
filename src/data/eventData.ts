import guests from "./guests.json";

export interface GuestData {
  id: string;
  name: string;
  table: number;
  tickets: number;
  companions: string[];
}

export const getGuestData = (invitationId: string): GuestData | null => {
  const guest = guests.find(g => g.idInvitado.toUpperCase() === invitationId.toUpperCase());
  if (!guest) return null;

  return {
    id: guest.idInvitado,
    name: guest.nombre,
    table: guest.mesa,
    tickets: guest.boletos,
    companions: [] // Default for now
  };
};

export const EVENT_DATE = new Date("2025-04-25T18:00:00");
export const CHURCH_NAME = "Parroquia Cristo Rey";
export const CHURCH_ADDRESS = "Cda. de Jesus Maria 10, Amp. el Paraíso, 09230 Ciudad de México, CDMX";
export const CHURCH_MAP_URL = "https://www.google.com.mx/maps/place/Parroquia+Cristo+Rey/@19.421892,-99.0348829,21z/data=!4m6!3m5!1s0x85d1fd0024156b89:0xa988babb6494ebf!8m2!3d19.421908!4d-99.0348772!16s%2Fg%2F11yc2jdljl";
export const VENUE_NAME = "Salon Michel Plus";
export const VENUE_ADDRESS = "Av. Texcoco 523, Amp el Paraíso, 09230 Ciudad de México, CDMX";
export const VENUE_MAP_URL = "https://www.google.com.mx/maps/place/Salon+Michel+Plus/@19.4074453,-99.0223017,19.13z/data=!3m1!5s0x85d1fccf0d207ee9:0xace12f7a42b1117!4m6!3m5!1s0x85d1fccf732b880f:0xd76dff72751ab053!8m2!3d19.407092!4d-99.0225207!16s%2Fg%2F11cms66xmt";
export const CEREMONY_TIME = "6:00 PM";
export const RECEPTION_TIME = "8:30 PM";
export const FATHER_NAME = "José Miguel Urbina Juan";
export const MADRINA_NAME = "Magda Elizabeth Urbina Juan";
export const WHATSAPP_CONFIRM = "+525625408998";
