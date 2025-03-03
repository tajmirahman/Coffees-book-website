import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Heading from "./Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
        
                <Banner />
        

            {/* Heading section */}
            <Heading title={'Browse Coffees By Category'}
                subTitle={'Choose your desired coffee category though specific coffes that feet in your test'} />

            {/* Category section */}
            <Categories />
            <Outlet />

        </div>
    );
};

export default Home;