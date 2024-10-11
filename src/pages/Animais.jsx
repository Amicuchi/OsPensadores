import { useState, useEffect } from 'react';
import dataAnimais from '../data/dataAnimais';
import AnimaisDetalhe from '../components/AnimaisDetalhe';

function Animais() {
  const [indice, setIndice] = useState(0); // Estado para armazenar o índice do animal atual

  // Carregar o último acessado
  useEffect(() => {
    const ultimoAcessado = localStorage.getItem('ultimoAnimal'); // Tenta recuperar o último animal acessado
    if (ultimoAcessado) {
      // Se existir um índice no localStorage, converte para número e define o índice
      setIndice(Number(ultimoAcessado));
    } else {
      // Se não houver, inicia com o primeiro animal
      setIndice(0);
    }
  }, []);

  const handleProximo = () => {
    // Função para ir para o próximo animal
    const novoIndice = (indice + 1) % dataAnimais.length;
    setIndice(novoIndice);
    localStorage.setItem('ultimoAnimal', novoIndice);
  };

  const handleVoltar = () => {
    // Função para voltar para o animal anterior
    const novoIndice = (indice - 1 + dataAnimais.length) % dataAnimais.length;
    setIndice(novoIndice);
    localStorage.setItem('ultimoAnimal', novoIndice);
  };

  return (
    <AnimaisDetalhe
      animal={dataAnimais[indice]}
      onProximo={handleProximo}
      onVoltar={handleVoltar}
    />
  );
}

export default Animais;
