import { useLoaderData } from "react-router-dom";


const CoffeeCard = () => {
    const coffees= useLoaderData();
    console.log(coffees)
    return (
        <div>
            <h1>Coffee Card ...</h1>
        </div>
    );
};

export default CoffeeCard;