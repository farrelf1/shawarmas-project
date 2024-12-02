import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="text-black pb-5 font-nacelle text-4xl font-semibold md:text-5xl"
              data-aos="fade-up"
            >
              MyChanic
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-black-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We are here to assist you
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn-sm bg-[#384B70] text-white hover:bg-[length:100%_150%] rounded-full w-32"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Spotlight section */}
          <div>
            <Spotlight className="group mx-auto grid max-w-sm items-center gap-6 lg:max-w-none h-64">
              {/* Card 3 */}
              <div
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-white-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="relative h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Content */}
                  <div className="p-6 text-center mt-3">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 z-30">
                        <span className="bg-white bg-clip-text text-transparent">
                          Powered by ChatGPT
                        </span>
                      </span>
                    </div>
                    <input
                      id="chatbot"
                      type="chatbot"
                      className="form-input bg-white border-0 w-full z-30 relative mt-5 text-black"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center z-30 relative">
                    <div>
                      <a
                        className="btn group mb-4 w-full bg-gradient-to-t bg-indigo-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto m-4 z-30 relative"
                        href="#0"
                      >
                        <span className="relative inline-flex items-center">
                          Flat Tires
                        </span>
                      </a>
                      <a
                        className="btn group mb-4 w-full bg-gradient-to-t bg-indigo-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto m-4 z-30 relative"
                        href="#0"
                      >
                        <span className="relative inline-flex items-center">
                          Oil Changes
                        </span>
                      </a>
                      <a
                        className="btn group mb-4 w-full bg-gradient-to-t bg-indigo-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto m-4 z-30 relative"
                        href="#0"
                      >
                        <span className="relative inline-flex items-center">
                          Stalled Car
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}