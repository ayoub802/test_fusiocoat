"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import BannerImage from "../../../public/partenaire_banner.jpg"
import { Banner } from '@/components/Banner'
import Reve from "../../../public/invest.png"
import Reve1 from "../../../public/confort.png"
import Reve2 from "../../../public/clock.png"
import "../../App.css"
import Image from 'next/image'
import { ArrowRight3 } from 'iconsax-react'
function Revetement() {
  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="Accueil" title="LES REVÊTEMENTS CÉRAMIQUES FUSIOCOAT®"/>
        <section className='bg-white'>
                <div className="container">
                  <h3 className="font-bold text__48 mb-8 text-center">POURQUOI LES REVÊTEMENTS FUSIOCOAT® SUR VOTRE VOITURE ?
                  </h3>
                  <div className="mt-1">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="my-4">
                                <Image alt='' src={Reve} className='w-36 h-36 mx-auto md:!mx-0'/> 
                                <h3 className='font-medium leading-6 mb-4 text-[#fff] my-4 uppercase bg-Mblue px-3 py-1 rounded-full mx-auto md:!mx-0  max-w-max'>
                                Investissement Sûr
                                </h3>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                        Qualité des surfaces préservées
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                        Entretien des surfaces minimum
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                    Le capital est préservé
                                      </h3>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="my-4">
                                <Image alt='' src={Reve1} className='w-36 h-36 mx-auto md:!mx-0 '/> 
                                <h3 className='font-medium leading-6 mb-4 text-[#fff] my-4 uppercase bg-Mblue px-3 py-1 mx-auto md:!mx-0 rounded-full  max-w-max'>
                                Confort & Durabilité
                                </h3>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                    Des surfaces brillantes et déperlantes
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                    Les couleurs d&apos;origines préservées
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                    Les lavages deviennent faciles
                                      </h3>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="my-4">
                                <Image alt='' src={Reve2} className='w-36 h-36 mx-auto md:!mx-0 '/> 
                                <h3 className='font-medium leading-6 mb-4 text-[#fff] my-4 uppercase bg-Mblue mx-auto md:!mx-0 px-3 py-1 rounded-full  max-w-max'>
                                Simple & Efficace
                                </h3>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                        Qualité des surfaces préservées
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                        Entretien des surfaces minimum
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight3
                                        size="22"
                                        color="#000"
                                        />
                                    <h3 className='font-medium text-[12px] leading-6 text-[#000] text-left uppercase'>
                                    Le capital est préservé
                                      </h3>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  <div className="col-md-12">
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                        En une seule couche, les revêtements FUSIOCOAT® forment des films de plusieurs microns épais, uniformes et compacts sur les peintures, verres, plastiques et métaux, permettant ainsi de maintenir leurs qualités esthétiques, leurs fonctionnalités et le conforts d&apos;utilisations.                        
                        </h3>
                    </div>
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                        Les revêtements FUSIOCOAT® apportent une résistance maximale face aux conditions d&apos;expositions les plus sévères; milieux secs, humides, températures hivernales et estivales extrêmes; en milieux marins ou continentaux.                        
                        </h3>
                    </div>
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                        Avec sa version FC-ONE ULTIMATE, FUSIOCOAT propose une durabilité PERMANENTE contre les agressions chimiques et environnementales.                         
                         </h3>
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

export default Revetement