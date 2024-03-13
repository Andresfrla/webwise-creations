import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image 
                src="/logo.svg"
                alt="Logo"
                height={50}
                width={50}
            />
            <p>
                BentoBox Design
            </p>
        </div>
    </Link>
  )
}

export default Logo
