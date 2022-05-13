import './message.css';
import propTypes from 'prop-types';

// hydratation de composant classique ici avec la props result qui représente le nbre de recheches
function Message({
  result,
}) {
  return (
    <div id="message"> La recherche a donné {result} résultats</div>
  );
}

Message.prototype = {
  result: propTypes.number.isRequired,
};

export default Message;
