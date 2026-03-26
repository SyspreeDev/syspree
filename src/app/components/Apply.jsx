export default function ApplyForm() {
  return (
    <section className="p-10 border-b-4 border-black">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Apply Now 📄
      </h2>

      <div className="max-w-xl mx-auto p-6 border-4 border-black rounded-xl">

        <input className="w-full mb-4 p-3 border-4 border-black rounded-lg" placeholder="Full Name" />
        <input className="w-full mb-4 p-3 border-4 border-black rounded-lg" placeholder="Email" />

        <input type="file" className="w-full mb-4 border-2 border-dashed border-black p-3 rounded-lg" />

        <button className="w-full bg-orange-500 border-4 border-black py-3 rounded-lg font-bold">
          Submit Application 🚀
        </button>

      </div>
    </section>
  );
}