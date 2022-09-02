/* Importing images and css files */
import '../styles/navigation/navigationLeft.css';
import iconMeditation from '../assets/iconMeditation.png';
import iconNatation from '../assets/iconNatation.png';
import iconVelo from '../assets/iconVelo.png';
import iconMusculation from '../assets/iconMusculation.png';


/**
 * Return React Component that display Navigation Left 
 * @returns React Component
 */
const navigationLeft = () => {
    return (
        <aside className="navigationLeft">
            <nav>
                <ul>
                    <li>
                        <img src={iconMeditation} alt="Méditation" />
                    </li>
                    <li>
                        <img src={iconNatation} alt="Natation" />
                    </li>
                    <li>
                        <img src={iconVelo} alt="Cyclisme" />
                    </li>
                    <li>
                        <img src={iconMusculation} alt="Musculation" />
                    </li>
                </ul>
            </nav>
            <p>Copiryght, SportSee 2020</p>
        </aside>
    );
};

export default navigationLeft;