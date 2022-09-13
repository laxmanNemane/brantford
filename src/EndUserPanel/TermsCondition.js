import axios from "axios";
import React, { useEffect, useState } from "react";

const BaseUrl = "http://bantford.prometteur.in"

const TermsCondition = () => {

    const [terms, setTerms] = useState();

    const getTerms = () => {
        axios.get(`${BaseUrl}/endUser/terms-conditions`,{headers: {
            Authorization: localStorage.getItem("token")
        }})
        .then((res)=>{
            console.log(res)
            setTerms(res.data)
        })
        .catch((err)=> {console.log(err)})
    }

    useEffect(()=>{
        getTerms()
    },[])


    return (
        <div className="terms-conditions-section">
            <div className="container">
                <div className="row py-5">
                    <h5 className="name ">Terms and Conditions &nbsp;:</h5>
                    <div className="col-12 ">
                        <div className="descriptive-term-conditions py-5">
                            <p className="little-description-brantford">Brantfordindia is a cloud-based application that facilitates discovery and use of professional workspaces (each, a “Professional Workspace”) for the working professional through https://Brantfordindia.com, or any other URL provided by Brantfordindia (collectively, the “Website”)or any other digital media platform accessed by its users (the “Platform” and together with the Website, the “Brantfordindia Service”).

                                PLEASE READ THE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING ANY PART OF THE Brantfordindia SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND TO ALL THE TERMS OF THE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, EXIT THIS PAGE AND DO NOT ACCESS OR USE THE Brantfordindia SERVICE. USE OF THE Brantfordindia SERVICE IS EXPRESSLY CONDITIONED UPON YOUR ACCEPTANCE OF THE TERMS OF SERVICE. If you are under the age of 18, you represent that you have the consent of a parent or legal guardian to use and access the Brantfordindia Service.</p>
                            <p><span className="fw-bold">Updates to Terms of Service, Integration :</span>   We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Brantfordindia Service. The “Last Updated” date at the top the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Brantfordindia Service, you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications. We recommend that you review the Terms of Service prior to each use of the Brantfordindia Service. In addition, when using particular services or features on the Brantfordindia Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.
                            </p>

                            <p><span className="fw-bold">Updates to Terms of Service, Integration :</span>   We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Brantfordindia Service. The “Last Updated” date at the top the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Brantfordindia Service, you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications. We recommend that you review the Terms of Service prior to each use of the Brantfordindia Service. In addition, when using particular services or features on the Brantfordindia Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.
                            </p>

                            <p><span className="fw-bold">Updates to Terms of Service, Integration :</span>   We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Brantfordindia Service. The “Last Updated” date at the top the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Brantfordindia Service, you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications. We recommend that you review the Terms of Service prior to each use of the Brantfordindia Service. In addition, when using particular services or features on the Brantfordindia Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.
                            </p>
                            <p><span className="fw-bold">Updates to Terms of Service, Integration :</span>   We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Brantfordindia Service. The “Last Updated” date at the top the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Brantfordindia Service, you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications. We recommend that you review the Terms of Service prior to each use of the Brantfordindia Service. In addition, when using particular services or features on the Brantfordindia Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.
                            </p>
                            <p><span className="fw-bold">Updates to Terms of Service, Integration :</span>   We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Brantfordindia Service. The “Last Updated” date at the top the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Brantfordindia Service, you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications. We recommend that you review the Terms of Service prior to each use of the Brantfordindia Service. In addition, when using particular services or features on the Brantfordindia Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
