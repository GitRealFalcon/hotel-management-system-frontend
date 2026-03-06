import Container from "../components/Container/Container";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="min-h-screen"
      
    >
     
      <div className="w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/premium_photo.jpg"
          alt="Falcon Hotel services hero"
        />
      </div>

      <Container>
        <div className="custom-container mx-auto mb-10 -mt-12 md:-mt-20 px-4">
          <div className="card-glass p-6 md:p-8 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl">

           
            <h1 className="text-[28px] font-bold text-[#183357]">
              Our Services
            </h1>

            <p
              className="mt-3 text-[15px] leading-relaxed max-w-3xl dark:text-[var(--text-primary)] text-[#1A202C]"
             
            >
              At <strong>Falcon Hotel</strong>, we offer a wide range of services designed to make your stay
              comfortable, convenient, and memorable. From wellness amenities to tailored corporate support,
              our team is ready to assist.
            </p>

           
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

             
              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300" >
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]" >
                    Spa & Wellness
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500" >
                  Rejuvenate with signature treatments, a sauna, and a fully equipped fitness center.
                </p>
              </article>

              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300">
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">
                    Rooftop Pool & Lounge
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500">
                  Swim, relax, and enjoy panoramic views from our poolside lounge — open daily.
                </p>
              </article>

              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300">
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">
                    In-Room Dining
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500">
                  24/7 in-room dining with an elevated menu curated by our executive chef.
                </p>
              </article>

              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300">
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">
                    Concierge & Guest Services
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500">
                  Personalized local recommendations, transport arrangements, and 24-hour concierge assistance.
                </p>
              </article>

              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300">
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">
                    Meeting & Event Support
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500">
                  Flexible meeting rooms, AV equipment, and full planning support for corporate events.
                </p>
              </article>

              <article className="p-5 rounded-lg border dark:border-[rgba(255,255,255,0.03)] border-gray-300">
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }} />
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">
                    Laundry & Valet
                  </h3>
                </div>
                <p className="text-sm dark:text-[var(--text-secondry)] text-gray-500">
                  Fast, professional laundry, dry-cleaning, and valet parking services for convenience.
                </p>
              </article>

            </div>

           
            <div className="mt-8 flex flex-wrap gap-3 ">
              <Link
                to="/rooms"
                className="px-4 py-2 rounded-md font-semibold border dark:text-[var(--text-primary)] text-[#1A202C]"
                
              >
                Book a Service
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 rounded-md font-semibold border dark:text-[var(--text-primary)] text-[#1A202C]"
               
              >
                Contact Concierge
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
