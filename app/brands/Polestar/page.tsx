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
  title: "Polestar Car Repair & Service | GP Motors Teddington",
  description: "Expert Polestar repair and maintenance services in Teddington. Specialized Polestar mechanics, genuine parts, competitive pricing. Book your Polestar service today!",
  keywords: "Polestar repair Teddington, Polestar service, Polestar mechanic, Polestar MOT, Polestar maintenance, Electric car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Polestar"),
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