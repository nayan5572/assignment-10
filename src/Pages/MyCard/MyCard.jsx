import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = () => {
    const loaderData = useLoaderData();

    const [users, setUsers] = useState(loaderData);


    // handle delete data from server
    const handleDelete = id => {
        console.log("Handle Delete", id);

        fetch(`http://localhost:2000/addProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the user from the UI
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
            })
    }




    return (
        <div>
            <h2>My Card: {loaderData.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-300">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Brand Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loaderData.map(product => <tr key={product._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-circle btn-outline bg-white border-warning hover:bg-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.pictureURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="">{product.brand}</h2>
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>
                                    <h2>{product.price}</h2>
                                </td>
                                <td>
                                    <h2>{product.rating}</h2>
                                </td>
                                <th>
                                    <button className="btn btn-success">Update</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyCard;


