// import { useEffect, useState } from "react";
// import type { UserData } from "../types/user";
// import type { Post } from "../types/post";
// import type { MailContent } from "../mail/MailPage";
import { useSomeContext } from "@/patients/PatientsPage";
import MailPreview from "./MailPreview";

useSomeContext;

const RecentMails = () => {
    const {patients, patientsPostContents} = useSomeContext();
    const splicedPosts = patientsPostContents?.posts.toSpliced(3, 2);
    
    return <div className="rounded-[20px] p-[20px] flex flex-col colorMixGreen text-lime-accent font-bold h-[100%] gap-(--gap-main)">
        <p className="relative z-1">Recent mails</p>
        <hr />
         {splicedPosts?.map((mail) => {
            const index = patients.findIndex(user => user.id === mail.userId);
            return <MailPreview key={mail.id} name={patients[index]?.firstName} mailObj={mail.title}/>
         })}
    </div>
}

export default RecentMails;