// components/landing/Services.tsx
export default function Services() {
  const services = [
    {
      title: "Physiotherapy",
      description:
        "Expert-led physiotherapy sessions tailored to your individual needs for optimal recovery.",
      icon: "🧠",
    },
    {
      title: "Sports Medicine",
      description:
        "Specialized care for athletes and active individuals with focus on prevention and performance.",
      icon: "🏃",
    },
    {
      title: "Rehabilitation",
      description:
        "Comprehensive rehabilitation programs for post-surgery and injury recovery.",
      icon: "⚕️",
    },
    {
      title: "Pain Management",
      description:
        "Advanced techniques and therapies to manage acute and chronic muscular pain.",
      icon: "💊",
    },
  ];

  return (
    <div className="py-12 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive muscular care
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            The Muscular Junction offers a wide range of specialized services to
            address all your musculoskeletal needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:bg-indigo-500 group">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-white text-3xl">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
