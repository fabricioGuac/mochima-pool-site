import { useState } from "react";
// import emailjs from "emailjs-com";

export default function Contact() {
    // State variables
    const [form, setForm] = useState({ name: '', email: '', message: '', address: '', phone: '', });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Input change handler
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };


    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(form.email)) {
            setErrorMessage('Invalid email');
            return;
        }
        if (!form.name || !form.email || !form.message || form.address || form.phone ) {
            setErrorMessage('Please fill out all required fields.');
            return;
        }

        try {
            // Send the email via EmailJS
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Mochima pool",
                    to_email: "mochimapools@gmail.com",
                    message: form.message,
                    address: form.address,
                    phone: form.phone,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            setForm({ name: '', email: '', message: '', address: '', phone: '' });
            setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
            setErrorMessage('Unexpected error occurred. Please try again.');
        }
    };

        return (
            <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-gray-50 flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-teal-700 text-center mb-6">
                    Contact Us!
                </h2>
        
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-600 mb-4">
                            Call us at: <a href="tel:+16896801646" className="text-teal-700 hover:underline">(689) 680-1646</a>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Email us at: <a href="mailto:mochimapools@gmail.com" className="text-teal-700 hover:underline">mochimapools@gmail.com</a>
                        </p>
                        <p className="text-gray-600">
                            We'd love to hear from you! Let us know how we can assist with your pool needs.
                        </p>
                        <img src="/logo.jpg" alt="logo" className="max-w-full h-auto mt-4" />
                    </div>
        
                    <div className="w-full lg:w-1/2">
                        <form className="bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                                    required
                                />
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                                    required
                                />
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={form.address}
                                    onChange={handleInputChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                                    required
                                />
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                                    required
                                />
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium">Message:</label>
                                <textarea
                                    id="message"
                                    value={form.message}
                                    onChange={handleInputChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                                    rows="4"
                                    required
                                />
                            </div>
        
                            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        
                            <button
                                type="submit"
                                className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
        
}
