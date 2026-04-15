import React from 'react';
import { SiOpenjdk, SiHtml5, SiCss, SiReact } from 'react-icons/si';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const habilidades = [
  { nome: 'Java', icone: <SiOpenjdk /> },
  { nome: 'HTML', icone: <SiHtml5 /> },
  { nome: 'CSS', icone: <SiCss /> },
  { nome: 'React', icone: <SiReact /> },
  { nome: 'Front End', icone: <FaCode /> },
  { nome: 'Back End', icone: <FaServer /> },
  { nome: 'Banco de Dados', icone: <FaDatabase /> }
];

export default function Habilidades() {
  return (
    <section id="habilidades">
      <h2>Habilidades</h2>
      <motion.div 
        className="habilidades-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {habilidades.map((habilidade, index) => (
          <motion.div 
            key={index} 
            className="habilidade-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icone">{habilidade.icone}</div>
            <p>{habilidade.nome}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}