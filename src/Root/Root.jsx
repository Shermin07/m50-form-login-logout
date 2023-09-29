
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Home from "../Pagegs/Home/Home";


const Root = () => {
    return (
        <div>
        <Navber></Navber> 
        <Outlet></Outlet>

        </div>
    );
};

export default Root;