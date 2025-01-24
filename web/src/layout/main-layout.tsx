import { Navbar } from '../features/ui/components/navbar'
import { Outlet } from 'react-router'
import "../features/ui/styles/ui.css"
export const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}
