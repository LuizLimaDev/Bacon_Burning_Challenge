import logo from "assets/logo.png";

export default function Hero() {
  return (
    <section>
      <div className='flex justify-between items-center px-24 bg-yellow-100'>
        <div className='h-96'>
          <h1 className='text-5xl font-bold text-orange-200 mb-8'>
            Emagrecimento Consciente
          </h1>

          <p className=' mb-8 text-2xl font-semibold'>
            Você não é culpado(a) por não emagrecer!
          </p>

          <p className='w-heroTextDiv mb-24'>
            Desde pequeno somos ensinados a resolver tudo com comida. E isso
            cria os pensamentos &quot;Sabotadores&quot;, que são automáticos e
            nos impede de emagrecer.
          </p>

          <a
            href="#plan"
            className='button'
          >
            Participar
          </a>
        </div>

        <img
          src={logo}
          alt="logotipo do programa Bacon Burning Challenge"
          className='w-logoHero mb-4'
        />
      </div>
    </section>
  );
}