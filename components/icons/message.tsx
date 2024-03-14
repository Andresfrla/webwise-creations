import Image from "next/image"

const Message = () => {
  return (
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image 
                src="/icons/message.svg"
                alt="Mesagge"
                height={90}
                width={90}
            />
        </div>
  )
}

export default Message
