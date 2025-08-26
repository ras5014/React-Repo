import { useState } from "react";
import toast from "react-hot-toast"

export default function SimpleForms() {
    const [name, setName] = useState<string>(""); // For multiple form fields this can be an object too
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page refresh
        console.log(name);
        // Check the react-hot-toast implementation in "App.tsx" file
        toast.success(`Form submitted successfully with name: ${name}`);
    }
    return (
        <div className="page-container">
            <h1 className="headline">React Simple Forms</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="flex gap-4">
                    <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
