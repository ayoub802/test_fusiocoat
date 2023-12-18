import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';
import getSmilairProducts from '@/actions/getSimilairProduct';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const ProductSimlair =  ({ product }) => {
    
    const [similair, setSimilair] = useState([])
    const previewModal = usePreviewModal();
    const cart = useCart();
    
    const onPreview = (item) => {
      previewModal.onOpen(item);
    };
    const router = useRouter();
  
    
    const onAddToCart = (data) => {
      cart.addItem(data);
    }
    // const suggestedProducts = await getSmilairProducts(
    //     product?.category?.id
    //   );

      const fetchCategroy = async () => {
        try{
          const response = await getSmilairProducts(product?.category?.id);
          setSimilair(response)
        }
        catch(error){
          console.log(error);
          
        }
      }
      useEffect(() => {
        fetchCategroy()
      }, [])
    
    //   console.log(suggestedProducts);
  const handleClick = (data) => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <>
    <h3 className='font-bold text-[18px] mb-3 gap-2'>Product Similaire</h3>
    <div className="grid grid-cols-4 mx-auto gap-4">
        {
        similair?.length > 0 && similair.slice(0,4).map((item, index) => (
            <div className="bg-white group cursor-pointer rounded-xl border border-gray-300 p-3 space-y-4">
            {/* Image & actions */}
            <div className="aspect-square rounded-xl imgProduct bg-gray-100 relative">
            <Image 
            onClick={() => handleClick(item)}
                src={item.images?.[0]?.url} 
                alt="" 
                fill
                className="aspect-square object-cover  rounded-md "
            />
            <div className="opacity-0 z-10 gouphover  transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                <button onClick={() => onPreview(item)} className='w-8 h-8 rounded-full flex justify-center items-center bg-[#fff]'>
                    <Expand size={18} className="text-[#000]" />
                </button>
                <button onClick={() => onAddToCart(item)} className='w-8 h-8 rounded-full flex justify-center items-center bg-[#fff]'>
                <ShoppingCart size={18} className="text-[#000]" />
                </button>

                </div>
            </div>
            </div>
            {/* Description */}
            <div onClick={() => handleClick(item)}>
            <p className="font-semibold text-lg">{item.name.length > 20 ? item.name.substring(0, 20 - 3) + '...' : item.name}</p>
            <p className="text-sm text-gray-500">{item.category?.name}</p>
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
            </div>
        </div>
            ))
            }
    </div>
    </>
  )
}

export default ProductSimlair;