import type { UserData } from "@/types/user";
import MainBlock from "../components/MainBlock";

type Prop = {
    user?: UserData,
}
const PatientAppointment = ({ user }: Prop) => {
    return <div className="flex flex-col gap-[8px] gap-[16px] text-[12px]">
        <div className="flex flex-row items-center gap-[16px]">
            <img className="rounded-full border border-white w-[78px] h-[78px]" src={user?.image} alt="patient_profile" />
            <h1 className="text-lime-accent text-[36px] font-bold">{user?.firstName} {user?.lastName}</h1>
        </div>
        <hr className="text-lime-accent"/>
        <MainBlock title="Next appointment" bgColor={{background: "black"}}>
            <div className="flex flex-row justify-between">
                <p>Tuesday 12</p>
                <p className="font-bold">On-site</p>
            </div>
            <p className="font-bold">14:35</p>
        </MainBlock>
    </div>
}

export default PatientAppointment;