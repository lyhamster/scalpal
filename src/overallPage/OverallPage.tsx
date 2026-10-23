import { useEffect, useState } from "react";
import NavBarPage from "../navbar/NavBarPage";
import { Outlet } from "react-router";
import type { UserData } from "../types/user";

const OverallPage = () => {
    const token = window.localStorage.getItem("token");
    const cleanToken = token?.replaceAll('"', '');
    const auth =  `Bearer ${cleanToken}`;

    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/user/me', {
        method: 'GET',
        headers: {
            'Authorization': auth, // Pass JWT via Authorization header
        },
        credentials: 'include' // Include cookies (e.g., accessToken) in the request
        })
        .then(res =>{
            if (!res.ok) {
                location.assign("/");
            } 
            return res.json();
        })
        .then(data => setUserData(data));
    }, []);
    
    return <div className="radialGreenBg p-[20px] h-[100dvh] flex flex-row gap-[26px]">
        <NavBarPage data={userData} />
        <Outlet />
    </div>
}

export default OverallPage;