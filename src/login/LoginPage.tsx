import { useEffect } from "react";
import Block from "../components/Block";
import Form from "./Form";
import PortalDecoration from "./PortalDecoration";
import logo from "@/images/logo.svg";

const LoginPage = () => {
    
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const cleanToken = token?.replaceAll('"', '');
        const auth =  `Bearer ${cleanToken}`;
        
        fetch('https://dummyjson.com/user/me', {
        method: 'GET',
        headers: {
            'Authorization': auth, // Pass JWT via Authorization header
        },
        credentials: 'include' // Include cookies (e.g., accessToken) in the request
        })
        .then(res => {
            if (res.ok) {
                location.assign("/dashboard");
            } 
        })
    }, []);

    return (
        <div className="flex flex-row relative h-[100dvh] bg-creme">
            <div className="2xl:flex-1 w-[50%] 2xl:p-[60px] p-[30px]">
                <PortalDecoration />
            </div>
            <div className="2xl:p-(--xxl-padding) py-[60px] px-[30px]">
                <div className="flex flex-col 2xl:gap-[32px] gap-[16px]">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className="font-bold 2xl:text-3xl text-base">Sign into your existing account</h1>
                    <p className="text-green-700">Access your dashboard, patients details and manage your schedule.</p>
                    <Form />
                    <div className="flex justify-center 2xl:gap-[5px] gap-[2.5px] 2xl:text-lg text-sm">Don't have an account ? <a className="text-lime-400 decoration-1 underline" href="">Sign in</a></div>
                    <Block content="** ELECTED BEST MEDICAL APPLICATION OF 2026 ** ELECTED BEST MEDICAL APPLICATION OF 2026 ** ELECTED BEST MEDICAL APPLICATION OF 2026 **" />
                </div>    
            </div>
        </div>
    )
}

export default LoginPage;