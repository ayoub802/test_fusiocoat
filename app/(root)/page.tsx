import { Hero } from './Hero';
import Favicon from "../favicon.ico" 

export const metadata = {
    title: 'Fusiocoat – Permanent Protective Coatings',
    description: 'fusiocoat E-Commerce Dashboard',
    icons:[
        {
            rel: 'icon',
            type: 'image/ico',
            sizes: '32x32',
            url: Favicon,
          },
    ]
  }


export default async function SetupPage () {

    
  return (
    <>
     <Hero />
    </>

  );
};

