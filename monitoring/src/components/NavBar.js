import styles from './NavBar.module.css'
import logoifmt from '../assets/img/ifmt.png'
function NavBar(){
    return (

        <div className={styles.navbar}>
                <h4>Monitoramento Industrial com Node-RED</h4>
                <img src={logoifmt} alt="IFMT LOGO" width="25" height="30"></img>
        </div>
    )

}


export default NavBar;