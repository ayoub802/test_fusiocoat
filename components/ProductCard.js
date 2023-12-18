import React, { useEffect, useState } from 'react'
import getProducts from '@/actions/getProducts';
import Image from 'next/image';
import { ShoppingCart } from 'iconsax-react';
import { Expand } from 'lucide-react';
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { Loader } from './ui/loader';
import { useTranslation } from 'react-i18next';

const ProductCard = () => {

  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview = (item) => {
    previewModal.onOpen(item);
  };

  
  const onAddToCart = (data) => {
    cart.addItem(data, 1);
  };
    const [products, setProducts] = useState([])
    const router = useRouter();

    const handleClick = (data) => {
      router.push(`/product/${data?.id}`);
    };
    const fetchCategroy = async () => {
      try{
        const response = await getProducts();
        setProducts(response)
      }
      catch(error){
        console.log(error);
        
      }
    }
    useEffect(() => {
      fetchCategroy()
    }, [])
  
    console.log("Products :",products);
    const {t}  = useTranslation("global")


  return (
    <section className='bg-white'>
    <div className="container">
        <div className="text-center mb-10">
                <h2 className="font-bold text__48">{t('UN CHOIX DE')} <span className='bg-Mblue py-.5 px-3 rounded-full text-[#fff]'>{t('CÉRAMIQUES')}</span> {t('POUR')} <br className="hidden sm:block" /> {t('PROFESSIONNELS & NOVICES')}
                </h2>
            </div>
                {
                  products?.length > 0
                  ?
                      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols  max-w-[1024px] mx-auto gap-4">
                      {

                            products.slice(0, 6).map((item, index) => (
                              // <div key={index} className='card_product'>
                              //     <div className="img-block">
                              //        <Image src={item.images?.[0]?.url} width={500} quality={100} height={500} className="m-image w-full h-[450px] rounded-t-[10px] object-cover" />
                              //     </div>
                              //     <div className="img-hover">
                              //        <Image src={item.images?.[1]?.url} width={500} quality={100} height={500} className="m-image w-full h-[450px] rounded-t-[10px] object-cover" />
                              //     </div>
                              //   <button className={'w-full relative'}>
                              //     <div className='p-2 bg-Mgreen'>
                              //         <h4 className='font-bold text-[18px] mb-2 text-center gap-2'>{item.name}</h4>
                              //     </div>
                              //     </button>
                              // </div>
                              <div key={index} className="bg-white group cursor-pointer rounded-xl border border-gray-300 p-3 space-y-4">
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
                                    <button onClick={() => onAddToCart(item)}  className='w-8 h-8 rounded-full flex justify-center items-center bg-[#fff]'>
                                    <ShoppingCart size={18} className="text-[#000]" />
                                    </button>

                                  </div>
                                </div>
                              </div>
                              {/* Description */}
                              <div>
                                <p className="font-semibold text-lg">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.category?.name}</p>
                              </div>
                              {/* Price & Reiew */}
                              <div className="flex items-center justify-between">
                              </div>
                            </div>
                              ))
                      }
                   </div>
                    :
                    <div className='flex items-center justify-center'>
                      <Loader />
                    </div>
                    }
        </div>
    </section>
  )
}

export default ProductCard
