import { createContext, useState, type SetStateAction } from "react";
import Button from "../components/Button"
import MailPreview from "./MailPreview";
import MailSidePreview from "./MailSidePreview";
import MailSideContent from "./MailSideContent";
import type { Post } from "../types/post";
import type { UserData } from "../types/user";
import { useSomeContext } from "@/patients/PatientsPage";

export type MailContent = {
    posts : [
        Post,
    ],
}

export type UserpostContextProps = {
    setPostId: React.Dispatch<SetStateAction<number | undefined>>,
    setSinglePost: React.Dispatch<SetStateAction<UserData | undefined>>,
    postId: number | undefined,
    setAllRead: React.Dispatch<SetStateAction<boolean>>,
    allRead: true | false,
    setReadList: React.Dispatch<SetStateAction<number[]>>,
    readList: number[],
}

export const UserpostContext = createContext<UserpostContextProps | null>(null);

useSomeContext;
type Prop = {
    "--radius-md": string;
}
const MailPage = () => {
    const { patients, patientsPostContents } = useSomeContext();
    
    const [postId, setPostId]= useState<number>();
    const [singlePost, setSinglePost] = useState<UserData>();
    const [allRead, setAllRead] = useState<boolean>(false);
    const [readList, setReadList] = useState<number[]>([]);
    
    const handleReadAll = () => {
        setReadList(patientsPostContents?.posts.map(mail => mail.id) as number[]);
    }

    const handleUnreadAll = () => {
        setReadList([]);
    }

    const handleUnread = () => {
        if (readList.includes(postId as number)) {
            setReadList(prev => prev.filter(id => id !== postId));
        }
    }

    return <div className="flex flex-col 2xl:p-(--xl-padding) p-(--base-padding) rounded-[26px] w-[100%] 2xl:gap-2 gap-1 overflow-hidden bg-black text-xs">
        <p className="text-lime-accent relative z-1 2xl:text-4xl font-futura font-bold">Mailbox</p>
        <nav className="flex 2xl:gap-1 gap-[4px] border border-white 2xl:rounded-1 2xl:p-(--xl-padding) xl:rounded-(--radius-xs) p-(--base-padding) colorMixGreen after:radius-sm">
            <Button label="New mail" onClick={() => console.log("hello")} bgColor={{background: "black"}} />
            <Button label="Mark all as read" onClick={handleReadAll} />
            <Button label="Mark all as unread" onClick={handleUnreadAll} />
            <Button label="Mark as unread" onClick={handleUnread} />
        </nav>
        <UserpostContext value={{postId, setPostId, setSinglePost, allRead, setAllRead, readList, setReadList}}>
            <div className="flex border-white border relative z-1 rounded-[20px] font-futura h-dvh">
                <MailSidePreview>
                    {patientsPostContents?.posts.map((mail) => { 
                        const index = patients.findIndex(user => user.id === mail.userId);
                        return <MailPreview key={mail.id} id={mail.id} name={patients[index]?.firstName} userId={mail.userId} title={mail.title} body={mail.body}/>})
                    }
                </MailSidePreview>
                {postId !== undefined && <MailSideContent data={patientsPostContents?.posts.find((post) => post.id === postId)} userData={singlePost}/>}
            </div>
        </UserpostContext>
    </div>
}

export default MailPage;