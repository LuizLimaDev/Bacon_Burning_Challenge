import logo from 'assets/logo.png'

export default function Hero() {
  return (
    <header>
      <div className='container-col-center pt-4 pb-12 text-center'>
        <img
          src={logo}
          alt="logo Bacon Burning"
          className='w-52 mb-2'
        />

        <h1
          className='text-2xl font-bold'
        >
          Programa de emagrecimento consciente!
        </h1>
      </div>
    </header>
  )
}