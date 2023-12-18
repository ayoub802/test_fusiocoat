import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import Logo from "../public/Morocco.png"
import Eng from "../public/english.png"
import fr from "../public/french.png"
import { ArrowDown2, Bag2, CloseCircle, Trash } from 'iconsax-react';
import Image from 'next/image';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import useCart from '@/hooks/use-cart';
import { redirect, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const components: { title: string;href: string}[] = [
    {
      title: "Qu’est ce qu’un revêtement céramique ?",
      href: "/Cermic"
    },
    {
      title: "Les revêtements céramiques Fusiocoat",
      href: "/Cermic"
    },
    {
      title: "Comment appliquer Fusiocoat ?",
      href: "/Cermic"
    },
  ]

  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#27272a] hover:text-accent-foreground cursor-pointer focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-center">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isDrop, setIsDrop] = useState(false);
    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [navabarScroll, setnavabarScroll] = useState(false)
    const [t, i18n] = useTranslation("global");
    const [openCart, setOpenCart] = useState(false)
    const cart = useCart();
    const { incrementQuantity, decrementQuantity } = useCart();

    const router = useRouter();
    const stickNavabr = () => {
        if (window.scrollY > 100) {
            setnavabarScroll(true)
        }
    }

    const handleClick = (data: any) => {
        router.push(`/product/${data?.id}`);
      };


    const onRemove = (item: any) => {
        cart.removeItem(item.id);
    };

    const items = useCart((state) => state.items);

    const [quantity, setQuantity] = useState(1)
    const [SelectOption, setSelectOption] = useState('fr')

    const totalPrice = items.reduce((total, item) => {
        return total + (Number(item.price) * item.quantity)
      }, 0);

      const menuVars = {
        initial: {
          scaleY: 0,
        },
        animate: {
          scaleY: 1,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        exit: {
          scaleY: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };
      const containerVars = {
        initial: {
          transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
          },
        },
        open: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
          },
        },
      };
    
      const handleChangeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    }
    
  return (
    <>
        <Fragment>

          


            <div className={'fixed py-4 w-full z-[9] left-0 top-0 bg-[#010101]'}>
                <div className="container">
                    <div className='flex justify-between items-center'>


                        <Link href='/' className=''>
                            {
                                <Image src={Logo} className='w-[150px] h-[35px]' alt="" />
                            }

                        </Link>

                        <NavigationMenu className='lg:block hidden'>
                        <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href='/' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                {t('Accueil')}
                                </NavigationMenuLink>
                            </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger style={{backgroundColor: "transparent", color: "#fff"}}>FUSIOCOAT®</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-[#000]'>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                                {/* <ListItem className='text-[#fff] hover:text-[#fff]' href="/Automobile" title="Automobile">
                                </ListItem>
                                <ListItem className='text-[#fff] hover:text-[#fff]' href="/Aeronautique" title="Aéronautique">
                                </ListItem>
                                <ListItem className='text-[#fff] hover:text-[#fff]' href="/Marine" title="Marine">
                                </ListItem> */}
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                        <Link href="/Automobile" legacyBehavior passHref>
                                            {t('Automobile')}
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                        <Link href="/Aeronautique" legacyBehavior passHref>
                                            {t('Aéronautique')}
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                        <Link href="/Marine" legacyBehavior passHref>
                                            Marine
                                        </Link>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                            <NavigationMenuTrigger style={{backgroundColor: "transparent", color: "#fff"}}>{t('En savoir plus')}</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-[#000]'>
                                <ul className="grid w-[400px] gap-3 p-4 items-center justify-center !text-center md:w-[500px] md:grid-cols lg:w-[600px] ">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff", textAlign: "center", width: "100%"}}>
                                    <Link href="/Cermic" legacyBehavior passHref>
                                         {t('Qu’est ce qu’un revêtement céramique ?')} 
                                    </Link>
                                        </NavigationMenuLink>
                                    <Link href="/Revetements" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff", textAlign: "center", width: "100%"}}>
                                         {t('Les revêtements céramiques Fusiocoat')}
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/Applique" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff", textAlign: "center", width: "100%"}}>
                                          {t('Comment appliquer Fusiocoat ?')}
                                        </NavigationMenuLink>
                                    </Link>
                                </ul>
                            </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                            <Link href="/Boutique" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                {t('Boutique')}
                                </NavigationMenuLink>
                            </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <Link href="/Partenaire" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                {t('Devenir Revendeur')}
                                </NavigationMenuLink>
                            </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <Link href="/Contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff"}}>
                                {t('Contact')}
                                </NavigationMenuLink>
                            </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        </NavigationMenu>
                        

                        <div className='lg:flex hidden items-center gap-6'>
                            <Sheet>
                            <SheetTrigger asChild>
                                <button className="hidden lg:block">
                                <div className="rounded-full justify-center flex items-center relative">
                                <Bag2
                                    size="22"
                                    color="#FFF"
                                    />
                                    {
                                        cart.items.length > 0
                                        ?
                                        <span className='w-4 h-4 bg-[#d9534f] rounded-full absolute -top-2 -right-2.5 text-[#fff] text-[10px] flex justify-center items-center'>{cart.items.length}</span>
                                        :
                                        <></>
                                    }
                                </div>
                            </button>
                            </SheetTrigger>
                            <SheetContent className='bg-white h-screen flex flex-col '>
                                <SheetHeader>
                                <SheetTitle className='text-[#000]'>Shopping cart</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {
                                                cart.items.length == 0
                                                ?
                                                <div className='text-center'>
                                                <h3>La cart est vide</h3>
                                                </div>
                                                :
                                                cart.items.map((item) => (
                                                    <li className="flex py-6" key={item.id}>
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <Image onClick={() => handleClick(item)} src={item.images?.[0]?.url} quality={100} width={100} height={100} alt="" className="h-full w-full object-cover object-center" />
                                                        </div>
                                
                                                        <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#" onClick={() => handleClick(item)}>{item.name.length > 20 ? item.name.slice(0, 20 - 3) + '...' : item.name}</a>
                                                            </h3>
                                                            <p className="ml-4">{item.price}MAD</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500">{item.category.name}</p>
                                                        </div>
                                                        <div className="flex flex-1 items-center mt-3 justify-between text-sm">

                                                            <div className="inline-flex items-center px-2 font-semibold text-gray-500 border border-gray-300 rounded-md ">
                                                                <button onClick={() => decrementQuantity(item.id)} className="py-1 pr-2 border-r border-gray-300  dark:text-gray-400 hover:text-gray-700">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                                                        </path>
                                                                        </svg>
                                                                </button>
                                                                <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 dark:text-gray-400">{item.quantity}</span>
                                                                <button onClick={() => incrementQuantity(item.id)} className="py-1 pl-2 border-l border-gray-300  hover:text-gray-700 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                                        </path>
                                                                        </svg>
                                                                </button>
                                                            </div>

                                                            <div className="flex ml-auto">
                                                            <button onClick={() => onRemove(item)} type="button" className="font-medium text-black">
                                                                <Trash 
                                                                size={22}
                                                                color='#000'
                                                                />
                                                            </button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <SheetFooter className='mt-auto'>
                                <SheetClose asChild>
                                                                    
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>{totalPrice}MAD</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                    <div onClick={() => router.push('/checkout')} className="cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-[#000] px-6 py-3 text-base font-medium text-[#fff] shadow-sm">
                                        Checkout
                                    </div>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or <button onClick={() => router.push('/Boutique')} type="button" className="font-medium text-black"> Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                                    </p>
                                    </div>
                                </div>
                                </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                            </Sheet>
                            {
                            SelectOption == 'fr'
                            ?
                                <button onClick={() => {handleChangeLanguage("en"); setSelectOption("Eng")}} className='cursor-pointer'>
                                  <Image alt='' src={Eng} className='w-5 h-5' />
                                </button>
                            :
                            <button onClick={() => {handleChangeLanguage("fr"); setSelectOption("fr")}} className='cursor-pointer'>
                                  <Image alt='' src={fr} className='w-5 h-5' />
                            </button>
                        }
                        </div>
                        
                        <div className="lg:hidden flex item-center gap-4">
                            <button onClick={() => setIsOpen(!isOpen)} className="hamburger-lines lg:hidden  h-5 w-6 flex flex-col justify-between">
                                <span className="h-0.5 w-full rounded-lg bg-[#fff] line1"></span>
                                <span className="h-0.5 w-full rounded-lg bg-[#fff] line2"></span>
                                <span className="h-0.5 w-full rounded-lg bg-[#fff] line3"></span>
                            </button>  

                            <Sheet>
                            <SheetTrigger asChild>
                                <button className="">
                                <div className="rounded-full justify-center flex items-center relative">
                                <Bag2
                                    size="22"
                                    color="#FFF"
                                    />
                                    {
                                        cart.items.length > 0
                                        ?
                                        <span className='w-4 h-4 bg-[#d9534f] rounded-full absolute -top-2 -right-2.5 text-[#fff] text-[10px] flex justify-center items-center'>{cart.items.length}</span>
                                        :
                                        <></>
                                    }
                                </div>
                            </button>
                            </SheetTrigger>
                            <SheetContent className='bg-white h-screen flex flex-col '>
                                <SheetHeader>
                                <SheetTitle className='text-[#000]'>Shopping cart</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {
                                                cart.items.length == 0
                                                ?
                                                <div className='text-center'>
                                                <h3>La cart est vide</h3>
                                                </div>
                                                :
                                                cart.items.map((item) => (
                                                    <li className="flex py-6" key={item.id}>
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <Image onClick={() => handleClick(item)} src={item.images?.[0]?.url} quality={100} width={100} height={100} alt="" className="h-full w-full object-cover object-center" />
                                                        </div>
                                
                                                        <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#" onClick={() => handleClick(item)}>{item.name.length > 20 ? item.name.slice(0, 20 - 3) + '...' : item.name}</a>
                                                            </h3>
                                                            <p className="ml-4">{item.price}MAD</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500">{item.category.name}</p>
                                                        </div>
                                                        <div className="flex flex-1 items-center mt-3 justify-between text-sm">

                                                            <div className="inline-flex items-center px-2 font-semibold text-gray-500 border border-gray-300 rounded-md ">
                                                                <button onClick={() => decrementQuantity(item.id)} className="py-1 pr-2 border-r border-gray-300  dark:text-gray-400 hover:text-gray-700">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                                                        </path>
                                                                        </svg>
                                                                </button>
                                                                <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 dark:text-gray-400">{item.quantity}</span>
                                                                <button onClick={() => incrementQuantity(item.id)} className="py-1 pl-2 border-l border-gray-300  hover:text-gray-700 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                                        </path>
                                                                        </svg>
                                                                </button>
                                                            </div>

                                                            <div className="flex ml-auto">
                                                            <button onClick={() => onRemove(item)} type="button" className="font-medium text-black">
                                                                <Trash 
                                                                size={22}
                                                                color='#000'
                                                                />
                                                            </button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <SheetFooter className='mt-auto'>
                                <SheetClose asChild>
                                                                    
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>{totalPrice}MAD</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                    <div onClick={() => router.push('/checkout')} className="cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-[#000] px-6 py-3 text-base font-medium text-[#fff] shadow-sm">
                                        Checkout
                                    </div>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or <button onClick={() => router.push('/Boutique')} type="button" className="font-medium text-black"> Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                                    </p>
                                    </div>
                                </div>
                                </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                            </Sheet>
                        </div>
                    <AnimatePresence>
                    {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-[#000] text-[#fff] p-10"
                    >
                        <div className="flex h-full flex-col">
                        <div className="flex justify-between">
                            <p
                            className="cursor-pointer text-md text-[#fff]"
                            onClick={() => setIsOpen(false)}
                            >
                                <CloseCircle
                                size="28"
                                color="#fff"
                                />
                            </p>
                        </div>
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col h-full justify-center font-lora items-center gap-4 "
                        >
                    <NavigationMenu className='flex flex-col'>
                        <NavigationMenuList className='flex flex-col gap-4'>
                        <NavigationMenuItem>
                        <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <Link href='/' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff",  fontWeight: 600, fontSize: 25}}>
                                Acceuil
                                </NavigationMenuLink>
                            </Link>
                            </motion.div>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <NavigationMenuTrigger style={{backgroundColor: "transparent", color: "#fff",  fontWeight: 600, fontSize: 25}}>FUSIOCOAT®</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-[#000]'>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                                <ListItem className='text-[#000] hover:text-[#000]' href="/Automobile" title="Automobile">
                                </ListItem>
                                <ListItem className='text-[#000] hover:text-[#000]' href="/Aeronautique" title="Aéronautique">
                                </ListItem>
                                <ListItem className='text-[#000] hover:text-[#000]' href="/Marine" title="Marine">
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                            </motion.div>

                            </NavigationMenuItem>

                            <NavigationMenuItem>
                            <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <NavigationMenuTrigger style={{backgroundColor: "transparent", color: "#fff", fontWeight: 600, fontSize: 25}}>En savoir plus</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-[#000]'>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                    className='text-[#000] hover:text-[#000] cursor-pointer'
                                    key={component.title}
                                    title={component.title}
                                    >
                                        <Link href={component.href}/>
                                    </ListItem>
                                ))}
                                </ul>
                            </NavigationMenuContent>
                            </motion.div>

                            </NavigationMenuItem>

                            <NavigationMenuItem>
                            <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <Link href="/Boutique" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff",  fontWeight: 600, fontSize: 25}}>
                                Boutique
                                </NavigationMenuLink>
                            </Link>
                            </motion.div>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <Link href="/Partenaire" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff",  fontWeight: 600, fontSize: 25}}>
                                Devenir partenaire
                                </NavigationMenuLink>
                            </Link>
                            </motion.div>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                            <motion.div
                                variants={mobileLinkVars}
                                className="text-5xl uppercase text-black"
                            >
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{backgroundColor: "transparent", color: "#fff", fontWeight: 600, fontSize: 25}}>
                                Contact
                                </NavigationMenuLink>
                            </Link>
                            </motion.div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        </NavigationMenu>
                        
                        </motion.div>
                        </div>
                    </motion.div>
                    )}
      </AnimatePresence>
                        {/* <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"relative px-1 py-1 barIcon w-[30px] h-[30px] cursor-pointer lg:hidden ml-auto " + (ToogleMenuResponsive ? "active" : "")}>
                            <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                            <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                            <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
     </>
  )
}

const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
//   const MobileNavLink = (titleLink: any, hrefLink: any) => {
//     return (
//       <motion.div
//         variants={mobileLinkVars}
//         className="text-5xl uppercase text-black"
//       >
//         <Link href={hrefLink}>{titleLink}</Link>
//       </motion.div>
//     );
//   };