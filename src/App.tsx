import './App.css'
import image_11 from './assets/images/schema_11.png'
import image_21 from './assets/images/schema_21.png'
import image_22 from './assets/images/schema_22.png'
import image_31 from './assets/images/schema_31.png'
import image_32 from './assets/images/schema_32.png'
import image_33 from './assets/images/schema_33.png'
import image_34 from './assets/images/schema_34.png'
import image_35 from './assets/images/schema_35.png'
import image_36 from './assets/images/schema_36.png'
import image_37 from './assets/images/schema_37.png'
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
          <img className='image' src={image_11} alt="cycle de vie d'une API"/>
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

      <p className='first-content'>C’est dans la partie Design Center de la plateforme d’Anypoint qu’on pourra écrire nos spécifications. Nous allons détailler l’architecture de notre API dans un fichier raml. Nous pouvons coder à la main ou utiliser l’aide fournie qui remplie le fichier à mesure qu’on sélectionne les différentes options (figure 2.1).</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_21} alt="Deux options pour créer notre fichier raml"/>
        </picture>
        <figcaption className='image-title'>2.1 - Deux options pour créer notre fichier raml</figcaption>
      </figure>
      <p className='content'>Dans ce fichier on écrit les différentes routes, on peut utiliser des types, fournir des exemples… Une fois le fichier complété, on peut le tester grâce à l’API console. L’option Mocking Service nous délivre une url afin de le tester sur des REST Client comme Postman.</p>
      <p className='content'>Une fois les tests passés avec succès, on peut publier notre fichier. On le retrouve dans la partie Exchange d’Anypoint. Dans cet onglet Exchange, on peut éditer la documentation de notre API afin d'écrire une description (figure 2.2).</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_22} alt="Onglet Exchange d'Anypoint"/>
        </picture>
        <figcaption className='image-title'>2.2 - Onglet Exchange d'Anypoint</figcaption>
      </figure>

      <h2 className='subtitle' id='imp'>L'implémentation</h2>

      <p className='first-content'><span className='weight'>Exemple 1.</span> Nous allons simplement construire l’API qui renvoie le message « Hello Mule » à une requête Get à l’adresse http::/localhost :8081/hellomule. Pour cela nous créons notre application Mule grâce à l’IDE Anypoint Studio, basé sur langage Java et le framework Eclipse. Sur la figure 3.1 est indiquée les différentes parties du projet.</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_31} alt="Projet Mule"/>
        </picture>
        <figcaption className='image-title'>3.1 - Projet Mule</figcaption>
      </figure>
      <p className='content'>On sélectionne un item dans la palette (par exemple l’élément Listener) et on le fait glisser dans le canvas. Un double clique sur l’élément nous montre les configurations à effectuer (indication du port, de la route). On construit par cette procédure de drag-and-drop un flux (Flow), c’est-à-dire un ensemble de composants Mule dans lequel une requête, un évènement est reçu et traité, voir figure 3.2.</p>
      <figure className='image-content'>
        <picture>
          <img className='image image-config' src={image_32} alt="Simple flux"/>
        </picture>
        <figcaption className='image-title'>3.2 - Simple flux</figcaption>
      </figure>
      <p className='content'>Il existe deux sortes de composants Mule. Dans notre exemple :</p>
      <ul>
        <li className='first-item'>Listener est appelé composant source, c’est le premier évènement du flux. Il reçoit un événement déclencheur, crée un événement Mule correspondant, et transmet cet événement qui sera traiter par le composant suivant du flux.</li>
        <li className='item'>Payload et Logger sont appelés composants processeurs, ils traitent l’évènement Mule.</li>
      </ul>
      <p className='content'>L'application Mule traduit notre flux en langage xml</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_33} alt="Le rendu xml"/>
        </picture>
        <figcaption className='image-title'>3.3 - Le rendu xml</figcaption>
      </figure>

      <p className='content'><span className='weight'>Exemple 2.</span> On souhaite construire un endpoint « /flights » où sera disponible les vols fournit par une base de donnée mySQL. On souhaite également modifier en sortie la structure des données.</p>
      <p className='content'>Le composant Select disponible dans Database permet de se connecter à une base donnée. On configure le composant afin d’utiliser mySQL (host, port, user, mot de passe). C’est dans la partie "query" qu’on peut écrire notre requête SQL afin de sélectionner tous les vols dans notre base de données.</p>
      <p className='content'>La deuxième étape est d’utiliser le composant Transform Message. On va pouvoir transformer la structure des données grâce à <span className='weight'>DataWeave</span>, qui un langage de programmation propre à Mulesoft. Ici on ne va pas coder à proprement parler avec DataWeave, mais on va utiliser son interface. Sur la figure3.4, on a pu transformer un objet Mule en un objet JSON en le précisant en sortie. </p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_34} alt="Interface de DataWeave"/>
        </picture>
        <figcaption className='image-title'>3.4 - Interface de DataWeave</figcaption>
      </figure>
      <p className='content'>Puis lorsqu’on définit une nouvelle structure de l’objet, on peut faire correspondre les différents champs. On obtient le résultat figure 3.5.</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_35} alt="Résultat final"/>
        </picture>
        <figcaption className='image-title'>3.5 - Résultat final</figcaption>
      </figure>

      <p className='content'>On peut renommer notre flux getFlights. Désormais pour ajouter une nouvelle ressource, il suffit de construire un nouveau flux. Par exemple pour obtenir un vol selon son identifiant, on copie colle notre premier flux getFlights (figure 3.6) puis il suffit d’ajuster les configurations des composants Listener (endpoint) et Select (requête et paramètre dans l’uri), voir figure 3.7 pour obtenir le résultat souhaité, qu’on nommera getFlightsById</p>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_36} alt="Les Deux flux getFlights et getFlightsById"/>
        </picture>
        <figcaption className='image-title'>3.6 - Les deux flux getFlights et getFlightsById</figcaption>
      </figure>
      <figure className='image-content'>
        <picture>
          <img className='image' src={image_37} alt="Paramètre pour le composant Select de getFlightsById"/>
        </picture>
        <figcaption className='image-title'>3.7 - Paramètre pour le composant Select de getFlightsById</figcaption>
      </figure>
    </div>
  )
}

export default App
