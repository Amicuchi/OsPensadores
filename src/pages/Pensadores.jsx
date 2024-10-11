import { useState, useEffect } from 'react';
import dataPensadores from '../data/dataPensadores';
import PensadoresDetalhe from '../components/PensadoresDetalhe';

function Pensadores() {
  const [indice, setIndice] = useState(0); // Estado para armazenar o índice do pensador atual

  // Carregar o último acessado
  useEffect(() => {
    const ultimoAcessado = localStorage.getItem('ultimoPensador'); // Tenta recuperar o último pensador acessado
    if (ultimoAcessado) {
      // Se existir um índice no localStorage, converte para número e define o índice
      setIndice(Number(ultimoAcessado));
    } else {
      // Se não houver, inicia com o primeiro pensador
      setIndice(0);
    }
  }, []);

  const handleProximo = () => {
    // Função para ir para o próximo pensador
    const novoIndice = (indice + 1) % dataPensadores.length;
    setIndice(novoIndice);
    localStorage.setItem('ultimoPensador', novoIndice); // Salva o novo índice no localStorage
  };

  const handleVoltar = () => {
    // Função para voltar para o pensador anterior
    const novoIndice = (indice - 1 + dataPensadores.length) % dataPensadores.length;
    setIndice(novoIndice);
    localStorage.setItem('ultimoPensador', novoIndice); // Salva o novo índice no localStorage
  };

  return (
    <PensadoresDetalhe
    pensador={dataPensadores[indice]}
      onProximo={handleProximo}
      onVoltar={handleVoltar}
    />
  );
}

export default Pensadores;
