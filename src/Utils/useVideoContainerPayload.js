import { useEffect, useState } from "react"
import { YT_VEDIO_API } from "./constents"

const useVideoContainerPayload = () => {
    const [payload, setPayload] = useState([])
    const [filterSearch, setFilterSearch] = useState([])

    const getVedioPayload = async () => {
        const response = await fetch(YT_VEDIO_API)
        const data = await response.json()
        //console.log(data)
        setPayload(data.items)
        setFilterSearch(data.items)
    }
    useEffect(() => {
        getVedioPayload()
    }, [])
    return { payload, setPayload, filterSearch, setFilterSearch }

}

export default useVideoContainerPayload;