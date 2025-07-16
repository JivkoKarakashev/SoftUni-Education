import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        // <--Home Page-->
        <section id="home-section" className="">
            <h1 className={styles["item"]}>Car Marketplace</h1>
            <div className={styles["item"]}>
                <main className={`${styles["layout"]} ${styles["left"]} ${styles["med"]}`}>
                    <div className={styles["col"]}>
                        <img src="/static/images/logo.jpg" className={styles["img-med"]} />
                    </div>
                    <div className={`${styles["content"]} ${styles["pad-med"]}`}>
                        <p>Welcome to the best place where your old car can find a new owner or place where you can find your desired car!</p>
                        {/* <p>Quickly find your desired car at the largest European online Market!</p> */}
                        <div className={styles["align-center"]}>
                            <Link className={styles["action"]} to="/catalog">Catalog</Link>
                            <Link className={styles["action"]} to="/create">Publish Ad</Link>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default HomePage;