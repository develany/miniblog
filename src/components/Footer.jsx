import styles from './Footer.module.css';

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>MiniBlog/<Link to={'https://github.com/develany'} target="_blank">develany</Link> &copy; 2023</p>
    </footer>
  )
}

export default Footer