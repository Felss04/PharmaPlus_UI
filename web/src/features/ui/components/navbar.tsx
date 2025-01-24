import { Button } from "@/components/ui/button";
import "../styles/navbar.css";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar sticky top-0 z-50">
            <div className="logo"><img src="/assets/images/PharmaPlus-Logo.webp" alt="PharmaPlus Logo" />
            </div>
            <div className="flex max-w-[400px] border-2 border-gray-50 justify-between rounded-md outline-none overflow-hidden">
                {/* <select>
                    <option value="all">Categorías</option>
                    <option value="medicines">Medicinas</option>
                    <option value="supplements">Suplementos</option>
                    <option value="equipment">Gastables</option>
                </select> */}
                <Select>
                    <SelectTrigger className="w-[130px] bg-gray-100 text-[#222] border-none outline-none focus:ring-0 hover:bg-gray-200
                    rounded-r-none
                    ">
                        <SelectValue placeholder="Categorías" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="medicines">Medicinas</SelectItem>
                        <SelectItem value="supplements">Suplementos</SelectItem>
                        <SelectItem value="equipment">Gastables</SelectItem>
                    </SelectContent>
                </Select>
                <input type="text" placeholder="Buscar productos..." className="outline-none text-[#222] w-[200px] px-2 caret-[#006dba]"/>
                <Button className="bg-gray-100 text-[#333] shadow-none hover:bg-gray-200 w-12"  size="icon">
                    <Search />
                </Button>
            </div>
            <ul className="nav-links">
                <li><a href="About-us.html">Sobre Nosotros</a></li>
                <li><a href="categorias.html">Categorías</a></li>
                <li><a href="Sucursales.html">Sucursales</a></li>
            </ul>
            <div className="cart-icon">
                <ShoppingCart />
                {/* <div className="notification">0</div> */}
            </div>
            <Button onClick={()=> navigate("/login")}>Login</Button>
        </nav>
    )
}
