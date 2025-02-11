import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/menuSlice";
import { useState, useEffect } from "react";
import { addToCache } from "../Utils/cachedSlice";



const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchData, setSearchData] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const cachedSuggestion = useSelector((store) => store.cached)
    const dispatch = useDispatch()


    const handleHamburger = () => {
        dispatch(toggleMenu())
    }

    // debouncing the search suggestions
    useEffect(() => {
        const timer = setTimeout(() => {
            if (cachedSuggestion[searchQuery]) {
                cachedSuggestion[searchQuery]
            } else {
                getSearchQuery()
            }
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchQuery = async () => {
        try {
            console.log("API-Call", searchQuery)
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
            const data = await response.json()
            // console.log(data?.products)
            setSearchData(data?.products)
            dispatch(addToCache({
                [searchQuery]: data?.products
            }))



        } catch (error) {
            console.log(error)
        }

    }




    return (
        <>

            <div className="grid grid-flow-col p-2 shadow-lg py-4 h-12">
                <div className="flex  col-span-1">

                    <span className=" cursor-pointer py-1 px-1 hover:bg-gray-300 rounded-full ml-2" onClick={handleHamburger}><RxHamburgerMenu /></span>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                        alt="YoutubeLogo"
                        className="h-6 ml-2"
                    />
                </div>
                <div className="col-span-10  ">
                    <input type="text"
                        placeholder="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}

                        className="w-72  px-4 rounded-l-full border border-stone-400 outline-0 relative bottom-0.5"
                    />
                    <button className="border border-stone-400 px-4 rounded-r-full cursor-pointer bg-stone-200 hover:bg-stone-400 p-1 ">
                        <HiOutlineMagnifyingGlass /></button>
                    <br />
                    <div className="fixed bg-white w-[18rem] rounded-xl max-h-[25rem] overflow-y-scroll">

                        <ul>
                            {
                                showSuggestion && searchData.map((user) => {
                                    return <li className="py-2 px-3 hover:bg-stone-300" key={user?.id}>{user?.title}</li>
                                })
                            }


                        </ul>
                    </div>
                </div>


                <div className="col-span-1">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
                        alt="userIcon"
                        className="h-6"
                    />


                </div>
            </div>
        </>
    )
}

export default Head;