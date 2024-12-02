import Image from "next/image";
import Worker from "@/public/images/mechanic.jpg";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid grid-cols-2 max-w-sm items-center gap-2 lg:max-w-none">
            <a>
              {/* Image */}
              <Image
                className="inline-flex"
                src={Worker}
                width={350}
                height={288}
                alt="Mechanic"
              />
            </a>

            {/* Card with form */}
            <div
              className="relative h-full overflow-hidden rounded-2xl bg-white p-px"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ zIndex: 10 }}
            >
              <div
                className="relative h-full overflow-hidden rounded-[inherit] before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900/50 before:via-gray-800/25 before:to-gray-900/50"
                style={{ zIndex: 10 }}
              >
                {/* Gradient effect */}
                <div
                  className="before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:h-80 before:w-80 before:rounded-full before:bg-white-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 
                             after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:h-64 after:w-64 after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500
                             before:group-hover:opacity-20 after:group-hover:opacity-20"
                  style={{ position: 'relative', zIndex: 5 }}
                />

                {/* Content */}
                <h1 className="text-black pb-5 font-nacelle text-xl text-center mt-6" style={{ zIndex: 30 }}>
                  Available with you 24/7
                </h1>

                {/* Form */}
                <form className="space-y-4 m-6 relative" style={{ zIndex: 30 }}>
                  <div>
                    <label className="block text-black text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-input mt-1 block w-full bg-gray-200 text-black rounded-md border-gray-600"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-input mt-1 block w-full bg-gray-200 text-black rounded-md border-gray-600"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-input mt-1 block w-full bg-gray-200 text-black rounded-md border-gray-600"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-input mt-1 block w-full bg-gray-200 text-black rounded-md border-gray-600 mb-2"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
                  >
                    Reserve a Mechanic
                  </button>
                </form>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
