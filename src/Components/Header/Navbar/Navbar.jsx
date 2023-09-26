import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png"
const Navbar = () => {
    return (
        <div className="container mx-auto mt-10">
            <nav className="flex items-center  justify-between">
                <div>
                 <img src={logo} alt="" />
                </div>

                {/* This is banner text */}
                <div className="flex ">
                <ul className="flex gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Statistics
                        </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;