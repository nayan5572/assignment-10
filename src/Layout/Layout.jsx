import { Outlet } from "react-router-dom";
import Header from "../Sheread/Header/Header";
import Footer from "../Sheread/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <div className="bg-white dark:bg-black dark:text-white">
                <div className="md:w-[85%] mx-auto">
                    <Header></Header>
                </div>
            </div>
            <div className='md:w-[85%] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;