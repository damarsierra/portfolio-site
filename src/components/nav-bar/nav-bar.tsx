import styles from './nav-bar.module.css'

const NAVLINKS: string[] = [
    "Home",
    "Variety", // GoSe, SVT Club, OFD
    "Music", // MVs, Concerts
    "Reality" // HTR, ITS, SVT Record
];

function NavBar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.primaryNavbar}>
                <div className={styles.navbarLogo}>
                    <img src="" alt="" />
                    SVTFLIX
                </div>
                <ul className={styles.navbarList}>
                    {NAVLINKS.map((link) =>
                        <li className={styles.navbarItem} key={link}><a href="/">{link}</a></li>
                    )}
                </ul>
                <div className={styles.secondaryNavBar}>
                    <div className={styles.secondaryElement}>s</div>
                    <div className={styles.secondaryElement}>v</div>
                    <div className={styles.secondaryElement}>t</div>
                </div>
            </div>
        </header>
    );
}

export default NavBar