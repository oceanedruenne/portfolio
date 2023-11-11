export function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black">
        <div className="text-white text-2xl font-medium">Océane Druenne</div>
      </header>
      <main className="flex-1">
        <section
          className="w-full h-screen bg-center bg-cover"
          style={{
            backgroundImage: "https://i.ibb.co/jGqktzd/michael-d-rn-Kq-Wv-O80-Y4-unsplash.jpg",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <div className="text-center text-white p-10">
              <h1 className="text-4xl font-bold">Bienvenue sur mon portfolio !</h1>
              <p className="text-xl mt-4">Je vous souhaite une bonne visite sur mon site !</p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-white text-2xl font-bold mb-6">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="https://github.com/oceanedruenne/chess-game">
                <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Jeu d'échecs</h3>
                <p className="text-black dark:text-white mt-2">Jeu d'échecs réalisé durant ma deuxième année de BUT Informatique.</p>
                </div>
              </a>
              <a href="https://github.com/oceanedruenne/T3-Smart-Cities/tree/master">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Jeu sur les Smart Cities</h3>
                <p className="text-black dark:text-white mt-2">Jeu sérieux réalisé durant ma deuxième année de BUT Informatique.</p>
              </div>
              </a>
              <a href="https://oceanedruenne.github.io/etudeFibromyalgie/">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Site internet portant sur la fibromyalgie</h3>
                <p className="text-black dark:text-white mt-2">Site et étude réalisés par moi-même durant ma première année de BUT Informatique.</p>
              </div>
              </a>
              <a href="https://oceanedruenne.github.io/orthophonisteobernai/">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Site internet pour une orthophoniste</h3>
                <p className="text-black dark:text-white mt-2">Projet personnel portant sur la conception d'une maquette d'un site internet pour une orthophoniste.</p>
              </div>
              </a>
              <a href="https://oceanedruenne.github.io/coachstrasbourg/">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Site internet pour une coach en communication</h3>
                <p className="text-black dark:text-white mt-2">Réalisation d'un site vitrine pour une des intervenantes lors de ma remise à niveau au sein de l'UHA.</p>
              </div>
              </a>
              <a href="https://github.com/oceanedruenne/guild-wars-bot-nicho-discord">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-black dark:text-white text-xl font-bold mt-4">Réalisation d'un bot Discord</h3>
                <p className="text-black dark:text-white mt-2">Réalisation d'un bot Discord représentant un personnage du jeu Guild Wars qui répond à différentes commandes.</p>
              </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black h-14 flex items-center px-4 lg:px-6">
        <p className="text-white text-sm">© 2023 Océane Druenne</p>
      </footer>
    </div>
  )
}
