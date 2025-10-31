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
  title: "Fiat Car Repair & Service | GP Motors Teddington",
   description: "Expert Fiat repair and maintenance services in Teddington. Specialized Fiat mechanics, genuine parts, competitive pricing. Book your Fiat service today!",
  keywords: "Fiat repair Teddington, Fiat service, Fiat mechanic, Fiat MOT, Fiat maintenance, Luxury car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Fiat"),
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