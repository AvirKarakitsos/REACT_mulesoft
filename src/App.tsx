import './App.css'
import cycle from './assets/images/schema_11.png'
import Profil from './components/Profil'
import Summary from './components/Summary'
import { useEffect, useState } from "react"


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
      function handleWidth() {
          setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleWidth)

      return() => {
          window.removeEventListener("resize", handleWidth)
      }
  },[])


  return (
    <div className="main-container">
      <h1 className='title'>Découverte de Mulesoft</h1>
      
      <Profil/>

      {windowWidth > 1080 ? <Summary/> : null}

      <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit dolor! Consequatur, voluptatem. Natus minima, tenetur tempora provident excepturi facilis commodi ducimus doloribus, deleniti sint voluptatum? Fugiat optio veniam architecto?
      Eum ipsam quas voluptate asperiores sint ea vero consequuntur minima cumque rem quae officia, eaque necessitatibus esse ullam itaque voluptatibus nisi doloribus veritatis suscipit provident. Dolorum ipsum tenetur quidem enim.</p>
      
      <h2 className='subtitle' id='intro'>Introduction</h2>
      <p className='first-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat excepturi eos, sequi animi odit nihil sapiente quibusdam esse! At ipsum, hic ea atque velit ut ab sint totam adipisci.</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={cycle} alt="cycle de vie d'une API"/>
        </picture>
        <figcaption className='image-title'>Cycle de vie d'une API</figcaption>
      </figure>
      <p className='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat excepturi eos, sequi animi odit nihil sapiente quibusdam esse! At ipsum, hic ea atque velit ut ab sint totam adipisci.</p>
    </div>
  )
}

export default App
