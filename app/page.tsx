export default function Home() {
  return (
    <div>
      <Cover />
      <Intro />
    </div>
  );
}

function Cover() {
  return (
    <div className={`hero min-h-[calc(100vh-4rem)] bg-[url('/background.jpg')]`}>
      <div className="hero-content text-center">
        <div className="max-w-md space-y-10">
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-1">
              <img src="./me.webp" />
            </div>
          </div>
          <h1 className="text-6xl font-semibold">Hey, I&apos;m Aran!</h1>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="hero min-h-screen bg-base-100 bg-gradient-radial">
      <div className="hero-content flex-col w-1/2 ">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Aran McConnell</h1>
          <h1 className="text-2xl font-semibold">Software Engineer</h1>
          <p className="py-6 text-lg">
            Software engineer with expertise in C/C++, Python, and Typescript,
            specialising in machine learning, artificial intelligence, and
            leveraging technology for sustainable solutions. Proficient in
            developing high-performance software, with previous experience in
            optimising embedded ML.
            <br />
            <br />
            Passionate about using technology to drive positive change, and
            accelerate progress towards a greener future. Committed to
            continuous learning and professional growth in the ever-evolving
            tech landscape.
          </p>
          <button className="btn btn-primary text-lg">
            <a href="/aran_mcconnell.pdf" download="Aran McConnell">
              Download my CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
