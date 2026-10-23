import { useContext } from "react";
import { PatientsContext } from "./PatientsPage";
import type { UserData } from "@/types/user";

const patientHealthStatus = ["chronic illness", "disabled", "healthy", "healthy", "healthy"];

const usePatientsContext = () => {
    const context = useContext(PatientsContext);
    if (!context) {
        throw new Error("component should be wrapped in a patients provider");
    }
    return context;
}

type Props = {
    user: UserData,
    index: number,
}

const selectedStyle = {
    backgroundColor: "black",
    borderRadius: "20px",
    opacity: 1,
}

const PatientPreview = ({user, index} : Props) => {
    const { setPatientId, patientId } = usePatientsContext();

    const handleClick = () => {
        setPatientId(user.id)
    }

    return <div className="flex flex-col itens-center p-[8px] text-[12px] text-lime-accent gap-(--gap-main) cursor-pointer" style={user.id === patientId ? selectedStyle : undefined}>
        <div className="flex gap-(--gap-main) w-[100%] pr-[10px]" onClick={handleClick}>
            <img className="rounded-full w-[33px] h-[33px] border border-white" src={user.image} alt="patient_profile_picture" />
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                    <p className="font-bold">{user.firstName} {user.lastName}</p>
                    <p>{user.gender}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>{patientHealthStatus[index]}</p>
                    <p>{user.age}y.o.</p>
                </div>       
            </div>
        </div>
    </div>
}

export default PatientPreview;