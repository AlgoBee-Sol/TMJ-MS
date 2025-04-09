// components/landing/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      content:
        "The Muscular Junction transformed our clinic operations. The system is intuitive and has significantly improved our efficiency.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
    },
    {
      content:
        "As a physiotherapist, I appreciate how easy it is to access patient records and track treatment progress. Highly recommended!",
      author: "James Wilson",
      role: "Senior Physiotherapist",
    },
    {
      content:
        "The appointment scheduling feature alone saved our administrative staff countless hours. The entire system has been a game-changer.",
      author: "Emily Rodriguez",
      role: "Clinic Administrator",
    },
  ];

  return (
    <section className="py-12 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by healthcare professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hear what our clients have to say about The Muscular Junction
            Management System.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <svg
                      className="h-12 w-12 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-4 text-base text-gray-500">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
