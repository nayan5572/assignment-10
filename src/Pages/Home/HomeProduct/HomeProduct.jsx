import { useEffect, useState } from "react";

const HomeProduct = () => {
    const [imgData, setImgData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:2000/myData')
            .then(res => res.json())
            .then(data => setImgData(data))
    }, [])

    const handleDetails = e =>{
        e.preventDefault();
        console.log('Clicking test', e);
    }


    return (
        <div className='my-12 px-5 md:px-0 dark:bg-black dark:text-white' onClick={handleDetails}>
            <h3 className="font-bold text-4xl">Our Products </h3>
            <div className="divider"></div>
            <div
                data-aos="slide-up"
                data-aos-delay="400" //Here you can use any of the AOS animations
            >
                <div className='grid md:grid-cols-4  justify-between  gap-3  '>
                    {
                        imgData && imgData.map(img => <div className='rounded-lg h-full relative' key={img.id}>
                            <img className='h-96 w-96 rounded-lg' src={img.img} alt="" />
                            <span className='absolute top-2 left-2 bg-success px-3 py-1 rounded-md'>{img.name}</span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;