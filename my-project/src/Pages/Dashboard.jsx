import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite, removeAllFavorite, } from "../components/Utility/Index";
import Card from "../components/Card";



const Dashboard = () => {

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        const favorites = getAllFavorite();
        setCoffee(favorites);
    }, [])

    const handleRemove = id => {
       removeAllFavorite(id);
       const favorites = getAllFavorite();
        setCoffee(favorites);

    }


    return (

        <>
            <div className="mb-10">
                <Heading title={'Wellcome To Dashboard'}
                    subTitle={'Manage Coffee that you have previously added. You can view and remove them items here.'} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    coffee.map(coffee => <Card
                        key={coffee.id}
                        coffee={coffee}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
        </>

    );
};

export default Dashboard;