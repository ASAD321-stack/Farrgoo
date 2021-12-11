import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
// import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./home"

// import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import PersonIcon from '@material-ui/icons/Person';
// import PhoneIcon from '@material-ui/icons/Phone';

const RideDetails = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "", departure: "", destination: "", date: "", time: "", number: "", registration: "", meetupPoint: "", charges: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const check = async () => {
        try {
            const response = await fetch('/rideDetails', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await response.body;
            console.log("=============ads");
            console.log(data);

            if (response.status !== 200) {
                const error = new Error(response.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    useEffect(() => {
        check();
    });
    const PostData = async (e) => {
        e.preventDefault();
        const { userName, departure, destination, date, time, number, registration, meetupPoint, charges } = user;
        const res = await fetch('/rideDetails', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName, departure, destination, date, time, number, registration, meetupPoint, charges

            })
        });
        if (res.status === 422 || !res) {
            window.alert("please filled the required feild");
            console.log("Invalid Entry");
        }
        else {
            window.alert("Added");
            console.log("Registration successfull");
            navigate('/Ads');
        }

    }

    return (
        <div className="header">
            <HomePage />

            <div className="d-flex justify-content-center align align-content-md-center h-100">
                <div className="card" style={{"width":"500px"}}>
                    <div className="card-header">
                        <h2>Flight Details</h2>
                    </div>
                    <div className="card-body">
                        <form method="POST">
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PersonIcon /></span> */}
                                    </div>
                                    <input type="text" name="userName" id="userName" className="form-control" placeholder="username"
                                        value={user.userName}
                                        onChange={handleInputs}>
                                    </input>
                                </div>
                            </div>

                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PersonIcon /></span> */}
                                    </div>
                                    <input type="text" name="departure" id="departure" className="form-control" placeholder="Departure"
                                        value={user.departure}
                                        onChange={handleInputs}>
                                    </input>
                                </div>
                            </div>


                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><VpnKeyIcon /></span> */}
                                    </div>
                                    <input type="text" name="destination" id="destination" className="form-control"
                                        value={user.destination}
                                        onChange={handleInputs}
                                        placeholder="Destination"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><VpnKeyIcon /></span> */}
                                    </div>
                                    <input type="date" name="date" id="date" className="form-control"
                                        value={user.date}
                                        onChange={handleInputs}
                                        placeholder="date"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PhoneIcon /></span> */}
                                    </div>
                                    <input type="time" name="time" id="time" className="form-control"
                                        value={user.time}
                                        onChange={handleInputs}
                                        placeholder="Enter Phone Number"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PhoneIcon /></span> */}
                                    </div>
                                    <input type="Number" name="number" id="number" className="form-control"
                                        value={user.number}
                                        onChange={handleInputs}
                                        placeholder="Enter Phone Number"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PhoneIcon /></span> */}
                                    </div>
                                    <input type="text" name="registration" id="registration" className="form-control"
                                        value={user.registration}
                                        onChange={handleInputs}
                                        placeholder="registration Number"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PhoneIcon /></span> */}
                                    </div>
                                    <input type="text" name="meetupPoint" id="meetupPoint" className="form-control"
                                        value={user.meetupPoint}
                                        onChange={handleInputs}
                                        placeholder="Enter the Meetup Point"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text"><PhoneIcon /></span> */}
                                    </div>
                                    <input type="text" name="charges" id="charges" className="form-control"
                                        value={user.charges}
                                        onChange={handleInputs}
                                        placeholder="Enter the Charges"></input>
                                </div>
                            </div>
                            <div className="feilds">
                                <div className="form-group">
                                    <input style={{ "backgroundColor": "green", "color": "white", "marginTop": "10px" }} type="submit" name="upload" id="Upload" value="Upload"
                                        onClick={PostData}
                                        className="btn float-right login_btn"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default RideDetails;