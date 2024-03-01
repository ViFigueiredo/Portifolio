interface Rotas {
  nome: string;
  path: string;
}

export default () => {
  const rotas: Rotas[] = [
    { nome: 'Sobre', path: '/#aboutme' },
    { nome: 'Habilidades', path: '/#skills' },
    { nome: 'Projetos', path: '/#projects' },
  ];
  return rotas;
};
