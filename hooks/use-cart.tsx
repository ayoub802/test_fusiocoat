import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 
interface Category {
    id: string;
    name: string;
  };

  interface CartItem extends Product {
    quantity: number;
  }

  interface Image {
    id: string;
    url: string;
  }
interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    priceBig: string;
    isFeatured: boolean;
    images: Image[]
    volumes: Record<string, string>; 
  };
import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';

// const [quantity, setQuantity] = useState(1)
interface CartStore {
  items: CartItem[];
  addItem: (data: Product, quanity: number, volume: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    incrementQuantity: (id: string) => {
      set((state) => {
        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { items: updatedItems };
      });
    },

    decrementQuantity: (id: string) => {
      set((state) => {
        const updatedItems = state.items.map((item) =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        return { items: updatedItems };
      });
    },
    addItem: (data: Product, quantity: number, volume: string) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update the quantity
        set((state) => {
          const updatedItems = [...state.items];
          const existingItem = updatedItems[existingItemIndex];
          existingItem.quantity += quantity;
          existingItem.price = calculatePrice(data, volume); // Recalculate and update the price
          return { items: updatedItems };
        });

        toast.success(`Quantity updated for ${data.name}.`);
      } else {
        // If the item does not exist in the cart, add it with the specified quantity
        set({ items: [...get().items, { ...data, quantity , price: calculatePrice(data, volume),}] });
        toast.success('Item added to cart.');
      }
    },
    updateQuantity: (id: string, quantity: number, volume: string) => {
      set((state) => {
        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity, price: calculatePrice(item, volume) } : item
        );
        return { items: updatedItems };
      });
      toast.success('Product updated.');
    },
    removeItem: (id: string) => {
      set({ items: get().items.filter((item) => item.id !== id) });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage),
  })
);

// Helper function to calculate price based on volume
const calculatePrice = (product: Product, volume: string): string => {
  // Use the selected volume to determine the appropriate price
  const price = volume === '30' ? product.price : product.priceBig;
  return price;
};

export default useCart;