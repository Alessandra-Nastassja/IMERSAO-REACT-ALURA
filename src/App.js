import React from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Caroussel from './components/Carousel';
import Footer from './components/Footer'

import dadosIniciais from './data/dados_iniciais.json';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O front"} />

      <Caroussel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]} />

      <Footer />

    </AppWrapper>
  );
}

export default App;
