const ContactPage = () => {
    return (
      <div className="flex justify-center items-center min-h-screen p-6 bg-[#F5E5E5]">
        <div className="max-w-xl w-full p-8 rounded-lg shadow-md bg-white">
          <h1 className="md:text-6xl sm:text-4xl font-semibold text-center font-serif text-[#86404a] mb-8">
            Contact Us
          </h1>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xl font-medium text-[#86404a] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4E61]"
              />
            </div>
  
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-[#86404a] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required  
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4E61]"
              />
            </div>
  
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-xl font-medium text-[#86404a] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4E61]"
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#86404a] text-[#F5E5E5] text-xl rounded-lg hover:bg-[#db96b0] focus:outline-none focus:ring-2 focus:ring-[#8B4E61]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  
