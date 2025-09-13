// This is the way to type props in a functional component in React with TypeScript
// You can also specify this in types folder and import it here
type PersonProps = {
    name: string;
    age: number;
    isMarried: boolean;
};

export default function Person({ name, age, isMarried }: PersonProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isMarried ? "Married" : "Single"}</p>
        </div>
    )
}
