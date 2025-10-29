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
  title: "Aston Martin Car Repair & Service | GP Motors Teddington",
  description: "Professional Aston Martin repair and maintenance in Teddington. Aston Martin specialists, Discovery, Range Rover, Evoque experts. 4x4 service specialists.",
  keywords: "Aston Martin repair Teddington, Aston Martin service, Aston Martin mechanic, Discovery service, 4x4 specialist, British car expert, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Aston-Martin"),
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