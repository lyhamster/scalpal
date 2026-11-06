import type { Post } from "../types/post";
import type { UserData } from "../types/user";
import Tag from "./Tag";

type Prop = {
    data?: Post,
    userData?: UserData,
}

const MailSideContent = ({data, userData} : Prop) => {
    return <div className="text-lime-accent grow p-[10px] flex flex-col 2xl:gap-2 gap-1">
        <p>{userData?.firstName} {userData?.lastName} <a className="text-lime-400" href={userData?.email}>"{userData?.email}"</a></p>
        <h1 className="text-2xl 2xl:text-4xl font-bold">{data?.title}</h1>
        <div className="flex 2xl:gap-2 gap-1">                  
            {data?.tags && data.tags.map((label, index) => <Tag key={index} label={label}/>)}
        </div>
        <hr />
        <div className="w-[75%]">{data?.body}</div>
    </div>
}

export default MailSideContent;