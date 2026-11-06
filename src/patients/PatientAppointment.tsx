import type { UserData } from "@/types/user";
import MainBlock from "../components/MainBlock";

type Prop = {
    user?: UserData,
}
const PatientAppointment = ({ user }: Prop) => {
    return <div className="flex flex-col gap-1 2xl:gap-2 text-xs">
        <div className="flex flex-row items-center 2xl:gap-2 gap-1">
            <img className="rounded-full border border-white 2xl:w-[78px] 2x:lh-[78px] w-[39px] h-[39px]" src={user?.image} alt="patient_profile" />
            <h1 className="text-lime-accent 2xl:text-4xl text-2xl font-bold">{user?.firstName} {user?.lastName}</h1>
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