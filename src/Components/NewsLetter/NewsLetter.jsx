import React from "react";
import './NewsLetter.css'
 
const NewsLetter=() =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers on your Email</h1>
            <p>Subscribe Now and stay Updated!</p>
            <div>
                <input type="email" placeholder="Your Email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter