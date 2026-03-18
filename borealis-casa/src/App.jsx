import { useEffect, useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsHeaderSolid(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll)
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  const navLinks = [
    { href: '#majoitus', label: 'Majoitus' },
    { href: '#elamykset', label: 'Elamykset' },
    { href: '#vieraskirja', label: 'Vieraskirja' },
    { href: '#varaus', label: 'Varaus' },
  ]

  const suites = [
    {
      title: 'Metsa Atelier -sviitti',
      text: 'Vaalea puu, oma sauna ja rauhallinen tunnelma kahdelle.',
      price: 'Alkaen 420 EUR / yo',
      image: '/images/accommodation/IMGP2674.jpg',
    },
    {
      title: 'Revontuli Loft',
      text: 'Korkea tila, luonnonvalo ja pehmeat tekstiilit viikonloppupakoon.',
      price: 'Alkaen 510 EUR / yo',
      image: '/images/accommodation/IMGP2697.jpg',
    },
    {
      title: 'Fjordi Residence',
      text: 'Tilava kahden makuuhuoneen huoneisto perheille ja pidempiin vierailuihin.',
      price: 'Alkaen 690 EUR / yo',
      image: '/images/accommodation/IMGP2674.jpg',
    },
  ]

  const moments = [
    {
      title: 'Sauna & talviuinti',
      text: 'Lampo ja raikas ulkoilma yhdistyvat ohjatussa hyvinvointirituaalissa.',
      image: '/images/activities/IMGP2304.jpg',
    },
    {
      title: 'Metsareitti ja nuotioilta',
      text: 'Paikallisen oppaan kanssa hiljaisiin metsiin ja avotulen aareen.',
      image: '/images/activities/IMGP2591.jpg',
    },
    {
      title: 'Revontuliretki',
      text: 'Yksityinen kuljetus pimean taivaan alueelle kuuman juoman kanssa.',
      image: '/images/activities/IMGP2602.jpg',
    },
  ]

  const notes = [
    {
      name: 'Aino & Ville, Tampere',
      quote: 'Rauha oli kasinkosketeltavaa. Jokainen yksityiskohta tuntui harkitulta.',
      image: '/images/guestbook/kuva1.jpg',
      tilt: '-rotate-2',
    },
    {
      name: 'Laura, Turku',
      quote: 'Tyylikas mutta aidon kodikas. Tanne on helppo palata.',
      image: '/images/guestbook/kuva2.jpg',
      tilt: 'rotate-2',
    },
    {
      name: 'Mikko & Salla, Oulu',
      quote: 'Aamupala ikkunan aarella ja luminen maisema olivat taydellinen yhdistelma.',
      image: '/images/guestbook/kuva3.jpg',
      tilt: '-rotate-1',
    },
    {
      name: 'Heli, Helsinki',
      quote: 'Modernia luksusta ilman turhaa prameilua. Juuri sopiva tunnelma.',
      image: '/images/guestbook/kuva4.jpg',
      tilt: 'rotate-1',
    },
  ]

  return (
    <div
      className="bg-[#F9F9F9] text-[#2D4033]"
      style={{
        fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
      }}
    >
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isHeaderSolid
            ? 'border-b border-[#2D4033]/10 bg-[#F9F9F9]/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#koti"
            className="text-lg tracking-[0.18em] text-[#2D4033] uppercase"
            style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
          >
            Borealis Casa
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.1em] text-[#2D4033]/75 uppercase transition hover:text-[#2D4033]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#varaus"
              className="rounded-full bg-[#2D4033] px-5 py-2.5 text-xs tracking-[0.12em] text-[#F9F9F9] uppercase transition hover:bg-[#1f2c23]"
            >
              Varaa
            </a>
          </nav>

          <button
            type="button"
            aria-label="Avaa valikko"
            className="inline-flex rounded-full border border-[#2D4033]/30 p-2 text-[#2D4033] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu size={20} />
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[#2D4033]/10 bg-[#F9F9F9] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm tracking-[0.08em] text-[#2D4033] uppercase transition hover:bg-[#EDE7DD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="koti" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src="/images/hero/IMGP1745.jpg"
          alt="Borealis Casan talvinen maisema"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D4033]/30 via-[#2D4033]/35 to-[#2D4033]/70" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl rounded-3xl border border-white/30 bg-[#F9F9F9]/20 p-8 shadow-2xl backdrop-blur-md sm:p-10"
          >
            <p className="mb-4 text-xs tracking-[0.22em] text-[#F9F9F9]/90 uppercase">
              Boutique-majoitus Oulussa
            </p>
            <h1
              className="text-4xl leading-tight text-[#F9F9F9] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
            >
              Hiljaista luksusta pohjoisen luonnon keskella
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#F9F9F9]/90 sm:text-lg">
              Borealis Casa yhdistaa skandinaavisen muotoilun, lampiman palvelun ja
              luonnon rauhan yhdeksi kokonaisuudeksi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#varaus"
                className="rounded-full bg-[#F9F9F9] px-6 py-3 text-xs tracking-[0.12em] text-[#2D4033] uppercase transition hover:bg-[#ECE8DF]"
              >
                Suunnittele vierailu
              </a>
              <a
                href="#majoitus"
                className="rounded-full border border-[#F9F9F9]/70 px-6 py-3 text-xs tracking-[0.12em] text-[#F9F9F9] uppercase transition hover:bg-[#F9F9F9]/10"
              >
                Tutustu huoneisiin
              </a>
            </div>
          </motion.div>

          <motion.a
            href="#majoitus"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
            className="mt-12 inline-flex items-center gap-2 text-sm tracking-[0.14em] text-[#F9F9F9] uppercase"
          >
            Selaa alas
            <ChevronDown size={18} />
          </motion.a>
        </div>
      </section>

      <main>
        <section id="majoitus" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs tracking-[0.2em] text-[#2D4033]/70 uppercase">
                  Majoitus
                </p>
                <h2
                  className="max-w-2xl text-3xl leading-tight text-[#2D4033] sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
                >
                  Sviitit, joissa puu, kivi ja pehmea valo kohtaavat
                </h2>
              </div>
              <a
                href="#varaus"
                className="rounded-full border border-[#2D4033]/20 px-5 py-2.5 text-xs tracking-[0.12em] text-[#2D4033] uppercase transition hover:border-[#2D4033]"
              >
                Tarkista saatavuus
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {suites.map((suite) => (
                <article
                  key={suite.title}
                  className="group overflow-hidden rounded-3xl border border-[#2D4033]/10 bg-[#F5F2EA] transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img src={suite.image} alt={suite.title} className="h-48 w-full object-cover" />
                  <div className="p-7">
                    <h3
                      className="text-2xl leading-tight text-[#2D4033]"
                      style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
                    >
                      {suite.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#2D4033]/80">{suite.text}</p>
                    <p className="mt-8 text-xs tracking-[0.12em] text-[#2D4033] uppercase">
                      {suite.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="elamykset" className="bg-[#2D4033] py-24 text-[#F9F9F9]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-[#F9F9F9]/75 uppercase">
                Elamykset
              </p>
              <h2
                className="text-3xl leading-tight sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
              >
                Pohjoisen rytmiin suunnitellut hetket
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#F9F9F9]/85">
                Jokainen vierailu suunnitellaan toiveidesi mukaan, jotta saat juuri
                sopivan yhdistelman lepoa, makuelamyksia ja luonnossa liikkumista.
              </p>
            </div>
            <div className="space-y-4">
              {moments.map((moment) => (
                <div
                  key={moment.title}
                  className="overflow-hidden rounded-2xl border border-[#F9F9F9]/15 bg-white/5 transition hover:bg-white/10"
                >
                  <img src={moment.image} alt={moment.title} className="h-36 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg">{moment.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#F9F9F9]/80">{moment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vieraskirja" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#2D4033]/70 uppercase">
              Vieraskirja
            </p>
            <h2
              className="text-3xl leading-tight text-[#2D4033] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
            >
              Muistoja vierailta, jotka loysivat oman talvikeitaansa
            </h2>

            <motion.div
              drag="x"
              dragConstraints={{ left: -900, right: 0 }}
              className="mt-12 flex cursor-grab gap-6 overflow-hidden active:cursor-grabbing"
              whileTap={{ cursor: 'grabbing' }}
            >
              {notes.map((note) => (
                <motion.article
                  key={note.name}
                  whileHover={{ y: -8, rotate: 0 }}
                  className={`${note.tilt} min-w-[270px] max-w-[290px] rounded-sm bg-[#FFFDF8] p-4 shadow-[0_20px_36px_-20px_rgba(20,34,26,0.45)] sm:min-w-[320px]`}
                >
                  <img
                    src={note.image}
                    alt={note.name}
                    className="h-56 w-full rounded-sm object-cover"
                    draggable="false"
                  />
                  <p className="mt-4 text-sm leading-7 text-[#2D4033]/85">"{note.quote}"</p>
                  <p className="mt-4 text-xs tracking-[0.08em] text-[#2D4033] uppercase">
                    {note.name}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="varaus" className="bg-[#EDE7DD] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-[#2D4033]/70 uppercase">
                Varaus
              </p>
              <h2
                className="text-3xl leading-tight text-[#2D4033] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}
              >
                Kerro toiveesi, me rakennamme valmiin vierailun
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-8 text-[#2D4033]/80">
                Jata paivamaarat ja toiveet, niin viimeistelemme sinulle
                rauhallisen, korkeatasoisen kokonaisuuden.
              </p>
            </div>

            <form className="rounded-3xl bg-[#F9F9F9] p-6 shadow-lg sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nimi"
                  className="rounded-xl border border-[#2D4033]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2D4033]/40"
                />
                <input
                  type="email"
                  placeholder="Sahkoposti"
                  className="rounded-xl border border-[#2D4033]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2D4033]/40"
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  className="rounded-xl border border-[#2D4033]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2D4033]/40"
                />
                <input
                  type="date"
                  className="rounded-xl border border-[#2D4033]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2D4033]/40"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Erityistoiveet"
                className="mt-4 w-full rounded-xl border border-[#2D4033]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2D4033]/40"
              />
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-[#2D4033] px-6 py-3 text-xs tracking-[0.14em] text-[#F9F9F9] uppercase transition hover:bg-[#1f2c23]"
              >
                Laheta varauspyynto
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#2D4033] py-8 text-[#F9F9F9]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-xs tracking-[0.08em] uppercase sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>Borealis Casa, Oulu</p>
          <p>Huolella suunniteltuja vierailuja vuodesta 2012</p>
        </div>
      </footer>
    </div>
  )
}

export default App
