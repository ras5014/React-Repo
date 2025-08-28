// To highlight the active link we need to use NavLink
import { NavLink, Outlet } from "react-router";

export default function ProfilesPage() {
    const profiles = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" }
    ];
    return (
        <div className="flex gap-50">
            <div>
                <h1 className="text-3xl font-bold">Profiles Page</h1>
                <ul className="flex flex-col gap-4 mt-4">
                    {profiles.map(profile => (
                        // To highlight the active link we need to use NavLink and isActive in this way
                        <NavLink key={profile.id} to={`/profiles/${profile.id}`} className={({ isActive }) => isActive ? "text-blue-500" : ""}>{profile.name}</NavLink>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    )
}
