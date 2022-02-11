import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="body-font bg-gray-100 w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="/blog">Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="https://drive.google.com/file/d/1JqX1lxDO6vEObWCgiaFd_1hvimfJvRkt/view">Resume</NavLink>
                </nav>
            </div>
        </header>
    )
}
