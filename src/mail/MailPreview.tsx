import { useContext } from "react";
import { UserpostContext } from "./MailPage";
import type { Post } from "../types/post";

const useSomeContext = () => {
    const context = useContext(UserpostContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
}

const selectedStyle = {
    backgroundColor: "black",
    borderRadius: "20px",
    opacity: 1,
}

const MailPreview = ({id, name, title, body, userId} : Post) => {
    const {postId, setPostId, setSinglePost, readList, setReadList} = useSomeContext();

    const getUserInfo = () => {
        const link = "https://dummyjson.com/users/";
        fetch(link + userId)
        .then(res => res.json())
        .then(data => setSinglePost(data));
    }

    const handleRead = () => {
        setPostId(id);
        setReadList(prev => [id,...prev]);
        getUserInfo();
    }

    return <div key={id} className="relative z-1 flex flex-col gap-[3px] p-[20px] text-lime-accent font-futura" onClick={handleRead}>
       <div className={readList.includes(id) ? "read" : ""} style={postId === id ? selectedStyle : undefined}>
            <h1>{name}</h1>
            <div className="flex flex-row gap-[8px] items-baseline cursor-pointer">
                <div className={readList.includes(id) ?  "" : "unread"} style={readList.includes(id) ? {display: "none"} : {display: "flex"}}></div> 
                <p className="font-bold">{title}</p>
            </div> 
            <p className="text-ellipsis overflow-hidden whitespace-nowrap">{body}</p>
            <div></div>
            <hr />
        </div>
    </div>
}

export default MailPreview; 
