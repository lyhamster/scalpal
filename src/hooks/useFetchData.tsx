import type { MailContent } from "@/mail/MailPage";
import type { Post } from "@/types/post";
import type { UserData } from "@/types/user";
import { useEffect, useState } from "react";

type ReturnValue = [UserData[], MailContent | undefined];

export function useFetchData(): ReturnValue {
    const [userInfo, setUserInfo] = useState<UserData[]>([]);
    const [mailContent, setMailContent] = useState<MailContent>();
        
    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=5&skip=0')
            .then(res => res.json())
            .then((data) => { 
                data.posts.forEach((post : Post) => {
                    const getIndex = (user: UserData) => user.id ===  post.userId;
                    if (userInfo.findIndex(getIndex) > -1) {
                        return
                    }
                const route = "https://dummyjson.com/users/";
                fetch(route + post.userId)
                    .then(res => res.json())
                    .then(userData => setUserInfo((prev) => {
                        if(prev.findIndex(getIndex) > - 1) {
                            return prev;
                        }
                        return [...prev, userData];
                    }));
                })
                setMailContent(data);
            });
    }, []);
    return [userInfo, mailContent];
}