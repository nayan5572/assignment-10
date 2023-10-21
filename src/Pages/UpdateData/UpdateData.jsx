import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const UpdateData = () => {
    const myData = useLoaderData();
    const { _id, pictureURL, name, brand, price, rating, description } = myData;


    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const pictureURL = form.pictureURL.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(pictureURL, name, price, rating, description);

        const newProduct = {
            pictureURL,
            name,
            brand,
            price,
            rating,
            description,
        }
        // send data to the server
        fetch(`http://localhost:2000/addProduct/${_id}`, {
            method:"PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire(
                        'Updated!',
                        'Your file has been Successfully Updated.',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold'>
                Now <span className='text-success'>Update A Product</span>
            </h1>
            <div className="divider"></div>
            <div className='bg-slate-400 py-10 px-10'>
                <form onSubmit={handleUpdateProduct}>
                    <div className=''>
                        <h1 className='text-xl font-semibold my-3'>Name:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='name'
                            placeholder='Name'
                            defaultValue={name}
                        />

                        <h1 className='text-xl font-semibold my-3'>Picture URL:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='pictureURL'
                            placeholder='Picture URL of the toy'
                            defaultValue={pictureURL}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Brand Name</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            placeholder="Brand Name"
                            required
                            name='brand'
                            defaultValue={brand}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Price:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='price'
                            placeholder='Price'
                            defaultValue={price}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Rating:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='rating'
                            placeholder='Rating'
                            defaultValue={rating}
                        />

                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Detail description:</h1>
                        <textarea
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='description'
                            placeholder='Detail description'
                            defaultValue={description}
                        />
                    </div>
                    {/* <button className='my-10 btn btn-block btn-success'>Add Product</button> */}
                    <input className="btn btn-block btn-success mt-8" type="submit" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;