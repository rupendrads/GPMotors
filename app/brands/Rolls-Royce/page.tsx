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
  title: "Rolls-Royce Car Repair & Service | GP Motors Teddington",
   description: "Expert Rolls-Royce repair and maintenance services in Teddington. Specialized Rolls-Royce mechanics, genuine parts, competitive pricing. Book your Rolls-Royce service today!",
  keywords: "Rolls-Royce repair Teddington, Rolls-Royce service, Rolls-Royce mechanic, Rolls-Royce MOT, Rolls-Royce maintenance, Luxury car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Rolls-Royce"),
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