import About from "../About/About";
import Service from "../Service/Service";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProduct from "./HomeProduct/HomeProduct";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeProduct></HomeProduct>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;