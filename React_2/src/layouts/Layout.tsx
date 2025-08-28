import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className='p-10'>
            <Outlet />
        </div>
    )
}
