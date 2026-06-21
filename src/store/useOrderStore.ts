import { create } from "zustand";

interface OrderState {
  selectedVenue: string | null;
  selectedCatering: string | null;
  setVenue: (venue: string) => void;
  setCatering: (catering: string) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  selectedVenue: null,
  selectedCatering: null,
  setVenue: (venue) => set({ selectedVenue: venue }),
  setCatering: (catering) => set({ selectedCatering: catering }),
}));
