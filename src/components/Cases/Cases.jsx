import caseImg from 'assets/caseImg.jpeg'

export default function Cases() {
  return (
    <section>
      <div className="container-col-center py-12 px-4 md:py-16">
        <p
          className="title-box"
        >
          Emagrecer sem sofrimento!
        </p>

        <img
          src={caseImg}
          alt="resultado do emagrecimento"
          className='mb-10 lg:w-2/5 lg:h-caseImg xl:w-2/6 xl:h-96 desktop:w-1/3 desktop:max-w-md'
        />

        <p>
          Através da Neurociência do emagrecimento, transformamos nosso cérebro
          em um cérebro magro, tornando o emagrecimento fácil e sem dor!
        </p>
      </div>
    </section>
  )
}