"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import Image from "next/image";
import { X } from "lucide-react";
import { Footer } from "@/components/Footer";
import "../../App.css"
const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const cart = useCart();
  const { incrementQuantity, decrementQuantity } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const totalPrice = items.reduce((total: any, item: any) => {
    return total + (Number(item.price) * item.quantity)
  }, 0);

  const QuantityTotal = items.reduce((total: any, item: any) => {
    return total + item.quantity
  }, 0)

  
  useEffect(() => {
    items.map((item: any)=> {
      console.log("Quantity =>",item.quantity);
      
    })
  },[]) 

  const onCheckout = async () => {
    try{
      setLoading(true);
      const response = await axios.post(`http://localhost:3000/api/checkout`, {
        productIds: items.map((item) => item.id),
        quantity: QuantityTotal,
        volume: 30
      });
      toast.success("Your Command is Ordered");
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return ( 
    <div className='w-full overflow-hidden bg-[#000]'>
      <Header />
      <section className="bg-white">
        <div className="container">
            <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                <div className="lg:col-span-7">
                {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                <ul>
                    {cart.items.map((item) => (
                        <li className="flex py-6 border-b">
                        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                            <Image
                            fill
                            src={item.images[0].url}
                            alt=""
                            className="object-cover object-center"
                            />
                        </div>
                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="absolute z-10 right-0 top-0">
                                <button onClick={() => cart.removeItem(item.id)}>
                                   <X size={15} />
                                </button>
                            </div>
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div className="flex justify-between">
                                <p className=" text-[1rem] mb-5 font-semibold text-black">
                                {item.name}
                                </p>
                            </div>
                    
                            <div className="mt-1 flex text-sm">
                                <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{item.category.name}</p>
                            </div>
                            <div className="flex flex-1 items-center mt-3 justify-between text-sm">

                              <div className="inline-flex items-center px-2 font-semibold text-gray-500 border border-gray-300 rounded-md ">
                                  <button onClick={() => decrementQuantity(item.id)} className="py-1 pr-2 border-r border-gray-300  dark:text-gray-400 hover:text-gray-700">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                          </path>
                                          </svg>
                                  </button>
                                  <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 dark:text-gray-400">{item.quantity}</span>
                                  <button onClick={() => incrementQuantity(item.id)} className="py-1 pl-2 border-l border-gray-300  hover:text-gray-700 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                          </path>
                                          </svg>
                                  </button>
                              </div>
                            <Currency value={item.price} />
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
                </div>
                <div
                className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >   
                <h2 className="text-lg font-medium text-gray-900">
                    Order summary
                </h2>
                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Order total</div>
                    <Currency value={totalPrice} />
                            </div>
                </div>
                <Button onClick={onCheckout} disabled={items.length === 0} className="w-full bg-[#000] text-[#fff] hover:text-[#000] mt-6">
                    Checkout
                </Button>
                </div>
            </div>
            </div>
        </div>
      </section>

     <Footer />
    </div>
  );
}
 
export default Summary;