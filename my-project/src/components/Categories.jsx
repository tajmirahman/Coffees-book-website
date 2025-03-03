import { useLoaderData } from "react-router-dom";
import Category from "./Category";


const Categories = () => {

    const categories= useLoaderData();
    // console.log(data);


    return (
        <div className="flex justify-center items-center gap-10">
            {
                categories.map(data=> <Category key={data.id} data={data}/>)
            }
        </div>
    );
};

export default Categories;