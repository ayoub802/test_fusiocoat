"use client";

import { ShoppingCart } from "lucide-react";
interface Category {
    id: string;
    name: string;
  };

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
    description: string;
    images: Image[]
  };
import { Button } from "./ui/button";
import { useState } from "react";
import useCart from "@/hooks/use-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Currency from "./currency";

interface InfoProps {
  data: Product
};

const InfoPreview: React.FC<InfoProps> = ({ data }) => {

  const [Volume, setVolume] = useState<number>(0)

  const [quanity, setQuantity] = useState(1);

  const cart = useCart();

  const Increment = () => {
    return setQuantity(quanity + 1)
  }
  const Decrement = () => {
    if(quanity > 1){
      return setQuantity(quanity - 1)
    }
  }

  const onAddToCart = (data:any, quanity: any, Volume: any) => {
    cart.addItem(data, quanity, Volume)
  };

  console.log("Volume:",Volume);
  


  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-[18px] text-gray-900" dangerouslySetInnerHTML={{ __html: data.description.length > 150 ? data.description.substring(0, 150 - 3) + ('...') : data.description }}>
          {/* {data.description} */}
        </p>
      </div>

      <hr className="my-2" />
      <div className="mt-10 flex items-center gap-x-3">
      <div className="inline-flex items-center px-2 font-semibold text-gray-500 border border-[#000] rounded-md ">
            <button onClick={() => Decrement()} className="py-1 pr-2 border-r border-[#000]  dark:text-gray-400 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash text-[#000]" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                      </path>
                      </svg>
              </button>
              <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 text-[#000]">{quanity}</span>
            <button onClick={() => Increment()} className="py-1 pl-2 border-l border-[#000]  hover:text-gray-700 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus text-[#000]" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                      </path>
                      </svg>
              </button>
      </div>
        <Button onClick={() => onAddToCart(data, quanity, Volume)} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default InfoPreview;