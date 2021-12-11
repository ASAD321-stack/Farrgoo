import { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { Navbar, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const callHome = async () => {
        try {
            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            console.log(' catching error ------ Body---------------------');
            console.log(res);
            const data = await res.json();
            const data1 =  res.body;
            console.log(data);
            console.log(data.rootUser.name);
            setUserData({ name: data.rootUser.name });

            console.log(' catchingasdsadsadasdas error ---------------------------');
            console.log(res.status);
            console.log(res.status === 200);
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;

            }
            console.log(res.status);
        } catch (err) {
            console.log(err);
            console.log(' redirect --==-=-=-=-=-=-=-=-=-=-=--==-=-=');
            navigate('/login');

        }
    }
    useEffect(() => {
        callHome();
    }, []);

    return (
        <div className="header">
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-success">
                <Navbar.Brand className="navbar-brand" href="#home">Fargoo</Navbar.Brand>
                <div className="d-flex justify-content-left links">
                   <Link  className="btn" style={{"color":"white"}} to="/ads">Ads</Link>
                </div>
                <li className="nav item">
                    <NavLink className="btn" style={{"color":"white"}} to="/addFlight">Upload Details</NavLink>
                </li>
                <li className="nav item">
                    <NavLink className="btn" style={{"color":"white"}} to="/myFlight">My Flight</NavLink>
                </li>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {userData.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>

                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>

        </div>
    );
}

export default HomePage;