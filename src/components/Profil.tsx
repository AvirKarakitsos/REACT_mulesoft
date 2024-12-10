import profil from "../assets/images/profil.jpg"
import styles from "../assets/styles/Profil.module.css"

function Profil() {

  return (
    <div className={styles.container}>
        <img src={profil} alt="profil photo" className={styles.profile}/>
        <div className={styles.content}>
            <div>
                <span className={styles.style1}>Arno Cotsoyannis </span>
                <span className={styles.style2}>- Suivre</span>
            </div>
            <span className={styles.style2}>lecture 10 min - Dec 2024</span>
        </div>
    </div>
  )
}

export default Profil
