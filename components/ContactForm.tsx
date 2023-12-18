"use client"

import * as z from "zod"
import axios from "axios"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { Trash } from "lucide-react"
import { Category, Color, Contact, Image, Product } from "@prisma/client"
import { useParams, useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading"
import { AlertModal } from "@/components/modals/alert-modal"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ImageUpload from "@/components/ui/image-upload"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "./ui/textarea"
import { useTranslation } from "react-i18next"

const formSchema = z.object({
  nomComplet: z.string().min(1),
  societe: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
  shoisir: z.string(),
});

type ProductFormValues = z.infer<typeof formSchema>



export const ProductForm = ({
}) => {
  const params = useParams();
  const router = useRouter();

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
    shoisir: ""
  }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: ProductFormValues) => {
    try { 
      setLoading(true);
     await axios.post(`/api/contact/`, data);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/dashboard/products/`);
      router.refresh();
      router.push(`/dashboard/products`);
      toast.success('Your message is sent Successfully.');
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[450px] mx-auto">
          <div className="grid grid-cols-1 gap-3">
          <FormField
          control={form.control}
          name="shoisir"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger placeholder={t("Choisir*")} className="placeholder:text-[#000]">
                    <SelectValue placeholder={t("Choisir*")} className="placeholder:text-[#000]" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="Question technique sur nos produits">{t("Question technique sur nos produits")}</SelectItem>
                    <SelectItem value="Informations partenariats professionnels">{t("Informations partenariats professionnels")}</SelectItem>
                    <SelectItem value="Demander à être rappelé">{t('Demander à être rappelé')}</SelectItem>
                    <SelectItem value="Autres demandes">{t('Autres demandes')}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
    </>
  );
};