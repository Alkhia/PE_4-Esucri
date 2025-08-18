import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import React from 'react';
import CadastroAlunos from './CadastroAlunos/cadastroAlunos';
import CadastroEmpresas from "./CadastroEmpresas/cadastroEmpresas";

function App() {
  return (
    <div className="app-container">
  <h1>Bem-vindo!</h1>
  <Link to="/cadastroAlunos">
    <button className="btn">Cadastrar Alunos</button>
  </Link>
  <Link to="/cadastroEmpresas">
    <button className="btn">Cadastrar Empresas</button>
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
      </Routes>
    </Router>
  );
}


export default Cadastro;
