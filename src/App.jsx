import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import Habilidades from './components/Habilidades';
import Autonomo from './components/Autonomo';
import './index.css'; 
import fotoPerfil from './assets/perfil.jpg';

const meusProjetos = [
  { id: 1, titulo: "Projeto 01 - E-commerce", descricao: "Uma loja virtual feita com HTML, CSS e JavaScript.", link: "https://github.com/wesleycunhasilva" },
  { id: 2, titulo: "Projeto 02 - Portfólio", descricao: "Meu portfólio de apresentação feito com tecnologias modernas", link: "https://github.com/wesleycunhasilva" },
  { id: 3, titulo: "Projeto 03 - Registro de Ponto", descricao: "Sistema web para registrar o ponto dos funcionários das empresas.", link: "https://github.com/wesleycunhasilva" }
];

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  return (
    <div className={`${temaEscuro ? 'dark-theme' : ''}`} style={{ minHeight: '100vh' }}>
      <header>
        <h1>Meu Portfólio</h1>
          <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#autonomo">Autônomo</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li>
                  <button id="btn-tema" onClick={alternarTema}>
                    {temaEscuro ? 'Claro' : 'Escuro'}
                  </button>
                </li>
            </ul>
        </nav>
      </header>

      <main>
        
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <img src={fotoPerfil} alt="Foto de Wesley Cunha" />
            <p>Sou Wesley Cunha, tenho 33 anos, sou formando em Sistemas para Internet pela UESPI, também sou eletricista eletrotécnico autônomo. Sou apaixonado pela programação,
              e por energia. .</p>
        </section>

        <Autonomo />

        <Habilidades />

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">            
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>
        
        <section id="contato">
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input 
                id="nome" 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="campo">
              <label htmlFor="msg">Mensagem:</label>
              <textarea 
                id="msg" 
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Wesley Cunha </p>
      </footer>
    </div>
  );
}

export default App;