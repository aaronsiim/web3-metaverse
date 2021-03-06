import Image from "next/image"
import { useMoralis } from "react-moralis";
import profile from '../assets/profile.png';

function Login() {
    const { authenticate, isInitialized } = useMoralis();

    return (
        <div className="bg-black relative ">
            <h1>Login screen</h1>

            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                {/* Web3 Metaverse Logo */}
                <Image
                    className="object-cover rounded-full"
                    src={profile}
                    height={200}
                    width={200}
                />

                {/* Login Button */}
                <button
                    onClick={authenticate}
                    className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
                >
                    Login to the Metaverse
                </button>
            </div>

            <div className="w-fill h-screen">
                {/* Background */}
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>

    )
}

export default Login