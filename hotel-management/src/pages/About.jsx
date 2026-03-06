import Container from "../components/Container/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="min-h-screen"
      
    >
    
      <div className="w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/premium_photo.jpg"
          alt="swimming pool"
        />
      </div>

      <Container>
        <div className="custom-container mx-auto mb-10 -mt-12 md:-mt-20 px-4 relative">
          <div className="card-glass p-6 md:p-8 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl">

         
            <h1 className="text-[28px] font-bold text-[#183357]" >
              About Falcon Hotel
            </h1>

        
            <p
              className="mt-3 text-[15px] leading-relaxed max-w-3xl dark:text-[var(--text-primary)] text-[#1A202C]"
             
            >
              Welcome to <strong>Falcon Hotel</strong> — a modern sanctuary where elegance meets comfort.
              Located at the heart of the city, Falcon Hotel blends refined design with warm,
              personalized hospitality to create a memorable experience for every traveler.
            </p>

           
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

           
              <div className="flex gap-4">
                <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }}></div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">Rooms & Suites</h3>
                  <p className="text-sm mt-1 dark:text-[var(--text-secondry)] text-gray-500">
                    Spacious and elegantly designed rooms featuring premium bedding and modern amenities.
                  </p>
                </div>
              </div>

             
              <div className="flex gap-4">
                <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }}></div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">Dining</h3>
                  <p className="text-sm mt-1 dark:text-[var(--text-secondry)] text-gray-500">
                    Enjoy handcrafted dishes inspired by global flavors and local traditions.
                  </p>
                </div>
              </div>

              
              <div className="flex gap-4">
                <div className="w-3 h-12 rounded" style={{ backgroundColor: "var(--bg-third)" }}></div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">Events & Meetings</h3>
                  <p className="text-sm mt-1 dark:text-[var(--text-secondry)] text-gray-500">
                    Perfect spaces for weddings, business events, and private gatherings.
                  </p>
                </div>
              </div>

            </div>

          
            <div className="mt-6">
              <h4 className="text-[16px] font-semibold dark:text-[var(--text-primary)] text-[#1A202C]">Our Promise</h4>
              <p className="text-sm mt-1 dark:text-[var(--text-secondry)] text-gray-500">
                At Falcon Hotel, we are dedicated to delivering unmatched comfort, exceptional service,
                and a memorable experience for every guest.
              </p>
            </div>

           
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link
                to="/rooms"
                className="px-4 py-2 rounded-md font-semibold border dark:text-[var(--text-primary)] text-[#1A202C]"
                
              >
                Book a Room
              </Link>

              <Link
                to="/contact"
               className="px-4 py-2 rounded-md font-semibold border dark:text-[var(--text-primary)] text-[#1A202C]"
               
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

