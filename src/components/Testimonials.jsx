export default function Testimonials() {
  // Array of mock reviews TODO:Replace them with real reviews
    const reviews = [
      { id: 1, name: "John Doe", review: "Fantastic service! My pool has never looked better.", rating: 5 },
      { id: 2, name: "Jane Smith", review: "Very professional and reliable. Highly recommend!", rating: 5 },
      { id: 3, name: "Michael Brown", review: "They go above and beyond. Excellent customer service!", rating: 5 },
    ];
  
    return (
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">What Our Clients Say</h2>
        <div className="flex justify-center">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex justify-center mb-4">
                  {Array(review.rating)
                    .fill("")
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-yellow-500"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.747l-6 5.851L19.336 24 12 19.931 4.664 24 6 15.598 0 9.747l8.332-1.592L12 .587z" />
                      </svg>
                    ))}
                </div>
                <p className="italic text-gray-600 mb-4">"{review.review}"</p>
                <p className="font-bold text-gray-700">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
          // TODO: Link to actual reviews
            href="https://www.youtube.com/watch?v=NKXHQpqgF4w&pp=ygUWZHVjayBkYW5jaW5nIHRvIGhleSB5YQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    );
  }
  