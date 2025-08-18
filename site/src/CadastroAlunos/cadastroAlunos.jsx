export default function CadastroAlunos() {
  return (
    <div style={styles.body}>
      <div className="container" style={styles.container}>
        <h2 style={styles.h2}>Cadastro de Alunos</h2>
        <form style={styles.form}>
          <label htmlFor="nome" style={styles.label}>
            Nome:
            <input type="text" id="nome" name="nome" required style={styles.inputText} />
          </label>

          <label htmlFor="cpf" style={styles.label}>
            CPF:
            <input type="text" id="cpf" name="cpf" required style={styles.inputText} />
          </label>

          <label htmlFor="nomeMae" style={styles.label}>
            Nome da Mãe:
            <input type="text" id="nomeMae" name="nomeMae" required style={styles.inputText} />
          </label>

          <label htmlFor="nomePai" style={styles.label}>
            Nome do Pai:
            <input type="text" id="nomePai" name="nomePai" style={styles.inputText} />
          </label>

          <label htmlFor="numeroResponsavel" style={styles.label}>
            Número do Responsável:
            <input type="number" id="numeroResponsavel" name="numeroResponsavel" required style={styles.inputText} />
          </label>

          <label htmlFor="endereco" style={styles.label}>
            Endereço:
            <input type="text" id="endereco" name="endereco" required style={styles.inputText} />
          </label>

          <label htmlFor="dataNascimento" style={styles.label}>
            Data de Nascimento:
            <input type="date" id="dataNascimento" name="dataNascimento" required style={styles.inputText} />
          </label>

          <label htmlFor="dataAdmissao" style={styles.label}>
            Data de Admissão:
            <input type="date" id="dataAdmissao" name="dataAdmissao" required style={styles.inputText} />
          </label>

          <label htmlFor="dataDesligamento" style={styles.label}>
            Provável Data de Desligamento:
            <input type="date" id="dataDesligamento" name="dataDesligamento" style={styles.inputText} />
          </label>

          <label htmlFor="trabalha" style={{ ...styles.label, flexDirection: "row", alignItems: "center" }}>
            <input type="checkbox" id="trabalha" name="trabalha" style={styles.checkbox} />
            Trabalha
          </label>

          <label htmlFor="funcao" style={styles.label}>
            Função:
            <input type="text" id="funcao" name="funcao" required style={styles.inputText} />
          </label>

          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    minHeight: "100vh",
  },
  container: {
    background: "white",
    padding: "20px 30px",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  h2: {
    textAlign: "center",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: "14px",
  },
  inputText: {
    marginTop: "6px",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  checkbox: {
    marginTop: "0",
    marginRight: "8px",
    width: "18px",
    height: "18px",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
