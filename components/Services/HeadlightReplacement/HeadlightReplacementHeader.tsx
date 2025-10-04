import ServiceHeader from "@/components/Services/ServiceHeader";
import HeadlightReplacementHeaderImage from "@/images/headlight-replacement-header.png";

const title = "Drive Safe with GP Motors’ Headlight Bulb Replacement";
const desc =
  "Dim, flickering, or blown headlights? Safe driving depends on clear visibility. At GP Motors in West London, we provide quick, professional headlight bulb replacements to keep you safe day and night.";

const HeadlightReplacementHeader = () => {
  return (
    <ServiceHeader
      imageData={HeadlightReplacementHeaderImage}
      altText="Headlight Replacement"
      title={title}
      desc={desc}
    />
  );
};

export default HeadlightReplacementHeader;
