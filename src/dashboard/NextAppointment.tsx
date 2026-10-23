import MainBlock from "../components/MainBlock";
import profilePic from "@/images/profilepic.png";

const NextAppointMent = () => {
    return <MainBlock title="Next appointment" bgColor={{background: "black"}}>
        <div className="flex flex-row items-center gap-(--gap-main)">
            <img className="rounded-full w-[47px] h-[47px]" src={profilePic} alt="patient_profile" />
            <h1 className="text-lime-accent text-[36px] font-bold">Gaby Johnson</h1>
        </div>
        <div className="flex flex-row justify-between">
            <p>Tuesday 12</p>
            <p className="font-bold">On-site</p>
        </div>
        <p className="font-bold">14:35</p>
        <div className="flex flex-row justify-end gap-[8px] text-green-700 relative z-1">
            <a className="p-[10px] font-bold" href="">Call phone</a>
            <a className="p-[10px] font-bold" href="">Send e-mail</a>
        </div> 
    </MainBlock>
}

export default NextAppointMent;