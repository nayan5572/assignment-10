import img1 from '../../assets/logo.png';
const Footer = () => {
    return (
        <div className='bg-gray-300'>
            <div className="md:w-[85%] mx-auto pt-12 dark:bg-black dark:text-white">
                <footer className="footer p-10 bg-gray-300 text-base-content dark:bg-black dark:text-white">
                    <aside>
                        <img className='w-20' src={img1} alt="" />
                        <p className='text-3xl font-bold'>People Shop</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;