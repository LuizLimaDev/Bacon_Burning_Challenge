import user from 'assets/user.svg'
import group from 'assets/group.svg'

export default function Plans() {
  return (
    <section>
      <div className="container-col-center py-16 px-4">
        <p className="title-box">Os programas</p>

        <div className='lg:flex lg:flex-row lg:gap-32 lg:py-8'>
          <div className='flex gap-4 mb-6 lg:w-1/2'>
            <img
              src={user}
              alt="icone de programa individual"
              className='w-20'
            />

            <span className='flex flex-col items-end lg:items-start'>
              <h3 className='text-lg font-bold mb-2'>
                Individual
              </h3>
              <p className='mb-4 text-right lg:text-left'>
                Coaching de emagrecimento, atendimento personalizado para chegar em sua meta mais rápido.
              </p>
            </span>
          </div>

          <div className='flex flex-col lg:w-1/2'>
            <div className='flex gap-4'>
              <img
                src={group}
                alt="icone de programa individual"
                className='w-20 order-2 '
              />

              <div className='flex flex-col items-start'>
                <h3 className='text-lg font-bold mb-2'>Desafio em grupo</h3>
                <p className='mb-4 text-left'>
                  Desafio de 21 dias em grupo, aplicando as Ferramentas do &quot;Emagrecimento consciente&quot;              </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <a
            href="https://shortest.link/7cS0"
            className='button'
          >Em breve...</a>
        </div>

      </div >
    </section >
  )
}