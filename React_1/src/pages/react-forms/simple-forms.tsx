// If validation and error message showing comes into play then use react-hook-form (For Interviews)
import { useState } from "react";
import toast from "react-hot-toast"

export default function SimpleForms() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [name, setName] = useState<string>(""); // For multiple form fields this can be an object too
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page refresh
        console.log(name);
        setIsSubmitting(true);
        // Simulate a form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        // Check the react-hot-toast implementation in "App.tsx" file
        toast.success(`Form submitted successfully with name: ${name}`);
    }
    return (
        <div className="page-container">
            <h1 className="headline">React Simple Forms</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="flex gap-4">
                    <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
                    <button className="button" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    )
}
