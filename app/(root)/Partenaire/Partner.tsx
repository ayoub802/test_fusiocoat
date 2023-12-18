"use client"
import * as z from "zod"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { useState } from 'react'
import BannerImage from "../../../public/partenaire_banner.jpg"
import { Banner } from '@/components/Banner'
import Marin from "../../../public/marine_aero.jpg"
import Marin1 from "../../../public/marine_aero1.jpg"
import "../../App.css"
import Image from 'next/image'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useTranslation } from 'react-i18next'

const formSchema = z.object({
  nomComplet: z.string().min(1),
  societe: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});

type ProductFormValues = z.infer<typeof formSchema>

function Partner() {

  const params = useParams();
  const router = useRouter();
  const [t, i18n] = useTranslation("global");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = 'Create product';
  const description = 'Add a new product';
  const toastMessage = 'Your message is sent Successfully.';
  const action =  'Create';

  const defaultValues = {
    nomComplet: '',
    societe: "",
    email: "",
    phone: "",
    message: "",
  }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: ProductFormValues) => {
    try { 
      setLoading(true);
     await axios.post(`/api/partner/`, data);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin={t("Accueil")} title={t("NOUS REJOINDRE")}/>
        <section className="bg-white">
      <div className="container">
        <div className="justify-between row items-center">
          <div className="mb-4 md:mb-0 col-md-5">
            <h2 className="font-bold text__32 mb-3">{t('Vous êtes un installateur professionnel ou un concessionnaire.')}</h2>
            <p className="text__16 text-[#525252]">
                {t('Vous recherchez le produit qui va apporter totale satisfaction à vos clients et augmenter votre image de marque. Vous êtes au bon endroit !!!')}
            </p>
            <p className="text__16 text-[#525252] my-4">
            {t("En mettant l’accent sur le professionnalisme et la qualité, nous vous proposons les meilleures revêtements céramiques actuellement disponibles sur le marché en terme de durabilités esthétiques, de conforts d’utilisations et de simplicités d’applications.")}
            </p>
            <p className="text__16 text-[#525252] my-4">
              {t('Contactez-nous pour plus d’information')}.            
            </p>
            <div className="my-5">
              <h2 className="font-bold text__32 mb-3">{t("Vous souhaitez devenir un installateur FUSIOCOAT®")}</h2>
              <p className="text__16 text-[#525252]">
                {t("Vous êtes enthousiaste, animé par l’excellence professionnelle et passionné du detailing.")}            
              </p>
            <p className="text__16 text-[#525252] my-4">
               {t("Nous vous accompagnons dans votre formation d’installateur de revêtements céramiques FUSIOCOAT®.")}            
            </p>
            <p className="text__16 text-[#525252] my-4">
            {t("Contactez-nous pour en discuter. ")}          
            </p>
            </div>
          </div>
          <div className="col-md-6">
               <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[450px] mx-auto">
          <div className="grid md:grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="nomComplet"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={loading} className='!border-[#000] placeholder:text-[#000]' placeholder={t("Nom* et Prénom")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="societe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000]' placeholder={t("Socieéte (si applicable)")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000]' placeholder={t("Email*")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000]' placeholder={t("Téléphone*")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {/* <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000]' placeholder="Merci d'écriture votre message* " {...field} /> */}
                    <Textarea  disabled={loading} placeholder={t("Merci d'écriture votre message*")} {...field} className='bg-transparent placeholder:text-[#000] h-52 border border-[#000]'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <Button disabled={loading} className="inline-block cursor-pointer font-medium text__16 text-Mwhite !rounded-[24px] !border-Mblue bg-Mblue btnClass  uppercase " type="submit">
          {t('envoyer')}
          </Button>
        </form>
              </Form>
          </div>
        </div>
      </div>
    </section>
        <Footer />
    </div>
</div>
  )
}

export default Partner