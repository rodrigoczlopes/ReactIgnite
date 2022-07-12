import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';
import reactLogo from '../assets/react-icon.svg';

export function Header(){
  return(
    <header className={styles.header}>

      <img src={reactLogo} alt="Logotipo do Ignite" />

    <strong>Ignite Curse</strong>


    </header>
  );
}