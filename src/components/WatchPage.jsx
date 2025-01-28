import { useDispatch, useSelector } from "react-redux"
import { defaultMenu } from "../Utils/menuSlice"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import LiveChat from "./LiveChat"
import InputBox from "./InputBox"

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    const params = searchParams.get("v")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(defaultMenu())
    }, [])


    return (
        <>
            <div className="container mx-auto py-4 grid grid-flow-col">

                <div className="col-span-4">
                    <iframe width="850"
                        height="450"
                        src={`https://www.youtube.com/embed/${params}`}
                        title="5 Mistakes Beginner Web Developers Make (Avoid These)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                    </iframe>
                </div>
                <div className="col-span-7 inset-shadow-2xs w-[25rem] h-[35rem] overflow-y-scroll flex flex-col-reverse">

                    <h1 className="text-center my-2 px-4 py-2 text-white bg-green-400 rounded-lg shadow-lg font-bold  ">Live Chat</h1>
                    <InputBox />

                    <LiveChat />
                </div>

            </div>
        </>
    )
}

export default WatchPage