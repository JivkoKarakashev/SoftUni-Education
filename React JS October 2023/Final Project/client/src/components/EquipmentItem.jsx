/* eslint-disable react/prop-types */
import styles from "./DetailsPage.module.css";
import tooltipStyles from "./Tooltip.module.css";

const EquipmentItem = ({
    name,
    description,
    image
}) => {

    return (
        <li className={tooltipStyles["custom-tooltip"]}>
            <img className={`${tooltipStyles["facility-icon"]}`} src={image} />
            <span> {name}</span>
            {/* <ul> */}
                <p className={`${tooltipStyles["custom-tooltip-text"]}`}>{description}</p>
            {/* </ul> */}
        </li>
    );
};

export default EquipmentItem;