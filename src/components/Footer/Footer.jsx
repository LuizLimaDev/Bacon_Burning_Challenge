import logoCoach from 'assets/logo_coach.png'
import whatsappLogo from 'assets/whatsapp_logo.svg'
import instagramLogo from 'assets/instagram_logo.svg'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-around bg-orange py-6 px-4">
        <img
          src={logoCoach}
          alt="logo coach zicke"
          className='w-48 h-20 lg:w-44'
        />

        <div className='flex flex-col items-center gap-2 text-center'>
          <p className='text-sm font-bold'>
            Programa de emagrecimento
            <p className='text-red-300 whitespace-pre-wrap'>
              Bacon Burning&copy;
            </p>
          </p>

          <div className='flex gap-6'>
            <a href="https://shortest.link/7cgs">
              <img
                src={whatsappLogo}
                alt="icone whats app"
                className='w-7'
              />
            </a>

            <a href="https://www.instagram.com/bacon.burning/">
              <img
                src={instagramLogo}
                alt="icone instagram"
                className='w-7'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}