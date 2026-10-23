import Button from "../components/Button";
import {useState, type MouseEvent} from "react";

const Form =  () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: MouseEvent) => {
        e.preventDefault();
        fetch('https://dummyjson.com/user/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
                expiresInMins: 60, 
            }),
        })
        .then(res =>  res.json())
        .then((data) => {
            window.localStorage.setItem("token", JSON.stringify(data.accessToken));
            if(!data.accessToken) {
                return
            } else {
                location.assign("/dashboard");
            }
        });
    }

    return <form className="flex flex-col uppercase text-green-700 gap-[10px]">
        <label htmlFor="email">email</label>
        <input className="bg-white border border-black p-[10px] rounded-[8px]" type="email" id="email" pattern=".+@exemple\.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="password">password</label>
        <input className="bg-white border border-black p-[10px] rounded-[8px]" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>     
        <Button label="login" onClick={e => handleSubmit(e)}/>
    </form>
}

export default Form;