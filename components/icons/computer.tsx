import Image from "next/image"

const Computer = () => {
  return (
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image 
                src="/icons/computer.svg"
                alt="Logo"
                height={60}
                width={60}
            />
        </div>
  )
}

export default Computer
