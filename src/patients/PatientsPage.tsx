import type { UserData } from "@/types/user";
import ContactDetails from "./ContactDetails";
import Files from "./Files";
import PatientAppointment from "./PatientAppointment";
import PersonnalInfo from "./PersonnalInfo";
import PreviewSide from "./PreviewSide";
import PatientPreview from "./PatientPreview";
import { createContext, useContext, useState, type SetStateAction } from "react";
import { UserFetchContext } from "@/App";

export type PatientsContextProps = {
    setPatientId:React.Dispatch<SetStateAction<number | undefined>>,
    patientId: number | undefined,
}

export const PatientsContext = createContext<PatientsContextProps | null>(null);

export const useSomeContext = () => {
    const context = useContext(UserFetchContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
}

const PatientsPage = () => {
    const [patientId, setPatientId] = useState<number>();
    const { patients } = useSomeContext();

    return <div className="flex flex-col bg-black p-(--spacing) rounded-[26px] border border-white w-[100%] gap-[16px] relative z-1">
        <h1 className="text-lime-accent font-bold text-[36px]">Patients</h1>
        <PatientsContext value={{ setPatientId, patientId }}>
            <div className="flex flex-row h-[100%] text-[12px]">
                <PreviewSide>
                    {patients?.map((patient: UserData, index: number) => <PatientPreview user={patient} index={index}/>)}
                </PreviewSide>
                <div className="p-(--spacing) grow-4 flex flex-col gap-[16px] border border-white after:radius-md" style={{borderRadius: "0px 20px 20px 0px"}}>
                    <PatientAppointment user={patients?.find((patient: UserData) => patient.id === patientId)}/>
                    <hr className="text-lime-accent"/>
                    <div className="flex flex-row gap-[16px] justify-between">
                        <div className="grow-1">
                            <PersonnalInfo user={patients?.find((patient: UserData) => patient.id === patientId)}/>
                        </div>
                        <div className="grow-2 flex flex-col gap-[16px]">
                            <ContactDetails user={patients?.find((patient: UserData) => patient.id === patientId)}/>
                            <Files />    
                        </div>    
                    </div>
                </div>    
            </div>
        </PatientsContext>
    </div>
}

export default PatientsPage;