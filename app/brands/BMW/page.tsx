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
  title: "BMW Car Repair & Service | GP Motors Teddington",
  description: "Expert BMW repair and maintenance services in Teddington. Specialized BMW mechanics, genuine parts, competitive pricing. Book your BMW service today!",
  keywords: "BMW repair Teddington, BMW service, BMW mechanic, BMW MOT, BMW maintenance, German car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/BMW"),
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