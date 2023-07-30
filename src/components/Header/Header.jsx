import logoCoach from "assets/logo_coach.png";

export default function Header() {
  return (
    <header>
      <div className='container-header'>
        <img
          src={logoCoach}
          alt="lotogipo coach zicke"
          className='w-36 relative right-96'
        />

        <ul className='flex gap-8 uppercase ml'>
          <li><a href="#theProgram">Desafio</a></li>
          <li><a href="#plan">Planos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}