import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useTranslation } from 'react-i18next'

export const FAQ = () => {
    const {t}  = useTranslation("global")
  return (

    <section className="bg-[#fff] relative overflow-hidden">
        <div className="container">
            <div className="text-center relative z-2 container">
                <p className="text__18 mb-2 text-[#000] uppercase">Faqs </p>
                <h2 className="font-bold  text-[#000] text__48 mb-8 uppercase">{t('Fusiocoat Simplifié')} : <span className='bg-Mgreen py-.5 px-3 rounded-full text-[#000]'>{t('Vos Questions')}</span> <br />{t('Nos Solutions')}</h2>
            </div>

            <div className="max-w-[940px] mx-auto">

                <Accordion type="single" collapsible className="w-full gap-3">
                    <AccordionItem value="item-1" className='text-[#000]'>
                        <AccordionTrigger className='hover:no-underline text-left text-[15px] uppercase'>{t('Combien de temps faut-il pour recouvrir une voiture avec un revêtement céramique ?')}</AccordionTrigger>
                        <AccordionContent className='font-light'>
                        {t("La durée exacte dépend de plusieurs facteurs, tels que la taille de la voiture, l’état de la surface, et la méthode d’application du revêtement. En général, cela peut une heure ou plus.")}                        
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='text-[#000]' value="item-2">
                        <AccordionTrigger className='hover:no-underline text-left text-[15px] uppercase'>{t('Combien de temps dois-je attendre avant d’appliquer un revêtement céramique sur une voiture ?')}</AccordionTrigger>
                        <AccordionContent>
                        {t("Avant d’appliquer un revêtement céramique, assurez-vous que la surface de la voiture est propre et décontaminée. En général, il est recommandé d’attendre au moins 24 heures après le lavage et la décontamination avant d’appliquer le revêtement.")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='text-[#000]' value="item-3">
                        <AccordionTrigger className='hover:no-underline text-left text-[15px] uppercase'>{t('Combien de temps dure le revêtement céramique ?')}</AccordionTrigger>
                        <AccordionContent>
                        {t("La durée de vie d’un revêtement céramique dépend de divers facteurs, notamment la qualité du produit, les conditions météorologiques, l’entretien régulier, et la façon dont la voiture est utilisée. En règle générale, les revêtements céramiques de haute qualité peuvent durer au moins plus que 2ans.")}                        
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='text-[#000]' value="item-4">
                        <AccordionTrigger className='hover:no-underline text-left text-[15px] uppercase'>{t('Le revêtement céramique est-il permanent ?')}</AccordionTrigger>
                        <AccordionContent>
                        {t("Bien que les revêtements céramiques soient durables, ils ne sont généralement pas permanents. Ils peuvent durer plusieurs années, mais l’exposition aux éléments, les lavages fréquents et d’autres facteurs environnementaux peuvent éventuellement réduire leur efficacité. Il est recommandé de réappliquer le revêtement après un certain temps pour maintenir une protection optimale.")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    </section>

  )
}
