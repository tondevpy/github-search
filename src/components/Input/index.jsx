import { InputContainer } from './style';

function Input({onClick, texto, onChange}) {
  return (
    <InputContainer>
      <input type="text" placeholder="Nome do repositório..." value={texto} onChange={onChange}/>
      <div className="button">
        <button onClick={onClick}>Buscar</button>
      </div>
    </InputContainer>
  );
}

export default Input;
