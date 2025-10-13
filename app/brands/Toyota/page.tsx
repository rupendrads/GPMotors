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
  title: "Toyota Car Repair & Service | GP Motors Teddington",
  description: "Expert Toyota repair and servicing in Teddington. Certified Toyota mechanics, genuine parts, reliable service. Hybrid specialist available.",
  keywords: "Toyota repair Teddington, Toyota service, Toyota mechanic, Toyota MOT, Toyota hybrid service, Japanese car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Toyota"),
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