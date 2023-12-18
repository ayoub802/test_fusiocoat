"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LireBlog } from '@/components/LireBlog'
import React from 'react'
import BannerImage from "../../../public/qu-est-ce-qu-un-revetement-ceramique.jpg"
import Blog_1 from "../../../public/IMAGE-CERAMIQUE-1.png"
import { Banner } from '@/components/Banner'

import "../../App.css"
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
function Cermic() {

    const [t, i18n] = useTranslation("global");

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="FUSIOCOAT®" title={t("Qu’est ce qu’un revêtement céramique ?")}/>
        <section className='bg-white'>
                <div className="container">

                  <div className='row items-center'>
                      <div className="col-md-6">
                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                  De manière générale, un revêtement céramique est une seconde peau qui vient se déposer sur une surface, formant une barrière protectrice.
                                </h3>
                            </div>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                Le revêtement céramique comble la porosité de la surface et forme un film uniforme qui améliore la résistance d’un matériau contre les agressions environnementales (expositions chimiques, températures, irradiations UV…) ou sollicitations mécaniques liées à sa manipulation.                                
                                </h3>
                            </div>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                 Les propriétés esthétiques de la surface sont préservées, voire améliorées pour certaines surfaces. Le revêtement céramique repousse l’eau et les UVs et réduit l’adhésion des saletés et polluants, facilitant aussi le nettoyage. De plus, en fonction de leurs « dureté » ils peuvent protéger des rayures et impacts mineurs.                                
                                 </h3>
                            </div>
                      </div>

                      <div className="col-md-5">
                         <Image src={Blog_1} width={500} alt='' height={500} quality={100}/>
                      </div>


                  </div>

                  <div className="col-md-12">
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                            Cependant,  les performances des revêtements céramiques vont dépendre essentiellement de leurs adhésions sur les matériaux à protéger et des résistances chimiques et physiques des ingrédients les constituant. À ce titre, toutes les céramiques ne se valent pas et la grande majorité des revêtements céramiques disponibles dans le commerce, sont des revêtements dits sacrificiels, qui ont des durées de vies limitées, typiquement de quelques mois à 2 ans maximum                                
                        </h3>
                    </div>
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                        Les revêtements céramiques proposés pour la protection de surfaces dans le domaine de l’automobile sont composés de minéraux à base de silicium seuls ou en combinaison avec des résines organiques. Ils sont appliqués par chiffonnage ou spray pour former des couches d’épaisseurs généralement comprises entre 100 nm et 2 microns.                        
                        </h3>
                    </div>
                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                        La différence majeure entre les revêtements céramiques aujourd’hui disponibles dans le commerce réside dans leurs compositions chimiques des et qui vont définir l’ADHÉSION et la DURETÉ du revêtement sur le substrat, ainsi que ses RÉSISTANCES CHIMIQUES, MÉCANIQUES ET PHYSIQUES, donc sa DURABILITÉ.                         
                         </h3>
                    </div>
                  </div>


                </div>
            </section>


        <Footer />
    </div>
</div>
  )
}

export default Cermic