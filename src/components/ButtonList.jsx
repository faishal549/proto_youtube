const ButtonList = ({ info }) => {

    return (
        <>
            <div className="p-2 ">
                <button className="px-4 py-1 bg-stone-300 rounded-lg cursor-pointer hover:font-bold">{info}</button>
            </div>
        </>
    )
}

export default ButtonList;