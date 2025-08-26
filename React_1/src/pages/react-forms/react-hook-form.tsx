// Login Form
/* To implement zod schema validations, we need to install two libraries
     - npm i zod
     - npm i @hookform/resolvers
*/
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// For TypeScript (You can declare this in  global types file) 
// type LoginFormFields = {
//     email: string;
//     password: string;
// }

// Using zod for schema validation
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})
// Inferred Type (This is how zod and TS should be used)
type LoginFormFields = z.infer<typeof schema>;


export default function ReactHookForm() {
    // register is used inside <input> to register the input fields
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginFormFields>({
        defaultValues: {
            email: 'm@example.com'
        },
        resolver: zodResolver(schema)
    }); // Can have inputs of type LoginFormFields

    // Submit Function
    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        try {
            // Simulate a login request
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
            console.log(data);
            toast.success(`Logged in successfully with email: ${data.email}`);
        } catch (error) {
            // setError("email", { message: "Invalid email" });
            setError("root", { message: "Invalid email or password" }); // For root errors
            toast.error(`Login failed: ${error.message}`);
        }
    }

    /* - Here when we used handleSubmit from react-hook-form, it automatically handles the form validation and submission for us.
       - handleSubmit takes an argument of the onSubmit function, which is called with the form data when the form is valid.
       - By using "SubmitHandler<LoginFormFields>" we type safe the formdata on submission
    */

    return <div className="page-container">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input {...register("email")} className="input" type="email" placeholder="Type your email" />
            {/* This is how error messages are displayed (formState errors from react-hook-form)
                - ZOD handles validation and error messages
            */}
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input {...register("password")} className="input" type="password" placeholder="Type your password" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button className="button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
            </button>
            {/* For root errors */}
            {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
    </div>;
}
