import Button from "../components/Button";
import NextAppointMent from "./NextAppointment";
import RecentMails from "./RecentMails";

const specialBttn = {
    background: "black",
    color: "--color-lime-400",
}

const DashboardP = () => {
    return <div className="flex flex-col bg-black p-(--spacing) rounded-[20px] border border-white w-[100%] gap-(--gap-main)">
        <h1 className="text-[36px] font-bold text-lime-accent relative">Dashboard</h1>
        <h2 className="text-lime-accent font-bold text-[50px] relative">Hi, Lyanne.</h2>
        <div className="relative flex flex-row gap-(--gap-main) h-[100dvh]">
            <div className="flex flex-col gap-(--gap-main) grow">
                <NextAppointMent />
                <RecentMails />
                <Button label="Make a new appointment" onClick={() => console.log("hello")}/>
                <Button label="Send bills" bgColor={specialBttn} onClick={() => ""}/>    
            </div>
            <div className="radialDashboardBg bg-lime-400 grow rounded-[20px]"></div>
        </div>
    </div>    
}

export default DashboardP;