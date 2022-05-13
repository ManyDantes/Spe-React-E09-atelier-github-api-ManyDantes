// == Import
import React, { useState, useEffect } from 'react';
import './stylesApp.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import CardList from '../CardList/CardList';
// import data from '../../data/repos';

// Import request axios
import { requestsGithub } from '../requests/request';

function App() {
  // J'utilise ces deux hooks pour stocker les infos de la requête soit datasRequest qui stocke tous les donnés de la requête (data.items)
  // et resultNumberRequest qui stocke le numbre de requêtes trouvées (data.total_count)
  const [datasRequest, setDatasRequest] = useState([]);
  const [resultNumberRequest, setResulNumberRequest] = useState(0);
  // J'utilise ce hook pour stocker et utiliser la valeur de l'input avec la const saveInputValue
  const [inputValue, setInputValue] = useState('');
  // J'utilise ce hook comme déclencheur de la requête, paramétré en false initialement, dés qu il est true alors la requête est lancée
  // il est paramétré true lorsque l'utilisateur appuie sur le bouton avec la const buttonPushed
  // je le réinitialise à false après que la requête soit lancée pour pouvoir le réutiliser (ligne 37)
  const [buttonRequest, setButtonRequest] = useState(false);

  const saveInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleLoadData = async () => {
    try {
      const dataGit = await requestsGithub(inputValue);
      const datas = dataGit.data.items;
      const numberOfReserachs = dataGit.data.total_count;
      setResulNumberRequest(numberOfReserachs);
      setDatasRequest(datas);
      setButtonRequest(false);
    }
    catch (err) {
      console.error(err);
    }
  };

  const buttonPushed = () => {
    setButtonRequest(true);
  };

  useEffect(() => {
    if (buttonRequest)handleLoadData();
  }, [buttonRequest]);

  return (
    <div className="app">
      <Header />
      <SearchBar
      // SearchBar comprend deux fonctions qui me permettent de remonter de l'info depuis les composants enfants vers App(valeur input + listener button)
      // manipulation de l'input
        handleInputChange={saveInputValue}
      // manipulation du button
        sendRequest={buttonPushed}
      />
      {/* uniquement de l'hydratation de composant à partir d'ici, mes deux premiers hooks distribuent leurs data sur ces deux composants */}
      <Message result={resultNumberRequest} />
      <CardList datas={datasRequest} />
    </div>
  );
}

// == Export
export default React.memo(App);
