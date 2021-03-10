import React, { useState, useEffect } from "react"
import axios from "axios";
import contagion1 from '../img/contagion1.svg'
import contagion2 from '../img/contagion2.svg'
import contagion3 from '../img/contagion3.svg'




function Contagionss()
{

    const [Contagions, setContagions] = useState([])
    const [Overviews, setOverview] = useState([])


    useEffect(() => {
        axios.get('data.json')
          .then(function ({data}) {
            setContagions(data[0].contagionPage)
            setOverview(data[0].indexPage)
            console.log("Request ok! ")
          })
          .catch(function (error) {
            console.log("Request Found! ", error)
          })
      }, [])


    return (
    <>

    <section className="contagion">
            <div className="container">
                <div className="contagion-up">
                    <h1 className="contagion__title">
                        <span className="contagion__title--span">{Contagions.title}</span>
                            Contagion
                        </h1>
        
                        <p className="contagion__desc">
                            {Overviews.description2}

                        </p>
                </div>
                <div className="row card-box">
                    
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <figure className="card__img">
                                <img src={contagion1} alt="Transmission" />
                            </figure>
    
                            <h2 className="card__title">
                                {Contagions.cards[0].title}
                            </h2>
    
                            <p className="card__desc">
                            {Contagions.cards[0].description}
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">

                    <div className="card">
                        <figure className="card__img">
                            <img src={contagion2} alt="Transmission" />
                        </figure>

                        <h2 className="card__title">
                        {Contagions.cards[1].title}
                        </h2>

                        <p className="card__desc">
                            {Contagions.cards[1].description}
                    </p>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <figure className="card__img">
                            <img src={contagion3} alt="Transmission" />
                        </figure>

                        <h2 className="card__title">
                            {Contagions.cards[2].title}
                        </h2>

                        <p className="card__desc">
                        {Contagions.cards[1].description}                           
                        </p>
                    </div>
                    </div>


                </div>

            </div>
        </section>


    </>
)}

export default Contagionss;