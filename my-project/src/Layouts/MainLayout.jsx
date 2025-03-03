import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBer from "../components/NavBer";


const MainLayout = () => {
    return (
        <div>

            {/* navber */}
            <NavBer/>

            <div className="min-h-[calc(100vh-242px)] container mx-auto">

            {/* dianamic section */}
            <Outlet/>

            </div>


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;