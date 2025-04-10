import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "rounded-lg font-medium"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('🎉 Message sent successfully!', {
          ...toastConfig,
          icon: "🚀"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          toast.error(`❌ ${errorData.error || 'Failed to send message'}`, toastConfig);
        } else {
          toast.error(`❌ Error: ${response.statusText || 'Something went wrong'}`, toastConfig);
        }
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('📶 Network error. Please check your connection.', {
        ...toastConfig,
        icon: "🔌"
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialClick = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/profile.php?id=100025113759947&locale=vi_VN';
        break;
      case 'email':
        url = 'mailto:phatzz@gmail.com';
        break;
      case 'github':
        url = 'https://github.com/NGUYENTANPHAT2004';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/tanp17052004';
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="py-10 sm:py-16 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Get in Touch</h2>
          <p className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Contact Info - fullwidth on mobile, half width on large screens */}
            <div className="bg-gray-800 p-5 sm:p-6 md:p-8 lg:p-10 w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-10">
                <div
                  className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition duration-300 cursor-pointer"
                  onClick={() => handleSocialClick('email')}
                >
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">phatntph36792@fpt.edu.vn</span>
                </div>
              </div>
              
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect with me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4 py-2 px-3 sm:px-4 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Facebook</span>
                </button>
                <button
                  onClick={() => handleSocialClick('github')}
                  className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4 py-2 px-3 sm:px-4 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">GitHub</span>
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4 py-2 px-3 sm:px-4 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Instagram</span>
                </button>
              </div>
            </div>

            {/* Right: Contact Form - fullwidth on mobile, half width on large screens */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 w-full lg:w-1/2 bg-gray-950">
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white font-medium focus:outline-none focus:ring-4 focus:ring-white shadow-lg transform transition duration-300 ${isSending
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-black hover:-translate-y-1 hover:shadow-xl'
                    }`}
                >
                  {isSending ? (
                    <div className="flex items-center justify-center text-white">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="text-sm sm:text-base">Sending Message...</span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base">Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Customize toast container for different screen sizes */}
      <ToastContainer
        {...toastConfig}
        theme="dark"
        position="bottom-center"
        className="sm:!bottom-4 sm:!right-4 sm:!top-auto sm:!left-auto"
        toastClassName="!text-sm sm:!text-base"
        bodyClassName="!text-sm sm:!text-base"
        style={{ width: 'auto', maxWidth: '90vw', margin: '0 auto' }}
      />
    </div>
  );
};

export default Contact;