import { Lista } from './style';

function ItemRepo({
  login,
  avatar_url,
  bio,
  name,
  public_repos,
  followers,
  following,
  html_url,
}) {
  return (
    <Lista>
      <h3>{name}</h3>
      <div>
        <img src={avatar_url} alt="" />
      </div>
      <p>{bio}</p>
      <a href={`https://github.com/${login}`} className="show" target='_blank'>
        Ver repositório
      </a>
      <a href="" className="remover">
        Remover
      </a>
      <ul>
        <li>Nome de usuário: {login}</li>
        <li>Seguidores: {followers}</li>
        <li>Seguindo: {following}</li>
        <li>Repositório: {public_repos}</li>
      </ul>
      <hr />
    </Lista>
  );
}

export default ItemRepo;
