import MainBlock from "../components/MainBlock";

const Files = () => {
    return <MainBlock title="Files" bgColor={{background: "#7cea1b13"}}>
        <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row justify-between p-[8px] rounded-[8px] bg-black">
                <p>PDF</p>
                <p className="text-lime-400 font-bold">Bank Statement.pdf</p>
            </div>
            <div className="flex flex-row justify-between p-[8px] rounded-[8px] bg-black">
                <p>PDF</p>
                <p className="text-lime-400 font-bold">Medical Prescription 10-03.pdf</p>
            </div>
            <div className="flex flex-row justify-between p-[8px] rounded-[8px] bg-black">
                <p>ZIP</p>
                <p className="text-lime-400 font-bold">X-ray scans.zip</p>
            </div>    
        </div>
    </MainBlock>
}

export default Files;