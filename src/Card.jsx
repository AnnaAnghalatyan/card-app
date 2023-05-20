import PropTypes from 'prop-types';
import {CardItem, RemoveCardButton} from "./styles";

function Card({card, onDelete}) {
    return <CardItem>
        {card.number}
        <RemoveCardButton onClick={() => onDelete(card.id)}>x</RemoveCardButton>
    </CardItem>
}

Card.propTypes = {
    card: PropTypes.objectOf(PropTypes.any).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Card;