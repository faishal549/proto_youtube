import ButtonList from "./ButtonList";
import VideoCantainer from "./VedioContainer"

const HeroSection = () => {
    return (
        <>
            <div>
                <div className="flex">
                    <ButtonList info="All" />
                    <ButtonList info="Movie" />
                    <ButtonList info="Sports" />
                    <ButtonList info="Software Engineering" />
                    <ButtonList info="Computer Programming" />
                    <ButtonList info="Movie musicals" />
                    <ButtonList info="History" />
                    <ButtonList info="Recently Uploaded" />
                </div>
                <VideoCantainer />

            </div>
        </>
    )
}

export default HeroSection;