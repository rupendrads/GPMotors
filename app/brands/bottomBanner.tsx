import Image from 'next/image';

const BottomBanner = ({data}) => {
  return (
    <div className=" md:px-8 lg:px-12 xl:px-40 py-4 md:py-6">
      <div className="relative w-full h-[950px] md:h-[500px] overflow-hidden md:rounded-2xl shadow-lg">
        
        {/* Desktop image - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 rounded-xl md:rounded-xl overflow-hidden">
          <Image
            src={data.image} 
            alt="Mercedes banner desktop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile image - hidden on desktop */}
        <div className="block md:hidden absolute inset-0 rounded-xl overflow-hidden">
          <Image
            src={data.mobileImage}
            alt="Mercedes banner mobile"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center md:justify-end justify-center rounded-xl md:rounded-2xl">
          
          {/* Desktop text positioning - right side */}
          <div className="hidden md:block w-1/2 text-white text-left md:pl-10 lg:pl-30">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Ready To <br />
               Schedule
              An <br /> Appointment?
            </h1>
            <p className="text-gray-200 text-base font-thin lg:text-xl mb-6 max-w-md">
              Contact Us Today To Book Your Next Service.
            </p>
          </div>

          {/* Mobile text positioning - bottom center */}
          <div className="block md:hidden absolute bottom-20 left-0 right-0 text-white  p-6 rounded-b-xl">
            <h1 className="text-5xl font-bold mb-3 leading-tight">
              Ready To<br />
               Schedule An <br />
                Appointment?
            </h1>
            <p className="text-gray-200 font-thin text-lg mb-4">
              Contact Us Today To Book Your Next Service.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
