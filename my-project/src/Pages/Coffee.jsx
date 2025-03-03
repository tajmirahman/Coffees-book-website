import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Heading from "../components/Heading";
import {  useState } from "react";


const Coffee = () => {

    const data = useLoaderData();
    const [coffee,setCoffee]=useState(data);

    const handleSort=sortBy=>{
        if(sortBy === 'popularity'){
            const sortByPopularity=[...data].sort((a, b)=> b.popularity - a.popularity);
            setCoffee(sortByPopularity)
        }
        else if(sortBy === 'rating'){
            const sortByRating=[...data].sort((a, b)=> a.rating - b.rating);
            setCoffee(sortByRating)
        }
    }


    return (
        <>
        <div className="flex justify-between mb-4">
            <h1 className="text-2xl">Sort Coffee&apos;s by Popularity & Rating&gt; </h1>

            <div className="space-x-3">
                <button onClick={()=>handleSort('rating')} className="btn btn-warning">Sort By Rating</button>
                <button onClick={()=>handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
            </div>
            
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                coffee.map(coffee => <Card key={coffee.id} coffee={coffee} />)
            }
        </div>
        </>
    );
};

export default Coffee;