import Choose from "./Choose";

export default function Game({ variants }) {
    const [choosen, setChoosen] = useState(1)
    return (
        <>
            <Choose variants={variants} />
        </>
        
    )
};
