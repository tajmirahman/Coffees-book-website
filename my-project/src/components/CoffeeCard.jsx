
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCard = () => {

    const data = useLoaderData();
    const { category } = useParams();

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
       if(category){
        const filterByCategory= [...data].filter(cof=> cof.category === category);
       setCoffee(filterByCategory);
       }
       else{
        setCoffee(data.slice(0,6));
       }
        
    }, [category, data])



    return (

        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    coffee.map(coffee => <Card key={coffee.id} coffee={coffee} />)
                }
            </div>

            <div className="p-4"> 
            <button onClick={()=>setCoffee(data)} className="btn btn-warning">Show All</button>
            </div>
        </>

    );
};

export default CoffeeCard;