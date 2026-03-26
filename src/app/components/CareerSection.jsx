"use client";

export default function CareerSection() {
  return (
    <section
      id="jobs"
      className="sticky top-0 bg-white border-4 border-black py-20 flex items-center"
    >
      <div className="w-full px-4 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
          We Are <br />
          <span className="text-orange-500">Hiring 🚀</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg max-w-2xl">
          Explore exciting career opportunities and become a part of a team that
          values innovation, growth, and creativity. Take the next step in your
          professional journey with us.
        </p>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 border-4 border-black rounded-xl hover:bg-orange-50 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Join Our Team</h3>
              <p className="mt-2 text-sm">
                Work on exciting projects and build a meaningful career.
              </p>
            </div>

            <a
              href="https://syspree.com/careers"
              target="_blank"
              className="mt-6 inline-block bg-orange-400 border-4 border-black px-4 py-2 rounded-lg font-bold text-center hover:bg-orange-500 transition"
            >
              Apply Now →
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-6 border-4 border-black rounded-xl hover:bg-orange-50 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Visit Our Website</h3>
              <p className="mt-2 text-sm">
                Explore our website to know more about our work, culture, and
                the opportunities waiting for you.
              </p>
            </div>

            <a
              href="https://syspree.com/"
              target="_blank"
              className="mt-6 inline-block bg-orange-400 border-4 border-black px-4 py-2 rounded-lg font-bold text-center hover:bg-orange-500 transition"
            >
              Apply Now →
            </a>
          </div>

          {/* Card 3 */}
          {/* <div className="p-6 border-4 border-black rounded-xl hover:bg-orange-50 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">View Our Team</h3>
              <p className="mt-2 text-sm">
                 Take a look at the amazing minds shaping our journey and building great things together.
              </p>
            </div>

            <a
              href="https://syspree.com/our-team/"
              target="_blank"
              className="mt-6 inline-block bg-orange-400 border-4 border-black px-4 py-2 rounded-lg font-bold text-center hover:bg-orange-500 transition"
            >
              Get Started →
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
