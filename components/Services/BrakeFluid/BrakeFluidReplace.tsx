"use client";

import BrakeFluidReplaceImage from "@/images/brake-fluid-replacement.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Maintains proper brake system pressure",
  "Ensures effective braking performance",
  "Prevents difficult or unsafe stopping",
  "Avoids moisture and dirt contamination",
  "Improves brake fluid consistency and safety",
  "Essential for routine car maintenance",
  "Keeps braking system performing efficiently",
  "Reduces dirt and debris buildup",
];

const titleDescriptions = [
  {
    title: "Why Do I Need Brake Fluid Replacement?",
    desc: `Brake fluid is essential for the proper functioning of your car’s braking system. It helps maintain pressure when you apply the brakes, ensuring effective stopping power. If the fluid level is too low, braking can become difficult and unsafe, particularly during sudden stops.`,
  },
  {
    title: "How Does GP Motors Provide Brake Oil Change Services?",
    desc: `Brake fluid replacement isn’t a DIY job. At GP Motors, our skilled technicians use advanced tools and techniques to perform safe and efficient brake fluid changes. Here’s how we do it:
`,
  },
];

function BrakeFluidReplace() {
  return (
    <Repair
      imageData={BrakeFluidReplaceImage}
      altText="brake fluid replace"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default BrakeFluidReplace;
