import caseImg from "assets/caseImg.jpeg";

export default function Showcase() {
  return (
    <section>
      <div className='container-showcase'>
        <img
          src={caseImg}
          alt="imagem comparativa de emagrecimento"
          className='w-caseImg rounded-2xl mb-36'
        />

        <div className="mb-36">
          <p className='text-base uppercase text-orange-200 font-semibold mb-8'>
            Emagrecer sem sofrimento
          </p>

          <h3 className='text-3xl font-bold mb-8'>
            <span className='text-orange-200'>
              Desinflamar&nbsp;
            </span>
            para desinchar, acelerar para
            <span className='text-orange-200'>
              &nbsp;Emagrecer
            </span>
          </h3>

          <p className='text-xl'>
            Através da Neurociência do emagrecimento,
            transformamos nosso cérebro em um cérebro magro,
            tornando o emagrecimento fácil e sem dor!
          </p>
        </div>
      </div>
    </section>
  );
}