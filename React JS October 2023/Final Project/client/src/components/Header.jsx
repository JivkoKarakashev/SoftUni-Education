import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../contexts/authContext';

import styles from './Header.module.css';

const Header = () => {
    const { user, hasUser, onLogout } = useContext(AuthContext);
    // console.log(user);
    // console.log(hasUser);

    const logoutHandler = async (e) => {
        e.preventDefault();
        try {
            await onLogout();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header>

            <div className={styles["title-logo-wrapper"]}>
                <Link to="/" className={styles["title-logo"]}>
                    <img src="/static/images/logo.jpg" />
                </Link>
                <span className={styles["title"]}>Car Marketplace</span>

                <span className={styles["welcome"]}>Welcome, {hasUser ? user.username : 'Guest'}</span>
            </div>

            {/* <!--Navigation--> */}
            <nav className={`${styles["main-nav"]} ${styles["nav-mid"]}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    {/* <!--Only users--> */}
                    {hasUser && (
                        <>
                            <li><Link to="/create">Publish</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/auth/logout" onClick={logoutHandler}>Logout</Link></li>
                        </>
                    )}
                    {/* <!--Only guest--> */}
                    {!hasUser && (
                        <>
                            <li><Link to="/auth/login">Login</Link></li>
                            <li><Link to="/auth/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;