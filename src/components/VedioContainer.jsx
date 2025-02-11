import VedioCard from "./VedioCard";
import { Link } from "react-router-dom"
import useVideoContainerPayload from "../Utils/useVideoContainerPayload";


const VideoCantainer = () => {

    const { payload } = useVideoContainerPayload()



    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {

                    payload.map((content) => <Link key={content.id} to={`/watch?v=${content.id}`}><VedioCard content={content} /></Link>)

                }

            </div>

        </>
    )
}

export default VideoCantainer;