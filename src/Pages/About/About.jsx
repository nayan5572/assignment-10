import { useEffect } from 'react';
import img1 from '../../assets/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const About = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])


    return (
        <div className='my-10 px-6 md:px-0' data-AOS = "fade-up">
            <h3 className="font-bold text-4xl">About Us </h3>
            <div className="divider"></div>
            <div className='flex gap-24 items-center flex-col md:flex-row'>

                <div className='md:w-[50%] rounded-lg'>
                    <img className='w-[100%] rounded-lg' src={img1} alt="" />
                </div>
                <div className='md:w-[50%]'>
                    <h1 className="text-3xl font-bold">Our one-stop shop for quality products and exceptional service.</h1>
                    <p className='my-10'>At <span className='text-success font-bold text-3xl'>Shopping Hub </span> , we are passionate about educational toys that spark curiosity and inspire learning. We handpick the finest selection of toys designed to engage young minds and make learning a fun and interactive experience.</p>

                    <p>Our carefully curated collection includes a variety of educational toys for children of all ages. From STEM toys that encourage problem-solving and critical thinking to language and creativity-enhancing games, we have something for every learning journey.</p>


                    <p>Our carefully curated collection includes a variety of educational toys for children of all ages. From STEM toys that encourage problem-solving and critical thinking to language and creativity-enhancing games, we have something for every learning journey.</p>

                    <button className='btn btn-block btn-success my-10'>Join Now</button>

                </div>
            </div>
        </div>
    );
};

export default About;