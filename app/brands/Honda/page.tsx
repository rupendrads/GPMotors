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
  title: "Honda Car Repair & Service | GP Motors Teddington",
  description: "Expert Honda repair and servicing in Teddington. Honda specialists, Civic, Accord, CR-V experts. Reliable Japanese car maintenance.",
  keywords: "Honda repair Teddington, Honda service, Honda mechanic, Honda MOT, Civic service, Accord repair, Japanese car specialist, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brands/Honda"),
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