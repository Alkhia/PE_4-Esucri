import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroAlunos from "./CadastroAlunos/cadastroAlunos";
import CadastroEmpresas from "./CadastroEmpresas/cadastroEmpresas";
import AvaliacaoExperiencia from "./AvaliacaoDesempenho/avaliacao";
import CadastroEmpresas from "./CadastroEmpresas/cadastroEmpresas";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app-container">
      <h1>Bem-vindo!</h1>

      {/* Botão de Login */}
      <button className="btn" onClick={() => setIsLoginOpen(true)}>
        Login
      </button>

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Usuário" required />
              <input type="password" placeholder="Senha" required />
              <button type="submit">Entrar</button>
            </form>
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {/* Navegação */}
      <Link to="/cadastroAlunos">
        <button className="btn">Cadastrar Alunos</button>
      </Link>
      <Link to="/cadastroEmpresas">
        <button className="btn">Cadastrar Empresas</button>
      </Link>
      <Link to="/avaliacao">
        <button className="btn">Avaliação de Alunos</button>
      </Link>
      <Link to="/cadastroFuncionarios">
        <button className="btn">Cadastro de Funcionarios</button>
      </Link>
    </div>
  );
}

function Cadastro() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastroAlunos" element={<CadastroAlunos />} />
        <Route path="/cadastroEmpresas" element={<CadastroEmpresas />} />
        <Route path="/avaliacao" element={<AvaliacaoExperiencia />} />
      </Routes>
    </Router>
  );
}

export default Cadastro;
