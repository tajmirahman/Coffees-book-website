import Banner from "./Banner";
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
            
        </div>
    );
};

export default Home;