import PropTypes from "prop-types";


/**
 * @param {string} icoun the icon of the card
 * @param {number} count number of grams / calories 
 * @param {string} unite g or calories of count 
 * @param {string} type type of nutrition
 * @returns Card react component 
 */
function Card(props) {
    const icon = props.icon;
    const count = props.count;
    const unite = props.unite;
    const type = props.type;

    return (
        <div>
            <div className="cardicondiv">
                <img src={icon} alt={type} />
            </div>
            <div>
                <div className="cardcountaunit">{count}{unite}</div>
                <div className="cardtype">{type}</div>
            </div>
        </div >
    );
}



Card.propTypes = {
    icon: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    unite: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Card;