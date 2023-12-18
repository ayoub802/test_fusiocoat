"use client"

import { Inter } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'
import Head from 'next/head'
import SessionProvider from './SessionProvider'
import { Button } from '@/components/ui/button'
import { PreviewModalProvider } from '@/providers/preview-modal-provider'
import { ClerkProvider } from '@clerk/nextjs'
import i18next from 'i18next'
import global_en from "./translation/en/globale.json"
import global_fr from "./translation/fr/globale.json"
import { I18nextProvider } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'fr',
  resources:{
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }

})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  
  return (
    <I18nextProvider i18n={i18next}>
      <ClerkProvider>
        <html lang="en">
            <body className={inter.className}>
                  <ThemeProvider 
                    attribute="class" 
                    defaultTheme="system" 
                    enableSystem
                  >
                    <ToastProvider />
                    <ModalProvider />
                    <PreviewModalProvider />
                    {children}
                  </ThemeProvider>
            </body>
          </html>
      </ClerkProvider>
    </I18nextProvider>
  )
}
