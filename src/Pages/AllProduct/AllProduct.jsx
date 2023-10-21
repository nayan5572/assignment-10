import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
    
      
        const [productData, setProductData] = useState([])


        useEffect(() => {
            fetch(`https://assignment-10-server-mkxinqgob-halder25572.vercel.app/addProduct`)
                .then(res => res.json())
                .then(data => setProductData(data))
        }, [])

 
        return (
            <div className="dark:bg-black dark:text-white">
                {
                productData.length === 0 ? "No Product Found" : ""}
                <div className="overflow-x-auto w-full my-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th className='text-center'></th>
                                <th className='text-center'>Price</th>

                                <th className='text-center'>Rating</th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                productData && productData.map(data => <tr key={data._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3 ">
                                            <div>
                                                <div className="font-bold">{data.name}</div>
                                                <div className="text-sm opacity-50">{data.subcategory}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2 className='text-xl'>{data.sellerName}</h2>
                                        <div>{data.sellerEmail}</div>
                                    </td>
                                    <td className='text-center'>{data.price}</td>

                                    <td className='text-center'>{data.rating}</td>


                                    <th className='text-center'>
                                        <Link to={`/viewProductDetails/${data._id}`}> <button className="btn btn-warning">View Details</button></Link>
                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        );
    };

    export default AllProduct;