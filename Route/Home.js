import React, { useEffect, useState } from "react";
import { LiaFilterSolid } from "react-icons/lia"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import video from '../Assets/video.mp4'
import toast from "react-hot-toast";
import { Product } from "../data";
import { CiLocationOn } from "react-icons/ci";
import { PiNotepad } from "react-icons/pi";
import viedo from '../Assets/viedo.mp4'
import { TbWorldSearch } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
// import Spinner from "../componants/Spinner";

function Home(){


    const [pricevalue,setpricevalue] =useState('5000');
    // const [loading,setloading] = useState(false)

    function ChangeHandler(event){
        setpricevalue(event.target.value)
    }

    const clickhandler = () => {
        toast.success('Congratulation')
    }

    // useEffect (()=> {
    //     setloading(true);
    //     setTimeout(()=>{
    //         setloading(false)
    //     },5000)
    // },[])

    return(
        <div>
            
            {/* Viedo Tag Ka saman */}

            <div className="ViedoPageWrapper">

                <div className="MainDivLoogViedo">
                    <video className="LoopViedo" muted autoPlay loop src={video}></video>
                </div>


                <div className="content-viedoText">

                    <div className="ApnaRajHai">
                        <h3 className="ourpackages"> OUR PACKAGES </h3>
                        <h1 className="searchyourhoiday"> Search your Holiday. </h1>
                    </div>

                    <div className="details-input-viedoPage">

                        <div>
                            <p>Search your destination.</p>
                            <input className="InputTagViedoPage" type="text" placeholder="Enter name Here... "></input>
                        </div>

                        <div>
                            <p>Search your date.</p>
                            <input className="InputTagViedoPage" type="date"></input>
                        </div>

                        <div>
                            <p className="MAXPRICE">MAX Price: <span>${pricevalue}</span> </p>
                            <input onChange={ChangeHandler} className="rangeInput" type="range" min="5000" max="150000" class="slider" step="2000" ></input>
                        </div>

                        <div className="MOREFILTERSdiv">
                            <button onClick={clickhandler} className="MOREFILTERS"> <LiaFilterSolid /> MORE FILTERS </button>
                        </div>

                    </div>

                    <div className="SocilIcons">
                        <p> <FaFacebookF /> </p>
                        <p> <FaInstagram /> </p>
                        <p> <FaXTwitter /> </p>
                    </div>
                
                </div>

            </div>



            {/* Tours Content */}

            <div className="TOURSJS">
                <h1 className="MOSTVISITED"> Most visited <span>destinations.</span></h1>

                <div className="All-ToursCards">
                    {
                        Product.map((value)=>{
                        return (
                            <div key={value.id} className="single-card">


                                <div>
                                    <img className="image" src={value.image}/>
                                </div>

                                <div className="name-counter-div">
                                    <h3>{value.naam}</h3>
                                    <p><CiLocationOn /> {value.country}</p>
                                </div>

                                <div className="Line"></div>

                                <div className="Amount-cultural">

                                    <div className="cultural-relax-button">
                                        <p>{value.cultural}</p>

                                        <div className="relex-button">
                                            <p>{value.relax}</p>
                                            <button>+1</button>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>${value.price}</h3>
                                    </div>

                                </div>

                                <div className="Line"></div>

                                <div>
                                    <p className="description">{value.description}</p>
                                </div>

                                <div>
                                    <button className="NotePadButton">{value.button} <PiNotepad /> </button>
                                </div>

                            </div>
                        )
                        })
                    }
                </div>

            </div>



            {/* Footer Section */}

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

export default Home;