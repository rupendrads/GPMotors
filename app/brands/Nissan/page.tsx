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
  title: "Nissan Car Repair & Service | GP Motors Teddington",
  description: "Expert Nissan repair and maintenance services in Teddington. Specialized Nissan mechanics, genuine parts, competitive pricing. Book your Nissan service today!",
  keywords: "Nissan repair Teddington, Nissan service, Nissan mechanic, Nissan MOT, Nissan maintenance, Japanese car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Nissan"),
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