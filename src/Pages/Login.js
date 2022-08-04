import React, { Fragment } from "react";
import "../Styles/loginpage.css"

const Login = () => {
    return (
        <Fragment>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card login_Card" >
                    <div className="card-body">
                        <h5 className="text-center me-2">Login</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
