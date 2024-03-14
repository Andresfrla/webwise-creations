import Image from "next/image"

const Page = () => {
  return (
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image 
                src="/icons/page.svg"
                alt="Logo"
                height={30}
                width={30}
            />
        </div>
  )
}

export default Page
