"use client"

import { Header } from '@/components/Header'
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Footer } from '@/components/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import ProductCard from '@/components/ProductCard'
import { useRouter } from 'next/navigation'
import getProducts from '@/actions/getProducts'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'
import Image from 'next/image'
import { Expand, ShoppingCart } from 'lucide-react'
import getCategories from '@/actions/getCategories'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Currency from '@/components/currency'
import { sortBy } from 'sort-by-typescript';
import { Heart, ShopAdd } from 'iconsax-react'
import Product from "../../../public/ProductFusio.webp"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader } from '@/components/ui/loader'
import { useTranslation } from 'react-i18next'

const filters = [
    {
      id: "Sort",
      name: "Sort",
      options: [
        { value: "asc", label: "Low Price" },
        { value: "desc", label: "High Price" },
        { value: "m", label: "letest" },
        { value: "l", label: "oldest" },
      ],
    },
  ]

export default function BoutiqueCom() {
    const previewModal = usePreviewModal();
    const cart = useCart();
  
    const onPreview = (item: any) => {
      previewModal.onOpen(item);
    };
  
    
    // const onAddToCart = (data: any) => {
    //   cart.addItem(data);
    // };
      const [products, setProducts] = useState<any>([])
      const [categories, setCategories] = useState<any>([])
      const router = useRouter();
      const [sortByFilter, setSortByFilter] = useState<any>([]);
      const [sotredProduct, setStoredProduct] = useState<any>([])
      const handleClick = (data: any) => {
        router.push(`/product/${data?.id}`);
      };
      const fetchProduct = async () => {
        try{
          const response = await getProducts();
          setProducts(response)
        }
        catch(error){
          console.log(error);
          
        }
      }
      const fetchCategories = async () => {
        try{
          const response = await getCategories();
          setCategories(response)
        }
        catch(error){
          console.log(error);
          
        }
      }
      useEffect(() => {
        fetchProduct();
        fetchCategories()
      }, [])

      
      const handleChange = (e: any) => {
        setSortByFilter(e);
         const tempArray = products;
         if(sortByFilter == 'asc'){
          tempArray.sort(sortBy('price'))
        }
        
        else if (sortByFilter == 'desc'){
          tempArray.sort(sortBy('-price'))
         }
        else if(sortByFilter == 'new')
         {
          tempArray.sort(sortBy('createdAt'))
         }
        else if(sortByFilter == 'last')
         {
          tempArray.sort(sortBy('-createdAt'))
         }
         setStoredProduct(tempArray)
    }

    const {t}  = useTranslation("global")

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
      <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <section aria-labelledby="products-heading" className="bg-[#fff]">
            <div className="container">
                <div>
                  <div className='my-3 max-w-max'>
                    <Select onValueChange={(val) => handleChange(val)}>
                      <SelectTrigger  className="placeholder:text-[#000] gap-2 !focus:ring-inset !ring-offset-0 !focus:ring-offset-0 !focus:ring-offset-[#fff]">
                        <SelectValue placeholder={t("Sort By")} className="placeholder:text-[#000] pr-2" />
                      </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="asc">{t('High Price')}</SelectItem>
                        <SelectItem value="desc">{t('Low Price')}</SelectItem>
                        <SelectItem value="new">{t('Newest')}</SelectItem>
                        <SelectItem value="last">{t('Oldest')}</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>

                    {
                      products?.length == 0 
                      ?
                      <div className='flex justify-center items-center'>
                        <Loader />
                      </div>
                      :
                        <div className="grid grid-cols md:grid-cols-3 sm:grid-cols-2  max-w-[1224px] mx-auto gap-4">
                          {
                            products.slice(0,6).map((item: any, index: any) => (
                              <article key={index} className="relative flex flex-col items-center overflow-hidden">
                                    <div className="w-[400px] h-auto ">
                                        <Image src={item.images?.[0]?.url} onClick={() => onPreview(item)} className='w-[400px] h-[400px] object-cover cursor-pointer' width={500} height={500} quality={100} alt=""/>
                                    </div>
      
                                    <div className="w-full flex mt-3 flex-col items-start">
                                      <h3 className='text-[12px] leading-[1.33] mb-2 uppercase px-3 py-1.5 rounded-full text-[#fff] bg-[#000]'>{item.category?.name}</h3>
                                      <h2 className='text-[16px] mb-[5px] font-Medium leading-[1.278]'>{item.name}</h2>
                                      <Currency value={item?.price} />
                                    </div>
                                </article>
      
                            ))}

                         </div>
                        }



                </div>
            </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
