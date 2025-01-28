import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
const SideBar = () => {
    const isMenuVisible = useSelector((store) => store.menu.isMenuVisible)

    // Here subscribing the store -> name-> slicestate.

    if (!isMenuVisible) return null;
    // here we did early return 
    return (
        <>
            <div className="px-6 py-2 shadow-xl ">
                <ul className="border-b-1 border-slate-300 py-2">

                    <Link to="/"> <li className="flex cursor-pointer hover:bg-slate-200 rounded-xl p-1">
                        <span className="px-2 "><IoHomeSharp /></span>Home</li></Link>
                    <li className="flex cursor-pointer  hover:bg-slate-200 rounded-xl p-1"><span className="px-2 "><SiYoutubeshorts /></span>Shorts</li>
                    <li className="flex cursor-pointer  hover:bg-slate-200 rounded-xl p-1"><span className="px-2 "><MdOutlineSubscriptions /></span>Subscriptions</li>

                </ul>

                <h1 className="font-bold">You</h1>
                <ul className="border-b-1 border-slate-300 py-2">

                    <li>History</li>
                    <li>Playlists</li>
                    <li>Your videos</li>
                    <li>Wath later</li>
                    <li>Like Vedios</li>

                </ul>
                <h1 className="font-bold">Explore</h1>
                <ul className="border-b-1 border-slate-300 py-2">

                    <li>Tranding</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sports</li>
                    <li>Course</li>
                    <li>Fashion & Beauty</li>
                    <li>Podcasts</li>

                </ul>
            </div>
        </>
    )
}

export default SideBar;