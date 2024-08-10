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
    <div
      className={`hero min-h-[calc(100vh-4rem)]`}
      style={{ backgroundImage: `url(./background.jpg)` }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md space-y-10">
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-1">
              <img src="./me.webp" alt="self portrait" />
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
      <div className="hero-content flex-col w-3/4 lg:w-1/2 ">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Aran McConnell</h1>
          <h1 className="text-2xl font-semibold">Software Engineer and Extreme Sports Enthusiast</h1>
          <p className="py-6 text-lg">
            Working on ML Compilers at Fractile, building chips to accelerate and increase the efficiency of AI inference.
            <br />
            <br />
            I&apos;m interested in using technology to drive positive change, and
            accelerate progress towards a greener future. Committed to
            continuous learning and professional growth in the ever-evolving
            tech landscape.
            <br />
            <br />
            When I'm not coding, you can find me in the mountains, climbing and snowboarding, or in the water, surfing and kitesurfing. Or generally having adventures outside.
          </p>
          <button className="btn btn-primary text-lg" aria-label="Download CV">
            <a href="./aran_mcconnell.pdf" download="Aran McConnell">
              Download my CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
