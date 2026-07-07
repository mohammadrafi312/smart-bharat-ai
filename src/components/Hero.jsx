export default function Hero() {

  return (

    <section className="px-10 py-24 text-center">


      <div className="text-5xl mb-5">
        ✨
      </div>


      <h1 className="text-6xl font-bold mb-6">

        Your AI Powered <br />

        <span className="text-blue-400">

          Civic Companion

        </span>

      </h1>


      <p className="max-w-3xl mx-auto text-gray-400 text-xl">

        Access government services, understand schemes,
        report public issues and receive personalized help
        using Generative AI.

      </p>


      <div className="mt-10 flex justify-center gap-5">


        <button className="bg-blue-600 px-8 py-3 rounded-xl">

          Ask AI Assistant

        </button>


        <button className="border border-white/20 px-8 py-3 rounded-xl">

          Report Issue

        </button>


      </div>


    </section>

  );

}