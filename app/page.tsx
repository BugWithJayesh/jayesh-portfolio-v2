import InteractiveLiquidGlass from "./components/InteractiveLiquidGlass";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090d] text-[#f1f0f5]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Purple ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[100px] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[120px]"
      />

      {/* Navigation */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 px-6 py-5 sm:px-10 lg:px-16">
        <a href="#" className="text-sm font-semibold tracking-[0.18em]">
          JB<span className="text-violet-400">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/60 sm:gap-x-6"
        >
          <a href="#about" className="transition-colors hover:text-violet-300">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-violet-300">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-violet-300">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-violet-300">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          LEARNING IN PUBLIC
        </div>
      </header>

      {/* Hero section */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1600px] items-center gap-8 px-6 pb-12 pt-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <div className="relative z-10">
          <p className="mb-6 text-xs tracking-[0.25em] text-violet-300 sm:text-sm">
            COMPUTER SCIENCE STUDENT
          </p>

          <h1
            className="font-semibold uppercase leading-[0.82] tracking-[-0.075em]"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
          >
            JAYESH
            <br />
            <span className="text-white/40">BAIRAGI</span>
            <span className="text-violet-400">.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70 sm:text-xl">
            Learning. Experimenting. Building.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-3 rounded-full bg-[#f1f0f5] px-6 py-3 text-sm font-medium text-[#08090d] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore my world
              <span aria-hidden="true">↘</span>
            </a>

            <span className="text-xs tracking-wide text-white/40">
              PYTHON · C++ · WEB
            </span>
          </div>
        </div>

        {/* CSS-built abstract 3D sculpture */}
        <div
          aria-hidden="true"
          className="hero-sculpture relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div className="absolute h-[72%] w-[72%] rounded-full bg-violet-600/15 blur-3xl" />

          <div
            className="absolute h-[72%] w-[72%] rounded-full border border-white/20"
            style={{
              transform: "rotateX(68deg) rotateZ(-28deg)",
              boxShadow: "0 0 50px rgba(167,139,250,0.08)",
            }}
          />

          <div
            className="absolute h-[62%] w-[62%] rounded-[35%] border border-violet-300/60 bg-gradient-to-br from-white/15 via-violet-500/10 to-black/80 shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.8),inset_12px_12px_35px_rgba(255,255,255,0.12),0_0_70px_rgba(139,92,246,0.15)]"
            style={{
              transform: "rotateX(58deg) rotateZ(35deg)",
            }}
          />

          <div
            className="absolute h-[45%] w-[45%] rounded-full border border-white/40 bg-gradient-to-br from-violet-300/70 via-violet-700/50 to-[#08090d] shadow-[inset_-15px_-15px_35px_rgba(0,0,0,0.8),0_0_45px_rgba(167,139,250,0.25)]"
            style={{
              transform: "translateZ(45px) rotateY(-25deg)",
            }}
          />

          <div
            className="absolute h-[78%] w-[30%] rounded-full border border-white/20"
            style={{
              transform: "rotateY(65deg) rotateZ(-35deg)",
            }}
          />

        </div>

        {/* Bottom metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[10px] tracking-[0.16em] text-white/40 sm:text-xs lg:col-span-2">
          <p>UJJAIN, INDIA</p>
          <p>MIT COLLEGE · CLASS OF 2028</p>
          <p>SCROLL TO EXPLORE ↓</p>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="relative z-10 border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <InteractiveLiquidGlass radius={30} tint="rgba(255,255,255,0.045)" className="w-full">
            <div className="grid gap-12 p-6 sm:p-8 md:grid-cols-2 md:gap-20 lg:p-12">
          <div>
            <p className="mb-5 text-xs tracking-[0.25em] text-violet-300">
              01 / A LITTLE ABOUT ME
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Curious by
              <br />
              nature<span className="text-violet-400">.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-white/80 sm:text-2xl">
              I’m Jayesh Bairagi, a Computer Science student at MIT College,
              currently exploring programming and the world of technology.
            </p>

            <p className="mt-6 max-w-xl leading-8 text-white/50">
              I’m building my foundation in C, C++, Python, SQL. I learn by
              experimenting, solving problems and turning ideas into small
              projects.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="border-l border-violet-400/60 pl-4">
                <p className="text-2xl font-medium">2028</p>
                <p className="mt-2 text-xs tracking-wider text-white/40">
                  GRADUATION YEAR
                </p>
              </div>

              <div className="border-l border-violet-400/60 pl-4">
                <p className="text-2xl font-medium">Ujjain</p>
                <p className="mt-2 text-xs tracking-wider text-white/40">
                  INDIA
                </p>
              </div>
            </div>
          </div>
            </div>
          </InteractiveLiquidGlass>
        </div>
      </section>

      {/* Skills section */}
      <section
        id="skills"
        className="relative z-10 border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 text-xs tracking-[0.25em] text-violet-300">
            02 / MY TOOLKIT
          </p>

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Skills I’m
              <br />
              <span className="text-white/40">developing.</span>
            </h2>

            <p className="max-w-sm leading-7 text-white/50">
              Learning one concept at a time, practising through code,
              and improving with every project.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Programming */}
            <div className="h-full">
              <InteractiveLiquidGlass radius={24} tint="rgba(255,255,255,0.045)" className="h-full w-full">
              <div className="group p-6 sm:p-8">
              <p className="text-xs tracking-[0.18em] text-white/40">
                01 / PROGRAMMING
              </p>

              <h3 className="mt-8 text-2xl font-medium">C / C++</h3>

              <p className="mt-3 leading-7 text-white/50">
                Building programming fundamentals and practising
                problem-solving.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  C
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  C++
                </span>
              </div>
              </div>
            </InteractiveLiquidGlass>
            </div>

            {/* Python */}
            <div className="h-full">
              <InteractiveLiquidGlass radius={24} tint="rgba(167,139,250,0.07)" className="h-full w-full">
              <div className="group p-6 sm:p-8">
              <p className="text-xs tracking-[0.18em] text-violet-300">
                02 / CURRENTLY LEARNING
              </p>

              <h3 className="mt-8 text-2xl font-medium">Python</h3>

              <p className="mt-3 leading-7 text-white/50">
                Exploring Python through small programs and
                beginner-friendly projects.
              </p>

              <div className="mt-8">
                <span className="rounded-full border border-violet-400/30 px-3 py-1.5 text-xs text-violet-200">
                  In progress
                </span>
              </div>
              </div>
            </InteractiveLiquidGlass>
            </div>

            {/* Web and data */}
            <div className="h-full">
              <InteractiveLiquidGlass radius={24} tint="rgba(255,255,255,0.045)" className="h-full w-full">
              <div className="group p-6 sm:p-8">
              <p className="text-xs tracking-[0.18em] text-white/40">
                03 / WEB & DATA
              </p>

              <h3 className="mt-8 text-2xl font-medium">HTML / SQL</h3>

              <p className="mt-3 leading-7 text-white/50">
                Learning web page structure and the basics of
                working with databases.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  HTML
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  SQL
                </span>
              </div>
              </div>
            </InteractiveLiquidGlass>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section
        id="projects"
        className="relative z-10 border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 text-xs tracking-[0.25em] text-violet-300">
            03 / SELECTED PROJECTS
          </p>

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas into
              <br />
              <span className="text-white/40">practice.</span>
            </h2>

            <p className="max-w-sm leading-7 text-white/50">
              Small projects, practical experiments, and lessons
              learned along the way.
            </p>
          </div>

          <div className="project-cards-grid grid items-stretch gap-5 md:grid-cols-2">
            {/* Project 1 */}
            <div className="project-card-cell min-w-0">
              <InteractiveLiquidGlass radius={24} tint="rgba(255,255,255,0.045)" className="project-card-glass h-full w-full">
              <article className="project-card-article group relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="project-visual project-visual-python relative flex h-[240px] shrink-0 items-center justify-center overflow-hidden rounded-t-[23px] p-8">
                <div className="absolute h-40 w-40 rounded-full border border-violet-300/20 transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute h-28 w-28 rotate-45 rounded-2xl border border-violet-300/40 transition-transform duration-700 group-hover:rotate-[65deg] group-hover:scale-110" />

                <div className="relative text-center transition-transform duration-500 group-hover:scale-105">
                  <p className="text-xs tracking-[0.25em] text-violet-300">
                    PYTHON PROJECT
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Guess<span className="text-violet-400">.</span>
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    Can you find the number?
                  </p>
                </div>

                <span className="absolute right-5 top-5 text-xs text-white/40">
                  01
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-medium transition-colors duration-300 group-hover:text-violet-200">
                  Random Number Guessing Game
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  A beginner Python game where the player tries to guess
                  a randomly generated number. This project helped me
                  explore basic programming logic with AI assistance.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Python
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Logic
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Beginner project
                  </span>
                </div>
              </div>
              </article>
            </InteractiveLiquidGlass>
            </div>

            {/* Project 2 */}
            <div className="project-card-cell min-w-0">
              <InteractiveLiquidGlass radius={24} tint="rgba(255,255,255,0.045)" className="project-card-glass h-full w-full">
              <article className="project-card-article group relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="project-visual project-visual-milk relative flex h-[240px] shrink-0 items-center justify-center overflow-hidden rounded-t-[23px] p-8">
                <div className="absolute h-36 w-36 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110" />

                <div className="relative flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
                  <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl border border-violet-300/50 bg-violet-300/10 shadow-[0_0_35px_rgba(167,139,250,0.12)]">
                    <span className="text-xs text-violet-200">MILK</span>
                    <span className="mt-1 text-xl">↓</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="h-2 w-20 rounded-full bg-white/20" />
                    <span className="h-2 w-14 rounded-full bg-violet-300/50" />
                    <span className="h-2 w-16 rounded-full bg-white/10" />
                  </div>
                </div>

                <span className="absolute right-5 top-5 text-xs text-white/40">
                  02
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-medium transition-colors duration-300 group-hover:text-violet-200">
                  Milk ATM Machine
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  A C++ project developed with a friend, based on the
                  concept of a milk dispensing machine. It gave me an
                  opportunity to practise programming through a
                  collaborative project.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    C++
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Logic
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Team project
                  </span>
                </div>
              </div>
              </article>
            </InteractiveLiquidGlass>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/10 px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute bottom-[-140px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-[1200px]">
          <InteractiveLiquidGlass radius={30} tint="rgba(255,255,255,0.045)" className="w-full">
            <div className="p-6 sm:p-8 lg:p-12">
          <p className="mb-6 text-xs tracking-[0.25em] text-violet-300">
            04 / THE NEXT CHAPTER
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Let’s build
            <br />
            something
            <br />
            <span className="text-white/35">meaningful.</span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-white/55 sm:text-lg">
            I’m learning, experimenting and working on new ideas.
            This is just the beginning of my journey in technology.
          </p>

          {/* Functional contact links */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:exe.jayesh@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#f1f0f5] px-6 py-3 text-sm font-medium text-[#08090d] transition-transform duration-300 hover:-translate-y-1"
            >
              Email me <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/BugWithJayesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-400/[0.06] hover:text-white"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jayesh-bairagi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-400/[0.06] hover:text-white"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://linktr.ee/jayeshbairagi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-400/[0.06] hover:text-white"
            >
              Linktree <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="mt-5 text-sm text-white/45">
            Or email me at{" "}
            <a
              href="mailto:exe.jayesh@gmail.com"
              className="text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-violet-200"
            >
              exe.jayesh@gmail.com
            </a>
          </p>

            </div>
          </InteractiveLiquidGlass>
        </div>
      </section>
    </main>
  );
}