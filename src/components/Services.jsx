export default function Services() {
    return (
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">Our Services</h2>
        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Maintenance</h3>
              <p className="text-gray-600">
                Regular cleaning, chemical balancing, and inspections to keep your pool safe and sparkling.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Supplies</h3>
              <p className="text-gray-600">
                Quality pool supplies and equipment delivered directly to meet your pool’s needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Renovations</h3>
              <p className="text-gray-600">
                Transform your pool with resurfacing, tile replacements, and more tailored improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
