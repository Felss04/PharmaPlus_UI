import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router"

export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
            <Button size="icon" className="absolute top-4 left-4" onClick={() => navigate('/')}>
                <ChevronLeft color="#ffffff" />
            </Button>
            <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <div className="form w-[300px] bg-white rounded-md shadow-md h-auto flex items-center flex-col gap-3 py-5 px-2">
                    <h1 className="text-3xl font-bold text-center">Login </h1>
                    <form action="" className="flex flex-col gap-3 mx-auto w-[90%]">
                        <div className="item">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Email" className="outline-none active:ring-0 focus:ring-0" />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" className="outline-none active:ring-0 focus:ring-0" />
                            <Link to="#" className="text-blue-500 underline text-sm float-right mt-1">Forgot password?</Link>
                        </div>
                        <Button type="button">Sign in</Button>
                    </form>
                    <p className="text-center text-sm text-gray-500">Don't have an account? <Link to="#" className="text-blue-500 underline text-sm float-right ml-1"> Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}