"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import { redirect } from 'next/navigation';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect, useState } from 'react';
import HeroBanner from "../../public/Fusiocoat banner.svg"
import Image from 'next/image';
import Item1 from "../../public/how_work1.svg"
import Item2 from "../../public/how_work2.svg"
import Item3 from "../../public/how_work3.svg"
import Item4 from "../../public/how_work4.svg"
import Product from "../../public/FC Glass.png"
import Product1 from "../../public/FC Ultimate.png"
import Product2 from "../../public/FC Smart.png"
import Product3 from "../../public/FC Boost.png"
import { Button } from '@/components/Button';
import  ProductCard  from '@/components/ProductCard';
import Gellery1 from "../../public/zit pic.png"
import Gellery2 from "../../public/deco pic.webp"
import Gellery3 from "../../public/gel pic.png"
import Gellery4 from "../../public/deco pic (1).webp"
import Gellery5 from "../../public/Pic1.png"
import Gellery6 from "../../public/pic2.png"
import Gellery7 from "../../public/pic3.png"
import Gellery8 from "../../public/pic4.png"
import Gellery9 from "../../public/pic5.webp"
import Gellery10 from "../../public/pic6.webp"
import Gellery11 from "../../public/pic7.webp"
import Gellery12 from "../../public/pic8.webp"
import Carsction from "../../public/Fusio coat.png"
import Pattern from "../../public/patern.svg"
import '../App.css'
import { ProductForm } from '@/components/ContactForm';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FAQ } from '@/components/FAQ';
import { useTranslation } from 'react-i18next';
import { Testimonial } from '@/components/Testimonial';
export const Hero = () => {

    const {t}  = useTranslation("global")
  return (
    <div className='w-full overflow-hidden bg-[#000]'>
      <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <section className='relative overflow-hidden min-h-[calc(100vh_-_88px)] lg:min-h-[calc(100vh_-_98px)] bg-[#010101] flex flex-wrap pb-0'>
          <Image width={500} height={500} quality={100} src={HeroBanner} className='absolute left-0 top-0 w-full h-full object-cover object-top' alt="" />
          <div className="relative z-[2] w-full container flex justify-start items-center">
            <h2>
            </h2>
              <div className="row">
                  <div className="col-md-8 col-8">
                      <p className="text__18 text-Mgreen mb-2">FUSIOCOAT</p>
                      <h1 className="font-semibold text__48 text-Mwhite mb-2">{t('La solution ultime pour une protection maximale')}<br className="hidden xl:block" />{t('et une esthétique renouvelée de votre voiture.')}</h1>
                      <p className="text__18 text-[#A3A3A3] mb-2">{t("Fusiocoat - l'innovation qui offre une protection exceptionnelle et")} 
                      <br className="hidden xl:block" /> {t("une esthétique rafraîchie pour vos véhicules, qu'ils voguent sur l'eau,")}
                      <br className="hidden xl:block" /> {t("volent dans le ciel ou roulent sur la route.")}
                      </p>
                  </div>
              </div>
          </div>
        </section>

        <section className='bg-white'>
        <div className="container">
            <div className="text-center mb-10">
                <p className="mb-2 text__16">{t('HOW IT WORKS')}</p>
                <h2 className="font-semibold text__48">{t('Pourquoi choisir notre solution')}<br className="hidden sm:block" /> {t('pour votre automobile')}
                </h2>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 text-center sideLine">
            <div className="relative px-4">
                <Image width={500} height={500} quality={100} src={Item1} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                    <h5 className="font-semibold text__20 mb-2 capitalize">{t("EASY APPLICATIONS")}</h5>
                    <p className="text__14 text-[#525252]">{t('A single coating for a maximum efficiency')}</p>
            </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item2} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                <h5 className="font-semibold text__20 mb-2 capitalize">{t('SAFE TO USE')}</h5>
                <p className="text__14 text-[#525252]">{t("Non-toxic and eco-friendly products")}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item3} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('DURABILITY')}</h5>
            <p className="text__14 text-[#525252]">{t('Unsurpassed chemical and weather resistance')}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item4} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('AFTER SALE')}</h5>
            <p className="text__14 text-[#525252]">{t("Shipping within 24 h – Happy or refunded – Immediate support")}</p>
        </div>
        </div>
        </div>
        </section>

          <section className='bg-white'>
            <div className="container">
                <div className="text-center mb-14">
                    <p className="mb-2 text__16">{t('OUR VALUES')}</p>
                    <h2 className="font-bold text__48">{t('LA TECHNOLOGIE')} <br className="hidden sm:block" /> FUSIOCOAT®
                    </h2>
                </div>
              <div className="gap-y-10 row">
                    <div className="col-md-12">
                        <div className="text-center">
                              <h5 className="font-bold text__20 mb-2">{t('FUSIOCOAT® est le fruit de plus de 15 ans de recherches scientifiques dans la chimie des revêtements.')} </h5>
                              <p className="text__18 text-[#525252]">
                              {t('Les produits FUSIOCOAT® apportent une durabilité sans précédent vis-a-vis des effets climatiques et chimiques pour préserver les qualités esthétiques des surfaces, tout en étant non toxiques pour l’Homme et l’ environnement.')}
                              </p>
                              <div className='mt-4'>
                                <Button title={t("En savoir plus")}/>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section className='bg-white'>
           <div className="container">
            <div className="relative">
               <Image src={Carsction} width={1500} height={1500} quality={100} alt='' className='lg:w-[60rem] md:w-[40rem] md:h-[20rem] w-[30rem] h-[13rem] -rotate-90 md:rotate-0 mx-auto lg:h-[30rem]' />
               <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute top-[50%] md:left-[20%] left-[33%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-GLASS – REVÊTEMENT HYDROPHOBE POUR VERRES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>33,00MAD – 49,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute md:top-[20%] top-[105%] left-[50%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product1} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE ULTIMATE – PROTECTION PERMANENTE</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>94,00MAD – 144,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute md:top-[30%] -top-[27%] left-[45%] md:left-[80%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                    <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product2} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE SMART – PROTECTION POUR PEINTURES 5 ANS</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>69,00MAD – 89,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className='absolute md:top-[78%] -top-[11%] left-[65%] md:left-[80%] md:w-5 md:h-5 w-3 h-3  pulse rounded-full bg-[#fff] cursor-pointer'>
                            
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 !bg-[#020817]">
                        <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product3} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-TRIM – PROTECTION GARNITURES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>39,00MAD – 59,00MAD</p>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
           </div>
         </section>

        <section className='bg-black'>
        <div className="container">
        <div className="text-center mb-10">
            <h2 className="font-bold text__48 text-[#fff]">{t('LES AVIS DE NOS UTILISATEURS')}
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery1} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery5} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery9} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery2} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery6} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery10} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery3} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery7} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery11} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery4} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery8} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery12} alt=""/>
              </div>
          </div>
        </div>


        </div>  
    </section>
    
    <Testimonial />
    <FAQ />
    
    <section className="bg-Mgreen relative overflow-hidden">
        <Image width={100} height={100} quality={100} src={Pattern} className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div className="text-center relative z-2 container">
            <p className="text__18 mb-2">NEWSLETTER</p>
            <h2 className="font-bold text__48 mb-8">{t('POUR TOUTE QUESTION MERCI DE NOUS')}  <br />{t('CONTACTER VIA LE FORMULAIRE CI-DESSOUS')}</h2>
             <ProductForm />
        </div>
    </section>

       <Footer />
      </div>
    </div>
  )
}
