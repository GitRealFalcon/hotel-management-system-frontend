import React, { useState, useEffect, useRef } from "react";
import Container from "../components/Container/Container";
import BasicDateCalendar from "../components/Calendar/Calendar";
import dayjs from "dayjs";
import Logo from "../components/Logo";
import MainHeadingbar from "../components/homeComponents/MainHeadingbar";
import ImageCollage from "../components/homeComponents/ImageCollage";
import RoomSection from "../components/homeComponents/RoomSection";
import Map from "../components/homeComponents/map";

const Home = () => {
  const [CheckInDate, setCheckInDate] = useState(dayjs().format("ddd, MMM DD"));
  const [CheckOutDate, setCheckOutDate] = useState(
    dayjs().add(1, "day").format("ddd, MMM DD")
  );
  const [calShow, setCalShow] = useState(false);
  const [addRoomShow, setAddroomShow] = useState(false);
  const [activeField, setActiveField] = useState(null); // "checkin" or "checkout"
  const [bookingRoom, setBookingRoom] = useState(1)
  const [guest, setGuest] = useState(1)

  const calendarRef = useRef(null);
  const addRoomRef = useRef(null);
  const roomSectionRef = useRef(null)

 
  // handle date selection from calendar
  const handleDateSelect = (date) => {
    const formatted = date.format("ddd, MMM DD");

    if (activeField === "checkin") {
      setCheckInDate(formatted);
    } else if (activeField === "checkout") {
      setCheckOutDate(formatted);
    }
    setCalShow(false); // close calendar after picking
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setCalShow(false);
      }
      if (
        addRoomRef.current &&
        !addRoomRef.current.contains(event.target)
      ) {
        setAddroomShow(false);
      }
    }

    if (calShow || addRoomShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup on unmount or hide
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calShow, addRoomShow]);

  return (
    <div className="relative w-full min-h-screen">
      <div className="overflow-x-hidden">
        <div className='rounded-b-[100%] z-2 flex flex-col justify-center items-center ml-[-50%] w-[200%] h-[500px] bg-cover bg-center bg-[url("/4k-hotel.jpg")] invert-5'>
          {/* Booking tab full */}
          <div className="lg:hidden w-1/3 h-45 bg-gradient-to-br justify-between items-center rounded-2xl shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 from-gray-400 p-1">

            <div className="w-full h-1/2 flex justify-between items-center">

              <div
                onClick={() => {
                  setCalShow(!calShow);
                  setActiveField("checkin");
                }}
                className="pl-6 w-[48%] p-2 cursor-pointer rounded-2xl hover:bg-black/10"
              >

                <div className="text-gray-200">Check In</div>
                <div className="font-sens-serif font-semibold">
                  {CheckInDate}
                </div>
              </div>
              <div className="border-x h-1/2 border-gray-400 "></div>
              <div
                onClick={() => {
                  setActiveField("checkout");
                  setCalShow(!calShow)
                }}
                className="pl-6 p-2 w-[48%] cursor-pointer rounded-2xl hover:bg-black/10"
              >

                <div className="text-gray-200">Check Out</div>
                <div className="font-sens-serif font-semibold">
                  {CheckOutDate}
                </div>
              </div>
            </div>
            <div className="border-y mx-auto w-11/12 border-gray-400"></div>
            <div className="w-full h-1/2 flex justify-between items-center">

              <div onClick={() => setAddroomShow(!addRoomShow)} className="pl-6 p-2 w-[48%] cursor-pointer rounded-2xl hover:bg-black/10">

                <div className="text-gray-200">Rooms & guests</div>
                <div className="font-sens-serif font-semibold">
                 {`${guest} guest, ${bookingRoom} room`}
                </div>
              </div>
              <div className="border-x h-1/2 border-gray-400"></div>
              <div className="pl-6 p-2 w-[48%] cursor-pointer rounded-2xl hover:bg-black/10">

                <div className="text-gray-200">Rate</div>
                <div className="font-sens-serif font-semibold">
                  Best Available
                </div>
              </div>
            </div>
          </div>
          {/* Booking Tab MD */}
          <div className="hidden w-1/3 h-20 lg:flex bg-gradient-to-br justify-between items-center rounded-2xl shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 from-gray-400 p-1 px-3">

            <div
              onClick={() => {
                setCalShow(!calShow);
                setActiveField("checkin");
              }}

              className="pl-3 w-1/5 p-2 cursor-pointer rounded-2xl hover:bg-black/10"
            >

              <div className="text-gray-300">Check In</div>
              <div className="font-sens-serif font-semibold">{CheckInDate}</div>
            </div>
            <div className="border-x h-1/2 border-gray-400"></div>
            <div
              onClick={() => {
                setActiveField("checkout");
                setCalShow(!calShow)
              }}
              className="pl-3 p-2 w-1/5 cursor-pointer rounded-2xl hover:bg-black/10"
            >

              <div className="text-gray-300">Check Out</div>
              <div className="font-sens-serif font-semibold">
                {CheckOutDate}
              </div>
            </div>
            <div className="border-x h-1/2 border-gray-400"></div>

            <div onClick={() => setAddroomShow(!addRoomShow)} className=" p-2 w-1/5 cursor-pointer rounded-2xl hover:bg-black/10">

              <div className="text-gray-300">Rooms & guests</div>
              <div className="font-sens-serif font-semibold">
                 {`${guest} guest, ${bookingRoom} room`}
              </div>
            </div>
            <div className="border-x h-1/2 border-gray-400"></div>
            <div className="px-3 p-2 w-1/5 cursor-pointer rounded-2xl hover:bg-black/10">

              <div className="text-gray-300">Rate</div>
              <div className="font-sens-serif font-semibold">
                Best Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Popup */}
      <div
        ref={calendarRef}
        className={`
           fixed left-1/4 top-72 rounded-2xl shadow-xl 
             backdrop-filter backdrop-blur-sm bg-gradient-to-br translate-y-2 from-gray-400/30 to-gray-900/10
              transition-all duration-300 ease-in-out transform
                ${calShow
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible pointer-events-none"
          } `}
      >
        <BasicDateCalendar
          onDateSelect={handleDateSelect}
          minDate={
            activeField === "checkout"
              ? dayjs(CheckInDate, "ddd, MMM DD")
              : dayjs()
          }
        />
      </div>
      <div ref={addRoomRef} className={`fixed left-1/2 top-72  backdrop-filter backdrop-blur-sm bg-gradient-to-br translate-y-2 from-gray-400/30 to-gray-900/10
              transition-all duration-300 ease-in-out transform w-1/3 h-40 flex flex-col justify-around items-center rounded-lg  ${addRoomShow
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible pointer-events-none"
        }`}>
        <div className="w-full h-1/3 flex items-center  justify-around">
          <div className="font-semibold text-center w-[30%] ">Room</div>
          <div className="h-[90%] border-x border-gray-400"></div>
          <div className="flex justify-around w-[50%] items-center ">
            <div onClick={() => setBookingRoom(bookingRoom > 1 ? bookingRoom - 1 : 1)} className="w-10 h-10 cursor-pointer  hover:bg-gray-600 bg-gray-700 text-white flex justify-center pb-2 items-center text-4xl rounded-full"><p>-</p></div>
            <div className="font-semibold">{bookingRoom}</div>
            <div onClick={() => setBookingRoom(bookingRoom + 1)} className="w-10 h-10 cursor-pointer  hover:bg-gray-600 bg-gray-700 text-white flex justify-center pb-2 items-center text-3xl rounded-full"><p>+</p></div>
          </div>
        </div>

        <div className="w-11/12 border-y border-gray-400"></div>
        <div className="w-full h-1/3 flex items-center  justify-around">
          <div className="font-semibold text-center w-[30%]">Guest</div>
          <div className="h-[90%] border-x border-gray-400"></div>
          <div className="flex w-[50%] justify-around items-center ">
            <div onClick={() => setGuest(guest > 1 ? guest - 1 : 1)} className="cursor-pointer  hover:bg-gray-600 w-10 h-10 bg-gray-700 text-white flex justify-center pb-2 items-center text-4xl rounded-full"><p>-</p></div>
            <div className="font-semibold">{guest}</div>
            <div onClick={() => setGuest(guest + 1)} className="w-10 cursor-pointer  hover:bg-gray-600 h-10 bg-gray-700 text-white flex justify-center pb-2 items-center text-3xl rounded-full"><p>+</p></div>
          </div>
        </div>
      </div>
      <Container>
        <MainHeadingbar scrollRef={roomSectionRef} />
        <ImageCollage />
        <RoomSection ref={roomSectionRef} />
        <Map/>
      </Container>
    </div>
  );
};

export default Home;
