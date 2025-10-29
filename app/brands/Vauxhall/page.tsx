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
  title: "Vauxhall Car Repair & Service | GP Motors Teddington",
  description: "Professional Vauxhall repair and maintenance in Teddington. Vauxhall specialists, Discovery, Range Rover, Evoque experts. 4x4 service specialists.",
  keywords: "Vauxhall repair Teddington, Vauxhall service, Vauxhall mechanic, Discovery service, 4x4 specialist, British car expert, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Vauxhall"),
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