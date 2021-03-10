import mask1image from '../img/mask1-image.svg'
import mask2image from '../img/mask2-image.svg'
import mask3image from '../img/mask3-image.svg'
import mask4image from '../img/mask4-image.svg'

import mask1 from "../img/mask1.svg"
import mask2 from "../img/mask2.svg"
import mask3 from "../img/mask3.svg"
import mask4 from "../img/mask4-image.png"

import React, { useState, useEffect } from "react"
import axios from "axios"


function Preventions()
{

    const [Prevention, setPrevention] = useState([])
    
    useEffect(() => {
        axios.get('data.json')
          .then(function ({data}) {
            setPrevention(data[0].preventionPage)
            console.log("Request ok! ")
          })
          .catch(function (error) {
            console.log("Request Found! ", error)
          })
      }, [])


    return (
    <>
                <section className="mask">
            <div className="container">

                <div className="row row-mask">

                    <div className="col-12 col-md-6 col-lg-6">
                        
                        <span className="row-mask__span">
                            <img src={mask1} className="row-mask__span--int" alt="MASK" />
                             {Prevention[0]?.title}
                        </span>
                        
                        <p className="row-mask__desc">
                            {Prevention[0]?.description}
                        </p> 

                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="row-mask__img">
                            <img src={mask1image} alt="MASK-IMAGE" />
                        </figure>
                    </div>

                </div>

                <div className="row row-mask">

                    <div className="col-12 col-md-6 col-lg-6">
                        
                        <span className="row-mask__span">
                            <img src={mask2} className="row-mask__span--int" alt="MASK" />
                             {Prevention[1]?.title}
                        </span>
                        
                        <p className="row-mask__desc">
                            {Prevention[1]?.description}
                        </p> 

                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="row-mask__img">
                            <img src={mask2image} alt="MASK-IMAGE" />
                        </figure>
                    </div>

                </div>

                <div className="row row-mask">

                    <div className="col-12 col-md-6 col-lg-6">
                        
                        <span className="row-mask__span">
                            <img src={mask3} className="row-mask__span--int" alt="MASK" />
                             {Prevention[2]?.title}
                        </span>
                        
                        <p className="row-mask__desc">
                            {Prevention[2]?.description}
                        </p> 

                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="row-mask__img">
                            <img src={mask3image} alt="MASK-IMAGE" />
                        </figure>
                    </div>

                </div>

                <div className="row row-mask">

                    <div className="col-12 col-md-6 col-lg-6">
                        
                        <span className="row-mask__span">
                            <img src={mask4} className="row-mask__span--int" alt="MASK" />
                             {Prevention[3]?.title}
                        </span>
                        
                        <p className="row-mask__desc">
                            {Prevention[3]?.description}
                        </p> 

                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="row-mask__img">
                            <img src={mask4image} alt="MASK-IMAGE" />
                        </figure>
                    </div>

                </div>

                
            </div>
        </section>
    </>
)}

export default Preventions