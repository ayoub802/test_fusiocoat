import React from 'react'
import { Button } from './Button'
import { useTranslation } from 'react-i18next';

export const Summury = () => {

    const [t, i18n] = useTranslation("global");

  return (
    <section className='bg-white'>
        <div class="container">
            <div class="text-center mb-14">
                <p class="mb-2 text__16">{t('OUR VALUES')}</p>
                <h2 class="font-bold text__48">{t('LA TECHNOLOGIE')} <br class="hidden sm:block" /> FUSIOCOAT®
                </h2>
            </div>
           <div class="gap-y-10 row">
                <div class="col-md-12">
                    <div class="text-center">
                            <h5 class="font-bold text__20 mb-2">{t('FUSIOCOAT® est le fruit de plus de 15 ans de recherches scientifiques dans la chimie des revêtements.')} </h5>
                            <p class="text__18 text-[#525252]">
                            {t('Les produits FUSIOCOAT® apportent une durabilité sans précédent vis-a-vis des effets climatiques et chimiques pour préserver les qualités esthétiques des surfaces, tout en étant non toxiques pour l’Homme et l’ environnement.')}
                            </p>
                            <div className='mt-4'>
                               <Button title={t("En savoir plus")}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
