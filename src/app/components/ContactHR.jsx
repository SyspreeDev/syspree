export default function ContactHR() {
  return (
    <section className="p-10 border-b-4 border-black bg-orange-50">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Contact HR 📞
      </h2>

      <div className="max-w-xl mx-auto p-6 border-4 border-black rounded-xl bg-white">

        <input className="w-full mb-4 p-3 border-4 border-black rounded-lg" placeholder="Your Name" />
        <input className="w-full mb-4 p-3 border-4 border-black rounded-lg" placeholder="Email" />
        <textarea className="w-full mb-4 p-3 border-4 border-black rounded-lg" placeholder="Message"></textarea>

        <button className="w-full bg-orange-400 border-4 border-black py-3 rounded-lg font-bold">
          Submit
        </button>

      </div>
    </section>
  );
}