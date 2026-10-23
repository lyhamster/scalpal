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
            <div className="flex-1 p-[60px]">
                <PortalDecoration />
            </div>
            <div className="pr-[120px] pb-[120px] pt-[120px] pl-[60px]">
                <div className="flex flex-col gap-[32px]">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className="font-bold text-[32px]">Sign into your existing account</h1>
                    <p className="text-green-700">Access your dashboard, patients details and manage your schedule.</p>
                    <Form />
                    <div className="flex justify-center gap-[5px]">Don't have an account ? <a className="text-lime-400 decoration-1 underline" href="">Sign in</a></div>
                    <Block content="** ELECTED BEST MEDICAL APPLICATION OF 2026 ** ELECTED BEST MEDICAL APPLICATION OF 2026 ** ELECTED BEST MEDICAL APPLICATION OF 2026 **"/>
                </div>    
            </div>
        </div>
    )
}

export default LoginPage;