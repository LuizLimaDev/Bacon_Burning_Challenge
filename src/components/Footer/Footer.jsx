import logoCoach from "assets/logo_coach.png";
import whatsLogo from "assets/whatsapp-logo.png";
import instagramLogo from "assets/instagram-logo.png";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container-col-center py-9">
        <img
          src={logoCoach}
          alt="logo coach zicke"
          className="w-36 mb-2"
        />

        <p className="mb-5 text-xs">
          Profissional de Educação Física CREF 124276-G/SP
        </p>

        <div className="flex gap-4">
          <a href="https://api.whatsapp.com/send?phone=5514988116402&text=Ol%C3%A1,%0A%0AEu%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20%22Bacon%20Burning%20Challenge%22.%0A%0AObrigado(a)">
            <img src={whatsLogo} alt="logo whatsapp" />
          </a>

          <a href="https://www.instagram.com/bacon.burning/">
            <img src={instagramLogo} alt="logo instagram" />
          </a>
        </div>

      </div>
    </footer>
  );
}