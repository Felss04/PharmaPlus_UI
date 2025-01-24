import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { useState } from 'react'

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const loginData = {
            email,
            password,
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })

            // Si la respuesta es exitosa (status 200-299)
            if (response.ok) {
                const data = await response.json()

                // Almacenar el token JWT en el localStorage
                localStorage.setItem('token', data.token)

                // Redirigir al usuario a la página principal o dashboard
                navigate('/dashboard')
            } else {
                const errorData = await response.json()
                setError(errorData.message || "Invalid credentials, please try again.")
            }
        } catch (error) {
            setError("An error occurred. Please try again later.")
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
            <Button size="icon" className="absolute top-4 left-4" onClick={() => navigate('/')}>
                <ChevronLeft color="#ffffff" />
            </Button>
            <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <div className="form w-[300px] bg-white rounded-md shadow-md h-auto flex items-center flex-col gap-3 py-5 px-2">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="flex flex-col gap-3 mx-auto w-[90%]">
                        <div className="item">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="Email" 
                                className="outline-none active:ring-0 focus:ring-0" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                placeholder="Password" 
                                className="outline-none active:ring-0 focus:ring-0" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <Link to="#" className="text-blue-500 underline text-sm float-right mt-1">Forgot password?</Link>
                        </div>
                        <Button type="submit">Sign in</Button>
                    </form>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <p className="text-center text-sm text-gray-500">Don't have an account? <Link to="#" className="text-blue-500 underline text-sm float-right ml-1"> Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}
