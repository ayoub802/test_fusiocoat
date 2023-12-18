import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Deco from "../public/deco pic.webp"
import Navigation from "swiper"
import Stars from "../public/iconmonstr-star-filled.png"
// Import Swiper styles
import "swiper/css";
import { useTranslation } from 'react-i18next';
import { ArrowLeft2, ArrowRight2, Star, Star1 } from 'iconsax-react';
export const Testimonial = () => {

    const {t}  = useTranslation("global")

  return (
    <section className="bg-[#000] ">
        <div className="text-center relative z-2 container">
            <p className="text__18 text-[#fff] mb-2 uppercase">{t('Testimonials')}</p>
            <h2 className="font-bold text__48 text-[#fff] mb-8 uppercase">{t('Échos Élogieux : L’Expérience de')} <br />{t('nos Clients avec Nos Revêtements Céramiques')}</h2>
        </div>
        <div className="container">
            <div className="max-w-[750px] mx-auto mt-5">
                <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                // modules={[Navigation]}
                >
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={Deco} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     SARAH L.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>AUDI TT / Ceramic Coating</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={Deco} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     SARAH L.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>AUDI TT / Ceramic Coating</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={Deco} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     SARAH L.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>AUDI TT / Ceramic Coating</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={Deco} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     SARAH L.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>AUDI TT / Ceramic Coating</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperNavButtons />
                </Swiper>
            </div>
        </div>
</section>
  )
}

const SwiperNavButtons  = () => {
    const item = useSwiper();

    return (
      <div className="flex items-center gap-2 justify-end m-3">
        <button onClick={() => item.slidePrev()} className='flex justify-center items-center border border-[#aaa] w-10 h-10 rounded-full'>
            <ArrowLeft2
                size="20"
                color="#fff"
                />
        </button>
        <button onClick={() => item.slideNext()} className='flex justify-center items-center border border-[#aaa] w-10 h-10 rounded-full'>
        <ArrowRight2
                size="20"
                color="#fff"
                />
        </button>
      </div>
    );
}
