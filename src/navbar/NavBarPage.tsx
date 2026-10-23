import { NavLink } from "react-router";
import NavUserAccount from "./NavUserAccount";
import type { UserData } from "../types/user";
import WhiteLogo from "@/images/whitelogo.svg"
import { useState } from "react";

type Props = {
    data: UserData | null;
}

const NavBarPage = ({data} : Props) => {
    const [className, setClassName] = useState('');

    const handleClick = {
        dashboard: () => {
            setClassName("dashboard");
        },
        patients: () => {
            setClassName("patients");
        },
        mailbox: () => {
            setClassName("mailbox");
        }
    }

    return <div className="flex flex-col justify-between py-[22px] px-[17px] rounded-[20px] border-[0.4px] colorMixGreen border-white w-[15%] h-[100%] relative g-[10px]">
            <div className="flex flex-col gap-[20px]">
                <img src={WhiteLogo} alt="logo_in_white" className="relative" width="35.34px" height="37.3px"/>
                <div className="flex flex-col z-1 gap-[4px]">
                    <NavLink to="/dashboard" className="font-bold `${}`" onClick={handleClick.dashboard} style={className === "dashboard" ? {color: "#7CEA1B"} : {color: "white"}}>Dashboard</NavLink>
                    <NavLink to="/patients" className="font-bold" onClick={handleClick.patients}style={className ==="patients"? {color: "#7CEA1B"} : {color: "white"}}>Patients</NavLink>
                    <NavLink to="/mail" className="font-bold" onClick={handleClick.mailbox} style={className ==="mailbox" ? {color: "#7CEA1B"} : {color: "white"}}>MailBox</NavLink>
                </div>
            </div>
        {data && <NavUserAccount user={data} />}
        </div>
}

export default NavBarPage;