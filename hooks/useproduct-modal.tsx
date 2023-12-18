import { create } from 'zustand';

interface useProductStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProductModals = create<useProductStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
