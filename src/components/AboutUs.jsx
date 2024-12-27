
export default function AboutUs() {
    return (
      <div className=" justify-center">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">About Mochima Pool Service</h2>
          <p className="text-gray-700 mb-8">
            Established in 2024 in Davenport, Florida, Mochima Pool Service was founded by Javier Guacuto to provide professional, personalized pool care.
            Javier understands the importance of reliable service tailored to every client’s unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-4">
              <img src="/logo.jpg" alt="Reliable Service" className="mx-auto w-16" />
              <h3 className="text-lg font-semibold">Reliable Service</h3>
              <p className="text-sm text-gray-600">Dependable pool care delivered with consistency and professionalism.</p>
            </div>

            <div className="space-y-4">
              <img src="/logo.jpg" alt="Tailored Solutions" className="mx-auto w-16" />
              <h3 className="text-lg font-semibold">Tailored Solutions</h3>
              <p className="text-sm text-gray-600">Customized plans that suit your specific pool maintenance needs.</p>
            </div>

            <div className="space-y-4">
              <img src="/logo.jpg" alt="Personal Touch" className="mx-auto w-16" />
              <h3 className="text-lg font-semibold">Personal Touch</h3>
              <p className="text-sm text-gray-600">As a small business, we prioritize building long-lasting relationships.</p>
            </div>

          </div>

        </div>

      </div>
    );
  }
  