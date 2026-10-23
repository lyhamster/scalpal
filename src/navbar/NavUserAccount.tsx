import { NavLink } from "react-router";
import type { UserData } from "../types/user";

type Props = {
    user: UserData,
}

const handleLogOut = () => {
    localStorage.removeItem("token");
}

const NavUserAccount = ({user} : Props) => {
    return  <div className="flex flex-row gap-[8px] items-center justify-start relative z-1">
        <img className="border-[2px] border-white rounded-[50%] w-[50%] point-events-none" src={user.image} alt="userProfilePic" />
        <div className="flex flex-col w-[100%]">
            <h1 className="font-bold text-white">{user.firstName} {user.lastName}</h1>
            <p className="text-lime-400">{user.company.title}</p>
            <NavLink  className="underline text-white z-1" to="/" onClick={handleLogOut}>Log out</NavLink>
        </div>
    </div>
}

export default NavUserAccount;