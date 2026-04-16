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
          <h1 className="text-6xl font-semibold">Aran McConnell</h1>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="hero bg-base-100 bg-gradient-radial items-start">
      <div className="hero-content flex-col w-3/4 lg:w-1/2 py-16">
        <div className="space-y-1">
          {/* <h1 className="text-5xl font-bold">Aran McConnell</h1> */}
          {/* <h1 className="text-2xl font-semibold">Software Engineer and Extreme Sports Enthusiast</h1> */}
          <p className="py-6 text-lg">
            Hey, I&apos;m Aran! I work on compilers and architecture, focusing on novel hardware to accelerate AI inference at <a href="https://www.fractile.ai" target="_blank" rel="noopener noreferrer" className="link link-primary link-hover font-medium">Fractile</a>.
            <br />
            <br />
            When I&apos;m not coding, you can find me in the mountains, climbing and snowboarding, or in the water, surfing and kitesurfing. Or generally having adventures outside.
          </p>
        </div>
      </div>
    </div>
  );
}
