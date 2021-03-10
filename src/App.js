import './css/App.css';
import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header"
import Overview from "./components/Overview"
import Contagion from "./components/Contagion"
import Symptoms from "./components/Symptoms"
import Prevention from "./components/Prevention"
import Home from "./components/Home"




function App() {

  const [links, setLinks] = useState([])
  const [Contagions, setContagion] = useState([])
  const [Symptomss, setSymptoms] = useState([])
  const [Preventions, setPrevention] = useState([])


  useEffect(() => {
    axios.get('data.json')
      .then(function ({data}) {
        setLinks(data[0].headerLinks)
        setContagion(data[0].contagionPage)
        setSymptoms(data[0].setSymptoms)
        setPrevention(data[0].preventionPage)
        console.log("Request ok! ")
      })
      .catch(function (error) {
        console.log("Request Found! ", error)
      })
  }, [])


  return (
    <>
      <Router>
        
          <Header link={links} />

        <main>
          <Switch>
            <Route path="/Contagion" component={Contagion} />
            <Route path="/Symptoms" component={Symptoms} />
            <Route path="/Prevention" component={Prevention} />
            <Route path="/" component={Overview} />
          </Switch>
        </main>

        



      </Router>

    </>
  );
}

export default App;
