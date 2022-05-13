import propTypes from 'prop-types';
import './cart.css';

function Card({
  // je passe en props tous les éléments qui vont recevoir une valeur ds leur composant parent CartList
  repoLogo,
  titleRepo,
  subtitleRepo,
  descriptionRepo,
}) {
  return (
    <div className="container-repo">
      {/* je prépare mon composant Cart */}
      <img id="repo-img" src={repoLogo} alt="repo logo" />
      <h1>{titleRepo}</h1>
      <h2>{subtitleRepo}</h2>
      <p className="descriptionRepo">{descriptionRepo}</p>
    </div>
  );
}

Card.prototype = {
  titleRepo: propTypes.string.isRequired,
  repoLogo: propTypes.string.isRequired,
  subtitleRepo: propTypes.string.isRequired,
  descriptionRepo: propTypes.string.isRequired,
};

export default Card;
