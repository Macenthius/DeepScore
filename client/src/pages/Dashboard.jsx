import { useContext } from "react"
import { UserContext } from "../../context/userContext"

export default function Dashboard() {
  const {user} = useContext(UserContext)
    return (
      <div className='bg-gray-800 flex justify-center items-center h-16 w-full fixed top-0'>
        <h1 className="text-3xl text-white font-bold mb-4 text-center rounded-lg"> DeepScore Dashboard </h1>
      </div>
  )
}