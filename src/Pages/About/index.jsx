import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

const year = new Date().getFullYear();

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id="id-parent">
          <article>
            <h1 className="title is-1 is-spaced">Sobre Mim</h1>
            <br />
            <p className="subtitle is-5">
              {`Nasci em Barroso MG, tenho ${year - 1997} anos `}
               e estou estudando desenvolvimento web na Trybe. Aqui estou aprendendo ferramentas
               incríveis como
               React JS (Que foi usado para construir essa página), entre muitas outras stacks 
               muito legais!
               Antes de estudar na trybe eu estudava engenharia mecânica na UFSJ.
               Sempre adorei aprender coisas
               novas e principalmente ficar por dentro das novas tecnologias!
            </p>
            <p className="subtitle is-5">
              Me interesso muito por desenvolvimento web front-end e back-end, gosto de desafios
               que estimulam
              minha criatividade e que possam ser resolvidos em grupo. Amo viajar 
              e conhecer novas culturas, busco
              sempre novidades para conhecer e aprender. 
              Sou curioso e adoro conversar (Sério, sobre qualquer coisa!).
            </p>
            <p className="subtitle is-5">
              Já trabalhei com vendas, buffet entre outars áreas e agora estou me aventurando nas 
              infinitas
              possibilidades do mundo da tecnologia. Meus passatempos favoritos são jogar video-game,
               passear
              com o cachorro (Oque parece ser o passatempo favorito dela tambem :)) 
              e desenhar (Você pode conferir
              alguns dos meus rabiscos no meu Instagram, clicando em 'Contact').
            </p>
          </article>
          <aside>
            <img
              src="https://lh3.googleusercontent.com/eBcZq75HZHXY9tRqVHJPWZNv3pD91v8lunTzj4mLchxALYSOdVaxjCgoUyUPm-xDCvYOqGt2qKGSrBwbj3X2jnPpXRSwYUzEeCukMjLgs42Cy1ZQpTu0GaF7qINB3zdhMip7hYCl8P5cj1reNWKrntzaOSY1WjMdqFZtlKY3_Yqe5MRCghsVdy9aLPk5SqbtbEm6OkrdGO9Nno65RWXgNrIwjtj2lxeEYxaJu0oiES2l5PvqW9eM4oRA5UV6TRn2vN02uJShO6cBvqzJIi8-dX71d3oL2dzRG6Gaz14uP4ax8DJ1KXnHP1i7Fod-C0E7YdClZFLu_6HXyoV2SnnbDFG2iLuAWtBGH7vu_e7GoiL4PHdNzVeGSK7J-sZoaTtT4TUCb_Cacqt_Dh9SN85F4m6AmkLui4IqOD-NyDKMRpMA4EGncGYCy47jC1ILATzW_Tzm09MsUisb7vHLBDqn7uamg8mNzqpawLI1PHQY_nNS-BrptNAKnLNlJl1aaT-ld5SvqzltvTmMjrhIpmYFg8sj0pyrTAJCNmhhhA7kKhZg4xPhogJ7MFpyyZkWPBc0qZjfIVFAQDQUBoffpZ3l1M3QygcKIPiZv63Qxd37lg9lXP1bE96y29VPOLwNLiRm9s4ituO2XAVW4jQlvnUcet-K7pbEtn8T9eausWaUatvYXkqyag6-zv8ORsFLXAywQxR2XiXdy-sZMJby2REQEDw=s949-no?authuser=0"
              alt="Lucas Paz sorrindo."
            />
          </aside>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
