import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Web3 Metaverse</title>
        <link rel="icon" href="/profile.png" />
      </Head>

      <h1>Welcome to the App</h1>
      <button
        className='bg-red-500 rounded-lg p-5 font-bold animate-pulse'
        onClick={logout}
      >
        Logout
      </button>

    </div>
  )
}
