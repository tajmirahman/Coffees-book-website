

const Card = ({ coffee }) => {
    const { id, category, name, rating, image, type, origin, popularity } = coffee;
    return (
        <div className="card bg-base-100 hover:shadow-md border-2 border-gray-100">
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
            
        </div>
    );
};

export default Card;