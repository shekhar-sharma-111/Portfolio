
import image from "/profile_image.jpg";

export default function HomePage() {
  return (
    <section id='home' className="bg-black min-h-screen text-white">
   

      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 flex flex-col items-center  lg:flex-row lg:items-center lg:space-x-8">
          <div className="mb-8 lg:mb-0 lg:order-1">
            <img
              className="h-80 w-60 rounded-full "
              src={image}
              alt="Profile"
            />
          </div>
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl hover:text-indigo-600">
              Shekhar Sharma
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I'm a passionate software developer specializing in web
              development and design. Welcome to my portfolio!
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              
              {/* <a
                href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a> */}
              <a
                href="https://drive.google.com/file/d/1fuM1FEn-QHWPZPFUTFIM4A6UedNTyCmy/view?usp=drivesdk"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-300"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
