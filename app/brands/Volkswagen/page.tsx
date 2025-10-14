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
  title: "Volkswagen Car Repair & Service | GP Motors Teddington",
  description: "Professional Volkswagen repair and maintenance in Teddington. VW specialists, diagnostic equipment, quality service. Golf, Polo, Passat experts.",
  keywords: "Volkswagen repair Teddington, VW service, Volkswagen mechanic, VW MOT, German car specialist, Golf service, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Volkswagen"),
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