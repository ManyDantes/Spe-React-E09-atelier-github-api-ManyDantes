import axios from 'axios';
// je prépare ma requête ds un fichier externe qui est exporté non par défault mais nommé
// inputValue est la valeur récupérée en paramètre depuis le composant App, représentant la valeur de l'input, il sera utilisé ds la requête
export async function requestsGithub(inputValue) {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${inputValue}`);
    console.log(response);
    return response;
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}
