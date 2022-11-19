import NavBar from "../../components/LayOut/NavBar/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
        </>
    );
};

export default Layout;