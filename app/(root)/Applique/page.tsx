"use client"


import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import React from 'react'
import BannerImage from "../../../public/qu-est-ce-qu-un-revetement-ceramique.jpg"
import Image from 'next/image'
import Icon1 from "../../../public/preparation.png"
import Icon2 from "../../../public/application.png"
import Icon3 from "../../../public/stabilisation.png"
import { Footer } from '@/components/Footer'
import "../../App.css"
import YouTubePlayer from '@/components/YouTubePlayer'

function Applique() {
  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="FUSIOCOAT®" title="COMMENT APPLIQUER LA GAMME FUSIOCOAT® ?"/>
        <section className='bg-white'>
                <div className="container">

                <YouTubePlayer videoId="jwnfkF6X1Q0?si=iR5ea1vRTciBlq6G" />
                  <div className='row items-center'>

                      <div className="col-md-12">
                         <div className="my-4">
                            <div className="flex items-center flex-col max-w-[750px] mx-auto gap-4">
                                <Image src={Icon1} alt='' width={500} height={500} quality={100} className='w-28 h-28'/>
                                <div className='text-center'>
                                    <h2 className='font-bold text-[25px] mb-4 leading-6'>
                                        PREPARATION DE LA SURFACE
                                    </h2>
                                    <p className='font-medium leading-6 mb-2'>
                                       La pose de la céramique doit être réalisée dans un endroit propre, sec, à l&apos;abris du soleil et dans lequel la température est comprise entre 15 et 30ºC.
                                    </p>
                                    <p className='font-medium leading-6 mb-2'>
                                    Pour une finition parfaite, il est recommandé de suivre les quatre étapes suivantes :                                    
                                    </p>
                                    <ul className='list-decimal text-left ml-4'>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                              Nettoyage : 
                                            </span> Lavage et séchage de la surface pour obtenir une surface propre et parfaitement sèche.</h3>
                                        </li>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                             Décontamination : 
                                            </span> Elimination des contaminants minéraux et organiques.</h3>
                                        </li>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                            Polissage : 
                                            </span> Les rayures, tourbillons et autres imperfections de surfaces sont corrigés par polissage afin d&apos;obtenir une surface lisse et uniforme. Cette étape est souvent essentielle pour les véhicules usagés ou anciens (parfois même neufs).</h3>
                                        </li>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                            Neutralisation : 
                                            </span> Les corps gras, provenant du polissage, sont éliminés au moyen d&apos;une solution à base d&apos;IPA (alcool isopropylique).</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="my-4">
                            <div className="flex items-center flex-col max-w-[750px] mx-auto gap-4">
                                <Image src={Icon2} alt='' width={500} height={500} quality={100} className='w-28 h-28'/>
                                <div className='text-center'>
                                    <h2 className='font-bold text-[25px] mb-4 leading-6'>
                                    APPLICATION DU REVÊTEMENT
                                    </h2>
                                    <ul className='list-decimal text-left ml-4'>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                            Dépose du produit sur le tissu d&apos;application : 
                                            </span> Déposer 2 lignes de produit d&apos;environ 5 à 7 cm et espacées d&apos;environ 1 cm au moyen de la micropipette fournie sur une microfibre ou tissu doux non pelucheux pour application céramique.</h3>
                                        </li>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                            Application :
                                            </span> Appliquer la microfibre sans pression au moyen de mouvements linéaires croisés sur une surface d&apos;environ 30 cm X 30 cm. Le mouvement est effectué à la fois verticalement et horizontalement pour que l&apos;intégralité de la surface soit traitée uniformément. Pour optimiser la finition de votre revêtement, travailler sur une seule section à la fois.</h3>
                                        </li>
                                        <li className='ml-4 mb-2'>
                                            <h3>
                                            <span className='font-semibold text-[16px] mb-4 leading-6'>
                                            Essuyage : 
                                            </span> 1 minute environ après cette première étape, ajuster la surface du revêtement au moyen d&apos;une serviette microfibre entre 2 à 3 passages verticaux et horizontaux sans pression.</h3>
                                        </li>
                                    </ul>

                                    <p className='font-medium leading-6 mb-2'>
                                    Il faut compter environ 2 h pour appliquer les revêtements FUSIOCOAT® sur l&apos;intégralité de la carrosserie d`une voiture de taille moyenne.                                    
                                    </p>
                                </div>
                            </div>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="my-4">
                            <div className="flex items-center flex-col max-w-[750px] mx-auto gap-4">
                                <Image src={Icon3} alt='' width={500} height={500} quality={100} className='w-28 h-28'/>
                                <div className='text-center'>
                                    <h2 className='font-bold text-[25px] mb-4 leading-6'>
                                      STABILISATION DU REVÊTEMENT
                                    </h2>
                                    <p className='font-medium leading-6 mb-2'>
                                    Tous les revêtements de la gamme FUSIOCOAT® utilisent l&apos;humidité ambiante pour durcir et se lier sur les surfaces (peintures, verres, plastiques et métaux). Les revêtements sont secs au maximum 30 min après la pose mais leurs durées de stabilisations sont de 24 h (à température ambiante, de 15 à 30 deg C). Pendant cette durée, nous recommandons fortement de garder le véhicule au sec et de ne commencer les premiers lavages qu&apos;après 7 jours. Aussi, éviter les lavages aux rouleaux pendant les 30 premiers jours. Toutefois, le véhicule peut être utilisé à la suite des premières 24 h de stabilisation.                                   
                                     </p>
                                </div>
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

export default Applique