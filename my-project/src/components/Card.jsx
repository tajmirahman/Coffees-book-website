import { Link, useLocation } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";


const Card = ({ coffee,handleRemove }) => {

    const { pathname } = useLocation();


    const { id, category, name, rating, image, type, origin, popularity } = coffee;
    return (
        <div className="card bg-base-100 hover:shadow-md border-2 border-gray-100">

            {pathname === '/dashboard' && <div onClick={()=>handleRemove(id)} className="absolute -top-5 -right-4 rounded-full bg-warning p-2 text-2xl"><button><RiDeleteBin6Fill /></button></div>}

            <figure className="w-full h-[300px] object-cover">
                <img className="w-full h-[300px]" src={image} alt="Shoes" />
            </figure>
            <div className="ml-4 mt-2">
                <h2 className="text-xl">Name: {name}</h2>
                <p>Types: {type}</p>
                <p>Category: {category}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popularity: {popularity}</p>
            </div>

            <div className="flex justify-end p-4">
                <Link to={`/coffee/${id}`}><button className="btn btn-warning">Details</button></Link>
            </div>

        </div>
    );
};

export default Card;