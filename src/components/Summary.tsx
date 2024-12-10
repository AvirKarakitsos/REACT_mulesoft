import styles from "../assets/styles/Summary.module.css"

function Summary() {

  return (
    <div className={styles.container}>
        <h3 className={styles.title} >Dans cet article</h3>
        <ul className={styles.list}>
            <li  className={styles.item}><a className={styles.link} href="#intro">Introduction</a></li>
            <li  className={styles.item}><a className={styles.link} href="#spec">Specifications</a></li>
            <li  className={styles.item}><a className={styles.link} href="#imp">Implementation</a></li>
            <li  className={styles.item}><a className={styles.link} href="#manage">Gestion de l'API</a></li>
        </ul>
    </div>
  )
}

export default Summary