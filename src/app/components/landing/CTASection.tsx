// components/landing/CTASection.tsx
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to streamline your clinic?</span>
          <span className="block">
            Start using The Muscular Junction today.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Join healthcare professionals who have transformed their practice with
          our comprehensive clinic management system.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
