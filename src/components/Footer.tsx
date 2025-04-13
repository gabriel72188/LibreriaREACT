export const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6  mt-6 footer">
      <div className="container">
        <section
          id="redes-sociales"
          className="flex justify-center items-center gap-6">
          <a href="https://www.facebook.com/gabriel.monroyquiroz.5?locale=es_ES" aria-label="Facebook">
            <img
              src="/src/images/FB.png" alt="Facebook"
              loading="lazy"
              width="18"
              height="18"
            />
          </a>
          <a href="https://www.linkedin.com/in/gabrielmonroy1205/" aria-label="Linkedin">
            <img
              src="/src/images/LN.png" alt="Linkedin"
              loading="lazy" 
              width="18"
              height="18"
            />
          </a>
          <a href="https://www.instagram.com/gaabriel_xlz/" aria-label="IG">
            <img
              src="/src/images/IG.png" alt="IG"
              loading="lazy"
              width="18"
              height="18"
            />
          </a>
          <a href="https://www.youtube.com/channel/UChcnKkTEz7AAsFDIPm7N_yQ" aria-label="YouTube">
            <img
              src="/src/images/YT.png" alt="youtube" 
              loading="lazy"
              width="18"
              height="18"
            />
          </a>
        </section>
        <p className="mb-1">@Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
