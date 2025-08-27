import { Link } from "react-router"

export default function NotFoundPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold">404 Page Not Found!</h1>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                <Link to="/">Go Home</Link>
            </button>
        </div>
    )
}
