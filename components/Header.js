import Image from "next/image";
import { useMoralis } from "react-moralis"
import profile from '../assets/profile.png';
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";


function Header() {
    const { user } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-red-500 border-b-2 border-red-700 ">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full "
                        src={profile}
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    {/* Avatar */}
                    <div className="relative h-48 w-48 lg:mx-auto border-red-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    {/* Welcome Message */}
                    {/* username */}
                    <div>
                        <h1 className="text-3xl">Welcome to Web3 Metaverse</h1>
                        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    </div>

                    {/* Change username component */}
                    <ChangeUsername />

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header