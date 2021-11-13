import React from 'react';
import './App.css';
import ImagemPerfil from './img/img-perfil.jpg'
import ImagemDev from './img/download.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Luciano Ribeiro" 
          descricao="Olá, meu nome é Luciano! Sou estudante de Desenvolvimento Web Full Stack e também estou cursando Engenharia de Software."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div classname="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1636676341~hmac=f1e1c66f60788ac52665646094dafa58"
          legenda="Email:"
          texto=" exemplo@exemplo.com.br"        
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          legenda=" Endereço:"
          texto="Rua A, nº0"        
        />

      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemDev}
          nome="Joy-landing-page" 
          descricao="Desenvolver páginas landing pages!" 
        />
        
        <CardGrande 
          imagem="http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://wp.ufpel.edu.br/neai/files/2021/03/facebook-logo-2019-1597680-1350125.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
