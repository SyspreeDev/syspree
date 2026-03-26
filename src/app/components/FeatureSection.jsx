export default function FeaturesSection() {
  const features = ["Top Companies", "Good Salary", "Fast Hiring", "Career Growth"];

  return (
    <section className="grid md:grid-cols-4 text-center border-b-4 border-black">
      {features.map((item, i) => (
        <div key={i} className="p-8 border-r-4 border-black last:border-none">

          <div className="w-16 h-16 mx-auto bg-orange-300 border-4 border-black rounded-xl flex items-center justify-center text-xl font-bold">
            🚀
          </div>

          <h3 className="mt-4 font-bold">{item}</h3>
          <p className="text-sm mt-2">Best opportunities for you</p>

        </div>
      ))}
    </section>
  );
}