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
  title: "Volvo Car Repair & Service | GP Motors Teddington",
  description: "Expert Volvo repair and servicing in Teddington. Volvo specialists, XC90, XC60, V60 experts. Swedish safety and reliability maintenance.",
  keywords: "Volvo repair Teddington, Volvo service, Volvo mechanic, Volvo MOT, XC90 service, Swedish car specialist, safety systems, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Volvo"),
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