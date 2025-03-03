import { useLoaderData } from "react-router-dom";

import Card from "./Card";


const CoffeeCard = () => {
    const coffees = useLoaderData();

    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}/>)
            }
            </div>
        </div>
    );
};

export default CoffeeCard;