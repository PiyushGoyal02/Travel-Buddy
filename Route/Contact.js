import React, { useState } from "react";
import light from '../Assets/Northernlight.webm'

import viedo from '../Assets/viedo.mp4'
import { TbWorldSearch } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import toast from "react-hot-toast";

function Contact(){

    const [formvalue,setformvalue] = useState({name:"", last:"", phone:"", number:"",
    email:"", address:"", adult:"", kids:"", pan:"", adhar:""})

    function SubmitHandler(e){
        e.preventDefault();
        toast.success("Confirm Your Details");
    }

    function ChangeHandler(event){
        setformvalue(preformvalue => {
            return{
                ...preformvalue,
                [event.target.name] : event.target.value
            }
        })
    }

    return (
        <div>

            <div className="NorthernlightViedo">
                <video className="NorthernlightLoop" muted autoPlay loop src={light}></video>
            </div>


            {/* Input Text */}

            <form onSubmit={SubmitHandler}>
                <div className="inputTagMainDiv">
  
                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Name</label>
                        <input value={formvalue.name} onChange={ChangeHandler} name="name" required className="inputtagplaceholder" type="text" placeholder="First Name"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Last</label>
                        <input value={formvalue.last} onChange={ChangeHandler} name="last" required className="inputtagplaceholder" type="text" placeholder="last Name"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Phone No.</label>
                        <input value={formvalue.phone} onChange={ChangeHandler} name="phone" required className="inputtagplaceholder" type="number" placeholder="Your Number"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Number</label>
                        <input value={formvalue.number} onChange={ChangeHandler} name="number" required className="inputtagplaceholder" type="number" placeholder="Additional Number"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Gmail</label>
                        <input value={formvalue.email} onChange={ChangeHandler} name="email" required className="inputtagplaceholder" type="email" placeholder="Your Mail"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Address</label>
                        <input value={formvalue.address} onChange={ChangeHandler} name="address" required className="inputtagplaceholder" type="text" placeholder="Your Address"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Adult</label>
                        <input value={formvalue.adult} onChange={ChangeHandler} name="adult" required className="inputtagplaceholder" type="number" placeholder="How Many Adult"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Kids</label>
                        <input value={formvalue.kids} onChange={ChangeHandler} name="kids" required className="inputtagplaceholder" type="number" placeholder="How Many Kids"></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Pan Card</label>
                        <input value={formvalue.pan} onChange={ChangeHandler} name="pan" required className="inputtagplaceholder" type="text" placeholder="Your Pan No."></input>
                    </div>

                    <div className="Single-Single-inputDiv">
                        <label className="labeltagHadingName">Adhar No.</label>
                        <input value={formvalue.adhar} onChange={ChangeHandler} name="adhar" required className="inputtagplaceholder" type="text" placeholder="Your Adhar No."></input>
                    </div>

                </div>

                <div className="NorthernlightSubmit">
                    <button>Submit</button>
                </div>
                
            </form>



            {/* Footer */}

            <div>
                <div>
                    <video className="StartingSeaSide" muted autoPlay loop src={viedo}></video>
                </div>



                <div className="keepit-travelwithus">
                    <p>Keep In Touch</p>
                    <h1>Travel with us</h1>
                </div>



                <div className="LastFooterBox">

                    <div className="TravelIcon-Hading">

                        <div className="LastFooterIconTravel">
                            <div className="WorldIcon"><TbWorldSearch /></div>
                            <span>Travel.</span>
                        </div>

                        <div className="footerHading">
                            <h4>OUR AGENCY</h4>
                            <h4>PARTNERS</h4>
                            <h4>LAST MINUTE</h4>
                        </div>
                    </div>


                    <div className="PG-Contant">
                    
                        <div className="loremText">
                            <p>
                                Travel isn't just about reaching a destination, it's about the journey that transforms us.
                                Explore, Dream, Discover. Let our travel experiences be your guide.
                                Life is an adventure - embrace it with every step you take.
                                Travel opens our minds, broadens our horizons, and fills our hearts with memories.
                            </p>
                        
                            <div className="Icons">
                                <p> <FaTwitter /> </p>
                                <p> <FaYoutube /> </p>
                                <p> <AiFillInstagram /> </p>
                                <p> <FaSnapchatSquare /> </p>
                            </div>

                        </div>


                        <div className="Footer-HadingTopics">

                            <div className="ouragency">
                                <p> <IoIosArrowForward /> Services </p>
                                <p> <IoIosArrowForward /> Insurance </p>
                                <p> <IoIosArrowForward /> Agency </p>
                                <p> <IoIosArrowForward /> Tourism </p>
                                <p> <IoIosArrowForward /> Payment </p>
                            </div>


                            <div className="ouragency">
                                <p> <IoIosArrowForward /> Booking </p>
                                <p> <IoIosArrowForward /> RentalCar </p>
                                <p> <IoIosArrowForward /> HostelWorld </p>
                                <p> <IoIosArrowForward /> Trivago </p>
                                <p> <IoIosArrowForward /> TripAdvisor </p>
                            </div>

                            <div className="ouragency">
                                <p> <IoIosArrowForward /> London </p>
                                <p> <IoIosArrowForward /> Califonia </p>
                                <p> <IoIosArrowForward /> Indonesia </p>
                                <p> <IoIosArrowForward /> Europe </p>
                                <p> <IoIosArrowForward /> Dubai </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact;