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
  title: "Ford Car Repair & Service | GP Motors Teddington",
  description: "Professional Ford repair and maintenance in Teddington. Ford specialists, Fiesta, Focus, Mondeo experts. Quality service at competitive prices.",
  keywords: "Ford repair Teddington, Ford service, Ford mechanic, Ford MOT, Fiesta service, Focus repair, Mondeo maintenance, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Ford"),
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