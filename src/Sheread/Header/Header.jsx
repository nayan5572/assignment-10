import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import img1 from '../../assets/logo.png';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handelLogout = () => {
        logout()

    }

    const navLink = <>

        <li><NavLink className={({ isActive }) => isActive ? 'underline' : ''} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline' : ''} to="/AllProduct">All Product</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline' : ''} to="/blog">Blog</NavLink></li>
        <div className="divider lg:divider-horizontal"></div>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-10" src={img1} alt="website logo" />
                    <p>People Shop</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                    {
                        user ? <div className='flex justify-center items-center gap-4'> <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <div className="w-24 rounded-full">
                                        <img src={user ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9Prvq8v6QqrdmLk_5w4PK3NcujPmDSZ9Kfe_SZdNdQ&s"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? "underline text-error" : ""
                            }
                                to={"/myCard"}>My Card</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? "underline text-error" : ""
                            }
                                to={"/addProduct"}>Add A Product</NavLink></li>
                            <button onClick={handelLogout} className='btn btn-success'>Logout</button>
                        </div>

                            : <li><Link className='btn btn-error flex items-center content-center' to={"/login"}>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Learn More</a>

            </div>
        </div>
    );
};

export default Header;