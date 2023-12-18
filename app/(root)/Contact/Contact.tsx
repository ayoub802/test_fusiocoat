"use client"

import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import BannerImage from "../../../public/partenaire_banner.jpg"
import "../../App.css"
import { ProductForm } from '@/components/ContactForm'
import { Facebook, Instagram, Youtube } from 'iconsax-react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin={t("Acceuil")} title="Contact"/>
        <section className='bg-white'>
                <div className="container">

                  <div className='row mt-5 items-start'>
                      <div className="col-md-3">
                            <h3 className="font-bold text-[20px] mb-2 text-black uppercase">FusioCoat</h3>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>{t('ADRESSE POSTALE')} :</span> <br />
                                 FUSIOCOAT® : 442 Rue Georges Besse, 30000 Nîmes, France
                                </h3>
                            </div>
                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>{t('ÉCRIVEZ-NOUS')} :</span> <br />
                                {t('Service Technique')}: technical@fusiocoat.com
                                </h3>
                            </div>
                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>{t('ÉCRIVEZ-NOUS')} :</span> <br />
                                {t('Service Commercial')}: sales@fusiocoat.com
                                </h3>
                            </div>


                      </div>

                      <div className="col-md-6">
                          <h3 className='font-bold text-[#000] text-[20px] leading-7 text-center'>
                          {t('Contactez-nous via notre formulaire')}
                         </h3>
                         <h3 className='font-medium leading-6 text-center'>
                           {t('Veuillez renseigner les informations demandées. Tous les champs (*) sont obligatoires.')}
                         </h3>
                         
                         <div className="mt-4">
                           <ProductForm />
                         </div>
                      </div>

                      <div className="col-md-3">
                           <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>{t('FOLLOW US :')}</span> 
                            </h3>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="w-10 flex justify-center items-center h-10 rounded-full border border-[#000]">
                                    <Facebook 
                                      size={18}
                                      color='#000'
                                      variant='Bold'
                                    />
                                </div>
                                <div className="w-10 flex justify-center items-center h-10 rounded-full border border-[#000]">
                                    <Instagram 
                                      size={18}
                                      color='#000'
                                      variant='Bold'
                                    />
                                </div>
                                <div className="w-10 flex justify-center items-center h-10 rounded-full border border-[#000]">
                                    <Youtube 
                                      size={18}
                                      color='#000'
                                      variant='Bold'
                                    />
                                </div>
                            </div>
                      </div>


                  </div>


                </div>
            </section>


        <Footer />
    </div>
</div>
  )
}

export default Contact