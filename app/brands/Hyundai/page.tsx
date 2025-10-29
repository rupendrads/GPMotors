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
  title: "Hyundai Car Repair & Service | GP Motors Teddington",
  description: "Professional Hyundai repair and maintenance in Teddington. Hyundai specialists, Discovery, Range Rover, Evoque experts. 4x4 service specialists.",
  keywords: "Hyundai repair Teddington, Hyundai service, Hyundai mechanic, Discovery service, 4x4 specialist, British car expert, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Hyundai"),
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