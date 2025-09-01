import './cadastroAlunos.css';
import { Link } from 'react-router-dom';

export default function CadastroAlunos() {
  return (
    <div className="cadastro-alunos-body">

      
      <Link to="/" className="cadastro-alunos-back">← Voltar</Link>

      <div className="cadastro-alunos-container">
        <h2 className="cadastro-alunos-title">Cadastro de Alunos</h2>

        <form className="cadastro-alunos-form">
          <label htmlFor="nome" className="cadastro-alunos-label">
            Nome:
            <input type="text" id="nome" name="nome" required className="cadastro-alunos-input" />
          </label>

          <label htmlFor="cpf" className="cadastro-alunos-label">
            CPF:
            <input type="text" id="cpf" name="cpf" required className="cadastro-alunos-input" />
          </label>

          <label htmlFor="Telefone" className="cadastro-alunos-label">
            Telefone
            <input type="number" id="Telefone" name="Telefone" required className="cadastro-Funcionario-input" />
          </label>

          <label htmlFor="endereco" className="cadastro-alunos-label">
            Endereço:
            <input type="text" id="endereco" name="endereco" required className="cadastro-alunos-input" />
          </label>

          <label htmlFor="dataNascimento" className="cadastro-alunos-label">
            Data de Nascimento:
            <input type="date" id="dataNascimento" name="dataNascimento" required className="cadastro-alunos-input" />
          </label>

          <label htmlFor="dataAdmissao" className="cadastro-alunos-label">
            Data de Admissão:
            <input type="date" id="dataAdmissao" name="dataAdmissao" required className="cadastro-alunos-input" />
          </label>

          <label htmlFor="funcao" className="cadastro-alunos-label">
            Função:
            <input type="text" id="funcao" name="funcao" required className="cadastro-alunos-input" />
          </label>

          <button type="submit" className="cadastro-alunos-button">Cadastrar</button>
        </form>
      </div>
      
    </div>

    
  );
}
