import { Link } from "react-router-dom";


const Card = ({ coffee }) => {
    const { id, category, name, rating, image, type, origin, popularity } = coffee;
    return (
        <div className="card bg-base-100 hover:shadow-md border-2 border-gray-100">
            <Link to={`/coffee/${id}`}
                className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
            />
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