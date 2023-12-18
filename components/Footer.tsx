import { Facebook, Instagram, Youtube } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import Logo from "../public/Morocco.png"
import { useRouter } from 'next/navigation'


export const Footer = () => {

    const router = useRouter();
  return (

    <section className="pb-6 bg-Mblack">
        <div className="container">
            <div className="mb-10 gap-y-8 row">
                <div className="col-md-3">
                    <Image width={100} height={100} quality={100} src={Logo} className='w-[150px] h-[35px] mb-2' alt="" />
                    <p className="text__16 text-[#D4D4D4] mb-4">Revêtements céramiques pour voitures, avions, bâteaux, vitrages</p>
                    <div className="flex items-center gap-3">
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                        <Facebook
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                        <Instagram
                            size="18"
                            color="#FFF"
                            />
                        </a>
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                            <Youtube
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>

                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-6 offset-md-1">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">NAVIGATION</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite" href="/">ACCUEIL</a>
                        <a className="inline-block w-full text-Mwhite" href="/about">EN SAVOIR PLUS</a>
                        <a className="inline-block w-full text-Mwhite" href="/Automobile">AUTOMOBILE</a>
                        <a className="inline-block w-full text-Mwhite" href="/Aeronautique">AÉRONAUTOQUE</a>
                        <a className="inline-block w-full text-Mwhite" href="/Marine">MARINE</a>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-6">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">MENU</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite" href="/blog">En savoir plus</a>
                        <a className="inline-block w-full text-Mwhite" href="/boutique">Boutique</a>
                        <a className="inline-block w-full text-Mwhite" href="/Partnaire">Devnire partenaire</a>
                        <a className="inline-block w-full text-Mwhite" href="/contact">Contactez-vous</a>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-6">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">INFORMATIONS</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite">42 Rue Georges Besse, 30000 Nîmes, France</a>
                        <a className="inline-block w-full text-Mwhite">info@fusiocoat.com</a>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-6">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">NOS PRODUITS</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite" href="/privacy">FC-ONE ULTIMATE</a>
                        <a className="inline-block w-full text-Mwhite" href="/terms">FC-ONE SMART</a>
                        <a className="inline-block w-full text-Mwhite" href="/terms">FC-BOOST</a>
                        <a className="inline-block w-full text-Mwhite" href="/terms">FC-GLASS</a>
                        <a className="inline-block w-full text-Mwhite" href="/terms">FC-TRIM</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-y-2 items-center px-4 py-2 bg-[#262626] rounded-full">
                <p className="text-center text__14 text-[#A3A3A3] sm:!order-1 order-2">© 2023 FUSIOCOAT® WHD AGENCY.</p>
                <div className="flex items-center justify-center sm:justify-end gap-6 order-1 sm:!order-2">
                    <a className="inline-block sm:text__16 text__14 text-Mwhite flex-shrink-0" href="/Legal">Mentions légales</a>
                    <a className="inline-block sm:text__16  text__14 text-Mwhite flex-shrink-0" href="/terms">Conditions générales de vente</a>
                </div>
            </div>
       </div>
   </section>
  )
}
