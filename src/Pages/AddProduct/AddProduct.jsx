import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const pictureURL = form.pictureURL.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const description = form.description.value;
        console.log(pictureURL, name, price, rating, description);

        const newProduct = {
            pictureURL,
            name,
            brand,
            price,
            rating,
            description,
        }
        console.log(newProduct);

        // send data to the server
        fetch(`http://localhost:2000/addProduct`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            })
    }


    return (
        <div className='my-10 dark:bg-black dark:text-white'>
            <h1 className='text-4xl font-bold'>
                Now <span className='text-success'>Add A Product</span>
            </h1>
            <div className="divider"></div>
            <div className='bg-slate-400 py-10 px-10'>
                <form onSubmit={handleAddProduct}>
                    <div className=''>
                        <h1 className='text-xl font-semibold my-3'>Name:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='name'
                            placeholder='Name'
                        />

                        <h1 className='text-xl font-semibold my-3'>Picture URL:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='pictureURL'
                            placeholder='Picture URL of the toy'
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
                        />
                    </div>
                    <button className='my-10 btn btn-block btn-success'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;