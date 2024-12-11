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

      <p className='content'>Mulesoft est une plateforme d’intégration qui permet de connecter des applications, des services grâce à l’utilisation d’API. Le but est de permettre à une entreprise d’améliorer la connexion de ses systèmes afin de gagner en rapidité, en productivité… A noter qu’en 2018, Mulesoft s’est fait racheté par le CRM Salesforce pour 6.5 milliards de dollars. Cela a permit à Salesforce de faciliter la connexion de son écosystème aux autres systèmes des entreprises (ERP, base de données…) et à Mulesoft d’élargir l’interconnexion entre différents services.</p>
      
      <h2 className='subtitle' id='intro'>Introduction</h2>
      <p className='first-content'>Pour améliorer cette connexion entre différents services, l’idée est de créer un ensemble de composants (d’API), appelé réseau d’applications, dont le but est de rendre ces composants réutilisables afin que le réseau d’applications soit le plus flexible possible. Ce dernier va être construit selon une architecture, appelée API-led connectivity, composée de trois couches d’API, où chacune d’elle va être modulable de telle sorte à rendre l’ensemble adaptable. Nous nous limiterons par la suite à la construction d’une API. </p>
      <p className='content'>La plateforme Mulesoft se nomme Anypoint Platform. Elle permet de concevoir une API dans sa globalité : de son design à sa mise en ligne et à sa gestion. Sur la figure 1.1 est indiquée les différentes étapes de la construction d’une API. Chaque cycle est composé de plusieurs phases :</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={cycle} alt="cycle de vie d'une API"/>
        </picture>
        <figcaption className='image-title'>1.1 - Cycle de vie d'une API</figcaption>
      </figure>
      <ul>
        <li className='first-item'>API Specifications : on design notre API à l’aide d’un fichier raml par exemple. On pourra le tester et l’intégrer lors de l’implémentation </li>
        <li className='item'>API Implementation : on code notre API à l’aide de l’IDE Anypoint Studio</li>
        <li className='item'>API Manager : on met en ligne notre API sur le service cloud Cloudhub, puis on gère notre API directement sur la pateforme.</li>
      </ul>
      <p className='content'>Nous commencerons donc l’étude par la première étape, les spécifications.</p>

      <h2 className='subtitle' id='spec'>Les Spécifications</h2>
      <p className='first-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic debitis sunt amet doloremque nihil repudiandae quis perspiciatis, dolorum quae soluta vel officiis cupiditate eos pariatur tenetur repellendus possimus repellat similique?</p>
    </div>
  )
}

export default App
