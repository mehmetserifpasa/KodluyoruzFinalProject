import React, { useState, useEffect } from "react"
import axios from "axios"
import hero_img from '../img/main-hero.svg'
import what_covid from '../img/what-covid.svg'



function Overview()
{
    const [Overviews, setOverview] = useState([])

    useEffect(() => {
        axios.get('data.json')
          .then(function ({data}) {
            setOverview(data[0].indexPage)
            console.log("Request ok! ", data)
          })
          .catch(function (error) {
            console.log("Request Found! ", error)
          })
      }, [])

      console.log(Overviews)

    return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row heros">
                    
                    <div className="col-12 col-md-6 col-lg-6 hero-width">
                        
                        <h1 className="hero__title">
                            <span className="hero__title--span">{Overviews.title}</span>
                            {Overviews.subtitle}
                        </h1>

                        <p className="hero__desc">
                          {Overviews.description}
                        </p>

                        <a className="button button-center" href="">Let Us Help</a>

                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="hero-image-width">
                            <img src={hero_img} alt="MAIN IMAGE"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="what-covid">
            <div className="container">
                <div className="row what-covid-box">
                    <div className="col-12 col-md-6 col-lg-6">
                        <figure className="what-covid__img">
                            <img src={what_covid} />
                        </figure>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <h2 className="what-covid__title">
                            {Overviews.title2}
                            <span className="what-covid__title--span">{Overviews.subtitle2}</span>
                        </h2>

                        <p className="what-covid__desc">
                          {Overviews.description2}
                        </p>

                        <a className="button " href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

    </>
)}

export default Overview;