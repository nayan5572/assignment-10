import { useLoaderData } from "react-router-dom";

const ViewProductDetails = () => {

    const loaderData = useLoaderData()
    console.error("View My Error", loaderData);

    const { pictureURL, name, price, rating, description } = loaderData || {}


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto pt-12 dark:bg-black dark:text-white">
            <figure><img src={pictureURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-3xl">
                    {name}
                </h2>
                <div className="text-center">
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewProductDetails;