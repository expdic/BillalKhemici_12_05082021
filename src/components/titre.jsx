import '../styles/components/titre.css';
import PropTypes from "prop-types";


/**
 * return React Component that display the title 
 * @param {string} userMainData the name of user
 * @return   React component
 */

function Titre(props) {

    const userMainData = props.userMainData;

    return (
        <div>

            <section className="Titre">
                <h1>
                    Bonjour<span> {userMainData}</span>
                </h1>
                <p>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>

            </section>

        </div>
    );
};

Titre.propTypes = {
    userMainData: PropTypes.string.isRequired,
};

export default Titre;