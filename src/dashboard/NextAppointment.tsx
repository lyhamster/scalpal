import MainBlock from "../components/MainBlock";
import profilePic from "@/images/profilepic.png";

const NextAppointMent = () => {
    return <MainBlock title="Next appointment" bgColor={{background: "black"}}>
        <div className="flex flex-row items-center 2xl:gap-3 gap-1">
            <img className="rounded-full w-[47px] h-[47px] xl:w-[25px] xl:h-[25px]" src={profilePic} alt="patient_profile" />
            <h1 className="text-lime-accent 2xl:text-4xl text-xl font-bold">Gaby Johnson</h1>
        </div>
        <div className="flex flex-row justify-between xl:text-xs">
            <p>Tuesday 12</p>
            <p className="font-bold">On-site</p>
        </div>
        <p className="font-bold xl:text-xs">14:35</p>
        <div className="flex flex-row justify-end gap-[4px] text-green-700 relative z-1 xl:text-xs">
            <a className="p-[10px] font-bold" href="">Call phone</a>
            <a className="p-[10px] font-bold" href="">Send e-mail</a>
        </div> 
    </MainBlock>
}

export default NextAppointMent;