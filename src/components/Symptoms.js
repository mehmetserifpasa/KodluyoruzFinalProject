import React, { useState, useEffect } from "react"
import axios from "axios"





function Symptoms()
{
    const [Symptomss, setSymptoms] = useState([])

    useEffect(() => {
        axios.get('data.json')
          .then(function ({data}) {
            setSymptoms(data[0].symptompsPage)
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
                <div className="mask-up">
                    <h1 className="mask__title">
                        <span className="mask__title--span">
                            {Symptomss.title}
                        </span>
                        What  should we do
                    </h1>
        
                     <p className="mask__desc">
                         {Symptomss.description}
                    </p>
                </div>
            </div>

        </section>
    
        </>

    )}

export default Symptoms