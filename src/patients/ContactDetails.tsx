import type { UserData } from "@/types/user";
import Button from "../components/Button"
import MainBlock from "../components/MainBlock"

type Prop = {
    user?: UserData,
}

const contactLabelsList = ["E-mail", "Phone", "Address", "Company"];

const ContactDetails = ({user}: Prop) => {
    const address = `${user?.address.address} ${user?.address.city} ${user?.address.state} ${user?.address.country}`;
    const contactDetailsList = [user?.email, user?.phone, address, user?.company.name];

    return <MainBlock title="Contact details" bgColor={{background: "black"}}>
        <div className="flex justify-between">
            <div className="flex flex-col gap-(--gap-main)">
                {contactLabelsList.map((label,index) => <p key={`${label} ${index}`}>{label}</p>)}
            </div>
            <div className="flex flex-col gap-(--gap-main) items-end">
                {user !== undefined && contactDetailsList?.map((contactDetails) => <p className="text-lime-400 font-bold">{contactDetails}</p>)}   
            </div>
        </div>
        <div className="flex flex-row gap-[16px] justify-end">
            <Button label="Call phone" onClick={() => console.log("hello")}/>
            <Button label="Send email" onClick={() => console.log("hello")}/>
        </div>
    </MainBlock>
}

export default ContactDetails