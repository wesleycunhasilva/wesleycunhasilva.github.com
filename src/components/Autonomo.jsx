import React from 'react';
import { FaBolt, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Autonomo() {
  return (
    <section id="autonomo">
      <h2>Autônomo</h2>
      <motion.div 
        className="autonomo-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="autonomo-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="icone-autonomo">
            <FaBolt />
            <FaTools />
          </div>
          <h3>Eletricista Autônomo</h3>
          <p>Sou eletricista eletrotécnico autônomo, especializado em instalações elétricas residenciais e comerciais. Ofereço serviços de manutenção, reparos e instalações com segurança e qualidade.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}