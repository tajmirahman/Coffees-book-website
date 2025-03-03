import { NavLink } from "react-router-dom";


const Category = ({ data }) => {

    return (

        <div role="tablist" className="tabs tabs-border py-5">
            <NavLink to={`/category/${data.category}`} role="tab" className={({ isActive }) => `tab lg:text-2xl font-thin ${isActive ? "tab-active" : ""}`}>{data.category}</NavLink>
            
        </div>


    );
};

export default Category;