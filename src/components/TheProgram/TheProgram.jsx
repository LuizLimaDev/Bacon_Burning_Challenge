import Card from "./Card/Card";
import brainImg from "assets/brain.png";
import fireImg from "assets/fire-img.png";
import heartImg from "assets/heart-img.png";

export default function TheProgram() {
  return (
    <section id="theProgram">
      <div className="container-theProgram">
        <p className="mt-6 mb-3 text-base text-white font-semibold uppercase">
          Como funciona
        </p>
        <h3 className="text-2xl font-semibold text-black">
          Desafio de 21 dias!
        </h3>

        <div className="flex gap-28 px-36">
          <Card
            img={brainImg}
            title='Reeducação Cerebral'
            text='Você irá se tornar uma pessoa menos Ansiosa, compulsiva e não 
        "descontará mais suas emoções na comida".'
          />
          <Card
            img={fireImg}
            title='Queima de gordura'
            text='Este controle será adquirido através de "Ferramentas da 
            Neurociência", o processo de "Desinflamação do corpo" e fazendo o 
            seu corpo "acelerar a queima de gordura".'
          />
          <Card
            img={heartImg}
            title='Qualidade de vida'
            text='Você irá se tornar uma pessoa menos Ansiosa, compulsiva e não 
            "descontará mais suas emoções na comida".'
          />
        </div>
      </div>
    </section>
  );
}