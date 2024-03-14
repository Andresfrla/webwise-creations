import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="border">
        <div className="flex justify-around items-center mb-4 mt-4">
            <Logo />

            <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild>
                    <Link
                        href="/sign-in"
                    >
                        Login
                    </Link>
                </Button>
                <Button size="sm" asChild>
                    <Link
                        href="/sign-up"
                    >
                        Get Taskify for free
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}
