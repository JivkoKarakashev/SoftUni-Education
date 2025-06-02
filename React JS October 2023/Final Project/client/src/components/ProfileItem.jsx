/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Link } from "react-router-dom";

import { OwnerContext } from "../contexts/OwnerContext";

import styles from "./ProfilePage.module.css";

const ProfileItem = ({
    _id,
    _ownerId,
    make,
    model,
    year,
    location,
    image,
}) => {
    const { onDetailsClick } = useContext(OwnerContext);

    const detailsClickHandler = () => {
        onDetailsClick(_ownerId);
    };

    return (
        <div className={`${styles["item"]} ${styles["padded"]}`}>
            <main className={`${styles["item"]} ${styles["pad-large"]} ${styles["align-center"]}`}>
                <div className={styles["event-info"]}>
                    <div className={styles["left-wrapper"]}>
                        <img src={image} />
                    </div>
                    <div className={styles["right-wrapper"]}>
                        <h2>{make} - {model}</h2>
                        <h6>{location}</h6>
                        <h6>{year}</h6>
                        <div className={styles["button"]}>
                            <Link to={`/details/${_id}`} className={styles["action"]} onClick={detailsClickHandler}>Details</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileItem;