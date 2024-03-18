import Logo from './assets/logo.png';
import { Container } from './App_style';
import Input from './components/Input';
import ItemRepo from './components/ItemRepo';
import { useState } from 'react';
import api from './services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  async function consumir() {
    try {
      const response = await api.get(`/${username}`);
      setRepos([response.data]);
      console.log(response.data); 
    } catch (error) {
      setError(`Erro ao buscar repositórios: ${error.message}`);
    }
  }

  function handleClick() {
    setError(null); 
    consumir(); 
  }

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <Container>
      <img src={Logo} alt="Logo github" width={72} height={72} />
      <Input
        onClick={handleClick}
        texto={username}
        onChange={handleInputChange}
      />
      {error &&  <div> <br /> <br /><br /><br /><br /><p>{error} <a href="">Retornar</a></p></div>}
      {repos.length > 0 && (
        <ul>
          {repos.map((repo) => (
            <ItemRepo
              key={repo.id}
              avatar_url={repo.avatar_url}
              name={repo.name}
              url={repo.html_url}
              bio={repo.bio}
              login={repo.login}
              followers={repo.followers}
              following={repo.following}
              public_repos={repo.public_repos}
            />
          ))}
        </ul>
      )}
    </Container>
  );
}

export default App;
