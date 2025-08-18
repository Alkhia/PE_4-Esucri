export default function CadastroEmpresas() {
  return (
    <div style={styles.body}>
      <div className="container" style={styles.container}>
        <h2 style={styles.h2}>Cadastro de Empresas</h2>
        <form style={styles.form}>
          <label htmlFor="razaoSocial" style={styles.label}>
            Razão Social:
            <input type="text" id="razaoSocial" name="razaoSocial" required style={styles.inputText} />
          </label>

          <label htmlFor="nomeFantasia" style={styles.label}>
            Nome Fantasia:
            <input type="text" id="nomeFantasia" name="nomeFantasia" required style={styles.inputText} />
          </label>

          <label htmlFor="cnpj" style={styles.label}>
            CNPJ:
            <input type="text" id="cnpj" name="cnpj" required style={styles.inputText} />
          </label>

          <label htmlFor="ie" style={styles.label}>
            IE (Inscrição Estadual):
            <input type="text" id="ie" name="ie" required style={styles.inputText} />
          </label>

          <label htmlFor="endereco" style={styles.label}>
            Endereço:
            <input type="text" id="endereco" name="endereco" required style={styles.inputText} />
          </label>

          <label htmlFor="numeroContatoRh" style={styles.label}>
            Número para Contato RH:
            <input type="number" id="numeroContatoRh" name="numeroContatoRh" required style={styles.inputText} />
          </label>

          <label htmlFor="renda" style={styles.label}>
            Renda:
            <input type="number" id="renda" name="renda" required style={styles.inputText} />
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
