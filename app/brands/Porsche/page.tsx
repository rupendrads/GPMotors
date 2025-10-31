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
  title: "Porsche Car Repair & Service | GP Motors Teddington",
   description: "Expert Porsche repair and maintenance services in Teddington. Specialized Porsche mechanics, genuine parts, competitive pricing. Book your Porsche service today!",
  keywords: "Porsche repair Teddington, Porsche service, Porsche mechanic, Porsche MOT, Porsche maintenance, Luxury car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Porsche"),
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