const VedioCard = ({ content }) => {
    const { channelTitle, thumbnails, title, } = content.snippet
    return (
        <>
            <div className=" px-1 py-1  rounded-xl">
                <img src={thumbnails.high.url} alt="thumbnail"
                    className="rounded-2xl"
                />
                <div className="px-2 py-2">
                    <h1 className="font-bold font-sans">{title}</h1>
                    <h2>{channelTitle}</h2>
                    <p>{content.statistics.viewCount} views</p>
                </div>
            </div>

        </>
    )
}
export default VedioCard