// import { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Navbar, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home0 = () => {
    // const navigate = useNavigate();
    // const [userData, setUserData] = useState({});
    // const callHome = async () => {
    //     try {
    //         const res = await fetch('/home', {
    //             method: "GET",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials: "include"
    //         });

    //         console.log(' catching error ------ Body---------------------');
    //         console.log(res);
    //         const data = await res.json();
    //         const data1 = res.body;
    //         console.log(data);
    //         console.log(data.rootUser.name);
    //         setUserData({ name: data.rootUser.name });

    //         console.log(' catchingasdsadsadasdas error ---------------------------');
    //         console.log(res.status);
    //         console.log(res.status === 200);
    //         if (res.status !== 200) {
    //             const error = new Error(res.error);
    //             throw error;

    //         }
    //         console.log(res.status);
    //     } catch (err) {
    //         console.log(err);
    //         console.log(' redirect --==-=-=-=-=-=-=-=-=-=-=--==-=-=');
    //         navigate('/login');

    //     }
    // }
    // useEffect(() => {
    //     callHome();
    // }, []);

    return (
        <div>
     
            <nav style={{ "height": "70px" }} class="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand"  style={{ "color": "white" ,"fontSize":"30px"}} to="/">Farrgo!</Link>
                <button style={{ "backgroundColor": "white" }} className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span  style={{ "backgroundColor": "white" }} className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  "  id="navbarNav">
                    <ul className="navbar-nav">
              
                        <li className="nav-item">
                            <Link className="btn" style={{ "color": "green", "backgroundColor": "white","fontSize":"18px"}} to="/login" >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn" style={{ "color": "black", "backgroundColor": "#C3E2F5","fontSize":"18px"}} to="/SignUp" >SignUp</Link>
                        </li>
                       
                        
                    </ul>
                </div>
            </nav>
            

        </div>
    );
}

export default Home0;