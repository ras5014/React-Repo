import { useParams } from "react-router"
export default function ProfileDetailsPage() {
    const params = useParams<{ profileId: string }>(); // For TS
    const profileId = params.profileId;

    return (
        <div>
            <h1 className="text-3xl font-bold">Profile Details</h1>
            <p>Showing details for profile ID: {profileId}</p>
        </div>
    )
}
