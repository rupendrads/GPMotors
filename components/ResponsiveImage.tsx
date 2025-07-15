import { useState, useEffect, ReactElement } from "react";

type Props = {
  desktopImage: ReactElement<HTMLImageElement>;
  tabletImage: ReactElement<HTMLImageElement>;
  mobileImage: ReactElement<HTMLImageElement>;
};

function ResponsiveImage({ desktopImage, tabletImage, mobileImage }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? mobileImage : isTablet ? tabletImage : desktopImage}</>;
}
export default ResponsiveImage;
