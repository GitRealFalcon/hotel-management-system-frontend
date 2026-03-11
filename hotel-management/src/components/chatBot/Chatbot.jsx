import { useState,useEffect,useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { HugeiconsIcon } from '@hugeicons/react'
import { BotIcon,Cancel01Icon } from '@hugeicons/core-free-icons'
import { useDispatch, useSelector } from 'react-redux'
import { chatBotApi, userInput } from '../../features/chatboot/chatSlice'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { setChatbot } from '../../features/theme/themeSlice'



const Chatbot = () => {
    const [input, setInput] = useState("")
    const { data, loading, error } = useSelector(state => state.chatbot)
    const {showChatbot} = useSelector(state => state.theme)
    const bottomRef = useRef(null)

    const dispatch = useDispatch()

  
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleclick = () => {
        dispatch(chatBotApi({ text: input }))
        dispatch(userInput({ text: input, customer: true }))
        setInput("")
    }

    
    const toggleChatboot = ()=>{
        dispatch(setChatbot())
    }

    useEffect(() => {
     bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [data])
    

    return (
        <div className='fixed bottom-3 right-4'>
            {showChatbot && <div className="w-[300px] h-[500px] flex flex-col border border-gray-400 bg-white rounded-2xl">

                <nav className="flex items-center shadow-lg gap-4 p-4">
                    <div className="p-2 bg-gray-100 rounded-full">
                        <HugeiconsIcon icon={BotIcon} color="#8867E8" width="30px" height="30px" />
                    </div>
                    <h1 className="font-semibold text-gray-600 text-lg">Falcon Assistant</h1>
                </nav>


                <main className="flex  flex-col flex-1 gap-4 overflow-x-hidden overflow-y-auto p-3">

                    {data && data.map((chat) => {
                        return (<>

                            {chat.text && <div className={` ${chat.customer ? "self-end rounded-bl-md bg-green-300 " : "rounded-br-md bg-blue-300"} p-2 font-sans text-sm font-semibold  max-w-[80%] rounded-t-md `}>
                                {chat.text}
                            </div>}
                            {chat.error && <div className={` rounded-br-md bg-red-300 p-2 font-sans text-sm font-semibold  max-w-[80%] rounded-t-md `}>
                                { ["invalid signature","unathorized request","jwt malformed"].includes(chat.errorText) ? "Login Account?" : chat.errorText}
                            </div>}
                           
                            {Array.isArray(chat) && (
                                <div className="flex flex-col gap-2 p-2 rounded-t-md rounded-br-md bg-blue-300  max-w-[80%] ">
                                    {chat.map((each) => (
                                        <div
                                            key={each._id}
                                            className=" border  border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm"
                                        >
                                            {each.image && (
                                                <div className="h-[110px] overflow-hidden">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={each.image[0].secure_url}
                                                        alt="room"
                                                    />
                                                </div>
                                            )}

                                            {each.payment && (
                                                <div className="font-semibold bg-blue-100 p-2 flex flex-col gap-1 items-center">
                                                    <div>BookingId</div>
                                                    <div
                                                        onClick={(e) =>
                                                            navigator.clipboard.writeText(e.target.innerText)
                                                        }
                                                        className="text-sm font-normal cursor-pointer"
                                                    >
                                                        {each._id}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-2 p-2 gap-1 text-xs">
                                                <div className="font-semibold bg-gray-100 rounded-md p-1 flex justify-between px-2">
                                                    RoomNo <span>{each.roomNo}</span>
                                                </div>

                                                {each.type && (
                                                    <div className="font-semibold bg-gray-100 rounded-md p-1 flex justify-between px-2">
                                                        Type <span>{each.type}</span>
                                                    </div>
                                                )}

                                                {each.capacity && (
                                                    <div className="font-semibold bg-gray-100 rounded-md p-1 flex justify-between px-2">
                                                        Guest <span>{each.capacity}</span>
                                                    </div>
                                                )}

                                                <div className="font-semibold bg-gray-100 rounded-md p-1 flex justify-between px-2">
                                                    Price <span>{each.payment ? each.perDayCharge : each.price}</span>
                                                </div>

                                                {each.totalAmount && (
                                                    <div className="font-semibold bg-gray-100 rounded-md p-1 flex flex-col items-center gap-1 px-2">
                                                        Amount <span>{each.totalAmount}</span>
                                                    </div>
                                                )}

                                                {each.payment && (
                                                    <div className="font-semibold bg-gray-100 rounded-md p-1 flex flex-col items-center gap-1 px-2">
                                                        Payment <span>{each.payment.isPayed ? "Payed" : "No"}</span>
                                                    </div>
                                                )}

                                               {each.checkIn && <div className="font-semibold bg-gray-100 rounded-md p-1 flex flex-col items-center gap-1 px-2">
                                                    ChIn <span>{dayjs(each.checkIn).format("DD-MMM")}</span>
                                                </div>}

                                                {each.checkOut &&<div className="font-semibold bg-gray-100 rounded-md p-1 flex flex-col items-center gap-1 px-2">
                                                    ChOut <span>{dayjs(each.checkOut).format("DD-MMM")}</span>
                                                </div>}
                                               
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}


                            {chat.confirmation && <div className={` w-[250px] bg-linear-to-bl from-blue-300 to-blue-100 rounded-t-md rounded-br-md p-2`}>
                                <div className='text-center text-green-800 font-bold'>
                                    {chat.confirmation}
                                </div>
                                <div>
                                    <div className='grid grid-cols-2 p-2 gap-1 '>
                                        <div className='font-semibold text-sm bg-gray-100 rounded-md p-1 flex justify-between px-2'>RoomNo: <span className='text-center'>{chat.confirmation === "cancelConfirmation" ? chat.booking.roomNo : chat.roomNo}</span></div>
                                        {chat.confirmation === "cancelConfirmation" && <div className='font-semibold text-sm bg-gray-100 rounded-md p-1 flex justify-between px-2'>Price: <span className='text-center'>{chat.booking.perDayCharge}</span></div>}
                                        <div className='font-semibold text-sm bg-gray-100 rounded-md p-1 flex justify-between px-2'>ChIn: <span className='text-center'>{chat.confirmation === "cancelConfirmation" ? dayjs(chat.booking.checkIn).format("DD-MMM") : dayjs(chat.checkIn).format("DD-MMM")}</span></div>
                                        <div className='font-semibold text-sm bg-gray-100 rounded-md p-1 flex justify-between px-2'>ChOut: <span className='text-center'>{chat.confirmation === "cancelConfirmation" ? dayjs(chat.booking.checkOut).format("DD-MMM") : dayjs(chat.checkOut).format("DD-MMM")}</span></div>
                                    </div>
                                </div>
                                <div className='p-2 flex justify-between'>
                                    <button className='p-1 w-[100px] rounded-lg text-white font-semibold bg-green-500'>{chat.confirmation === "cancelConfirmation" ? "Cancel" : "Book"}</button>
                                    <button className='p-1 w-[100px] rounded-lg text-white font-semibold bg-red-500'>No</button>
                                </div>
                            </div>}
                        </>)
                    })}

                    <div ref={bottomRef}></div>
                </main>


                <footer className="p-1 flex border-t border-gray-300 items-center gap-2">
                    <input
                        onChange={handleChange}
                        value={input}
                        type="text"
                        placeholder="Ask something..."
                        className="flex-1 px-3 py-2 font-semibold text-gray-500 outline-none"
                    />

                    <button onClick={handleclick} className="p-2 cursor-pointer">
                        <img src="/send.svg" alt="send" className="w-5 h-5" />
                    </button>
                </footer>

            </div> }
            <div onClick={toggleChatboot} className='cursor-pointer w-fit mt-1' >
                {showChatbot && <div className=" bg-gray-100 border-4 border-[#8867E8] rounded-full">
                        <HugeiconsIcon icon={Cancel01Icon} color="#8867E8" width="40px" height="40px" />
                    </div>
                }
               {!showChatbot &&  <div className="p-2 bg-gray-100 rounded-full">
                        <HugeiconsIcon icon={BotIcon} color="#8867E8" width="50px" height="50px" />
                    </div>}
            </div>
        </div>
    )
}

export default Chatbot
