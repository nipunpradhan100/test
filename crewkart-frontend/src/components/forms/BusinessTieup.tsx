export default function BusinessTieup() {
  return (
    <section className="bg-[#004643] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-3xl font-bold md:text-5xl">
          Partner With CrewKart
        </h2>

        <p className="mt-4 text-gray-200">
          Collaborate with us for business tie-ups,
          event partnerships, and workforce solutions.
        </p>

        <form className="mt-12 grid gap-5">

          <input
            type="text"
            placeholder="Business Name"
            className="rounded-2xl bg-white px-5 py-4 text-black outline-none"
          />

          <input
            type="text"
            placeholder="Contact Person"
            className="rounded-2xl bg-white px-5 py-4 text-black outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-2xl bg-white px-5 py-4 text-black outline-none"
          />

          <textarea
            placeholder="Tell us about your requirement"
            rows={5}
            className="rounded-2xl bg-white px-5 py-4 text-black outline-none"
          />

          <button className="rounded-2xl bg-[#fbbf24] py-4 font-bold text-[#004643]">
            Submit Inquiry
          </button>

        </form>
      </div>
    </section>
  );
}