import meImage from "../public/me.jpg";
import backgroundImage from "../public/background.jpg";

export default function Home() {
  return (
    <div>
      <Cover />
      <Intro />
      {/* <Cover1 /> */}
    </div>
  );
}

function Cover() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-64">
      <img
        src={backgroundImage.src}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
      />
      <div
        className="absolute -top-52 -z-10 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-7xl px-0 sm:px-8">
        {" "}
        {/* Adjusted px-6 to px-0 */}
        <div className="text-center">
          <div className="py-10">
            <img
              className="inline-block h-40 w-40 rounded-full ring-4 ring-black"
              src={meImage.src}
              alt=""
            />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Hey, I&apos;m Aran
          </h2>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Aran McConnell
        </h2>
        <h3 className="text-xl tracking-tight text-white sm:text-2xl">
          Software Engineer
        </h3>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A software engineer with 1+ years professional experience, largely in
          C/C++ and Python.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Download my CV
          </a>
        </div>
      </div>
    </div>
  );
}
