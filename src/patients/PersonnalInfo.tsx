import type { UserData } from "@/types/user";

type Prop = {
    user?: UserData,
}

const patientFeatLabel = ["Age", "Gender", "Birth date", "Eye color", "Hair color", "Hair type"];

const PersonnalInfo = ({user} : Prop) => {
    const patientFeatData = [`${user?.age} y.o`, user?.gender, user?.birthDate, user?.eyeColor, user?.hair.color, user?.hair.type];

    return <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[8px] py-[8px] px-[22px] rounded-md bg-lime-400 border border-white text-black justify-between">
            <p>Blood group</p>
            <p className="font-bold">{user?.bloodGroup}</p>
        </div>
        <div className="flex gap-[8px] py-[8px] px-[22px] rounded-md bg-green-700 border border-white text-white justify-between">
            <p>Height</p>
            <p className="font-bold">{user?.height}</p>
        </div>
        <div className="flex gap-[8px] py-[8px] px-[22px] rounded-md bg-green-700 border border-white text-white justify-between">
            <p>Weight</p>
            <p className="font-bold">{user?.weight}</p>
        </div> 
        <div className="flex justify-between">
            <div className="flex flex-col text-lime-400 justify-between gap-[8px]">
                {patientFeatLabel?.map((features) =><p>{features}</p>)}
            </div>
            <div className="flex flex-col text-lime-400 justify-between font-futura font-bold">
                {user !== undefined && patientFeatData.map((data) =><p>{data}</p>)}
            </div>    
        </div>
    </div>
}

export default PersonnalInfo;