import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#86404a] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/Home" 
                
                className="hover:underline">
                Home
                </Link>
              </li>
              <li>
                <Link href="/About"
                
                className="hover:underline">
                About
                </Link>
              </li>
              <li>
              <Link href="/Contact"
              
              className="hover:underline">
              Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <li >
                <Link href="https://www.facebook.com" target="_blank"  rel="preload" as="script" title="Facebook" className="hover:underline">
                Facebook</Link>
              </li>
              <li >
              <Link href="https://www.twitter.com" target="_blank" rel="preload" as="script" title="Facebook" className="hover:underline">
                Twitter</Link>
              </li>
              <li >
              <Link href="https://www.instagram.com" target="_blank" rel="preload" as="script" title="Facebook" className="hover:underline">
                Instagram</Link>
              </li>
              <li >
              <Link href="https://www.linkedin.com" target="_blank" rel="preload" as="script" title="Facebook" className="hover:underline">
                LinkedIn</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Stay updated with the latest news and offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <button className="w-full bg-[#F0F0F0] text-[#8B4E61] py-2 rounded-lg hover:bg-[#E0E0E0]">
              Subscribe
            </button>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>1234 Street Name, City, Country</p>
            <p>Email: contact@yourwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
