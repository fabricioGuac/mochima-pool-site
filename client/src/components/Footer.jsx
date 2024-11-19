

export default function Footer() {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
            <img src="/logo.jpg" alt="Mochima Pool Service Logo" className="w-16 rounded-lg" />
            <p className="font-bold text-lg">Mochima Pool Service</p>
            <p className="text-sm italic">"Inspired by Nature, Perfected for Your Pool"</p>
            <div className="text-sm space-y-1">
                <p>Email: <a href="mailto:mochimapools@gmail.com" className="hover:text-teal-300">mochimapools@gmail.com</a></p>
                <p>Phone: <a href="tel:+16896801646" className="hover:text-teal-300">(689) 680-1646</a></p>
                <p>
                    Follow us on:&nbsp;
                    <a
                        href="https://instagram.com/mochimapools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-300"
                    >
                        Instagram
                    </a>
                </p>
                <p>Hours: Mon-Sat 8 AM - 4 PM</p>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Mochima Pool Service</p>
        </div>
    );
}