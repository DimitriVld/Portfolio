import React from 'react';
import { Link } from "react-router-dom";

const UsSection = () => {
    return (
        <div className={"us-section container-dft"}>
            <div className="left-block">
                <h3><hr></hr>Our job</h3>
                <p>
                Our job is not to create pretty web concepts that are similar to
                you, our job is also to make sure your product is online is more
                efficient, secure and more scalable possible. Your product must
                convert. Your product must differentiate you. That's where we come
                in.
                </p>
            </div>
            <div className="right-block">
                <Link to={'/contact'}>
                    Contact us 
                    <img className="icon-arrow border-rounded-dft" src="./images/icon_arrow.svg" alt="Arrow" />
                </Link>
            </div>
        </div>
    );
}

export default UsSection;
