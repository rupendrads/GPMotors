import React from 'react'
import { Metadata } from "next";
import Hero from '../Hero'
import WhyUs from '../WhyUs'
import WhyTrustUs from '../WhyTrustUs'
import WhyUsBanner from '../whyUsBanner'
import BusinessProcess from '../Process'
import FAQ from '../FAQ'
import Data from "./content"
import BottomBanner from '../bottomBanner'

export const metadata: Metadata = {
  title: "Audi Car Repair & Service | GP Motors Teddington",
  description: "Professional Audi repair and maintenance services in Teddington. Qualified Audi specialists, quality parts, affordable prices. Expert Audi care.",
  keywords: "Audi repair Teddington, Audi service, Audi mechanic, Audi MOT, Audi maintenance, German car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Audi"),
};
const page = () => {
  return (
    <div>
    <Hero data={Data.Hero} />
    <WhyUs data={Data.WhyUs}/>
    <WhyTrustUs data={Data.WhyTrustUs}/>
    <WhyUsBanner data={Data.WhyUsBanner}/>
    <BusinessProcess/>
    <FAQ data={Data.FAQ}/>
    <BottomBanner data={Data.Banner}/>
    </div>
  )
}

export default page