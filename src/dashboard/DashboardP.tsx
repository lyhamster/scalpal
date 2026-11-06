import Button from "../components/Button";
import NextAppointMent from "./NextAppointment";
import RecentMails from "./RecentMails";

const specialBttn = {
    background: "black",
    color: "--color-lime-400",
}

const DashboardP = () => {
    return <div className="flex flex-col bg-black 2xl:p-(--xl-padding) p-(--base-padding) rounded-[20px] border border-white w-[100%] 2xl:gap-3 gap-1">
        <h1 className="2xl:text-4xl text-2xl font-bold text-lime-accent relative">Dashboard</h1>
        <h2 className="text-lime-accent font-bold 2xl:text-4xl text-2xl relative">Hi, Lyanne.</h2>
        <div className="relative flex flex-row 2xl:gap-3 gap-1 h-[100dvh]">
            <div className="flex flex-col 2xl:gap-3 gap-1 grow">
                <NextAppointMent />
                <RecentMails />
                <Button label="Make a new appointment" onClick={() => console.log("hello")} />
                <Button label="Send bills" bgColor={specialBttn} onClick={() => ""} />    
            </div>
            <div className="radialDashboardBg bg-lime-400 grow rounded-[20px]"></div>
        </div>
    </div>    
}

export default DashboardP;