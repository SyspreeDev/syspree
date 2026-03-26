export default function JobsSection() {
  const roles = ["Frontend Dev", "Backend Dev", "Digital Marketing"];

  return (
    <section className="p-10 border-b-4 border-black">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Open Roles 💼
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <div key={i} className="p-6 border-4 border-black rounded-xl hover:bg-orange-100">

            <h3 className="text-xl font-bold">{role}</h3>
            <p className="mt-2 text-sm">0–2 Years Experience</p>

            <button className="mt-4 font-bold text-orange-500">
              Apply Now →
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}