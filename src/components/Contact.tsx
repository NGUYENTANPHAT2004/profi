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
        url = 'mailto:phatntph36792@fpt.edu.vn';
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
    <div className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-800 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300 cursor-pointer" onClick={() => handleSocialClick('email')}>
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <span>phatntph36792@fpt.edu.vn</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => handleSocialClick('facebook')} className="flex items-center space-x-4 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300">
                  <FaFacebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button onClick={() => handleSocialClick('github')} className="flex items-center space-x-4 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300">
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </button>
                <button onClick={() => handleSocialClick('instagram')} className="flex items-center space-x-4 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300">
                  <FaInstagram className="w-5 h-5" />
                  <span>Instagram</span>
                </button>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-gray-950">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white transition duration-200" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white transition duration-200" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white transition duration-200" placeholder="Write your message here..." />
                </div>
                <button type="submit" disabled={isSending} className={`w-full py-3 px-6 rounded-lg text-white font-medium focus:outline-none focus:ring-4 focus:ring-white shadow-lg transform transition duration-500 ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-black hover:-translate-y-1 hover:shadow-xl'}`}>
                  {isSending ? (
                    <div className="flex items-center justify-center text-white">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer {...toastConfig} theme="dark" />
    </div>
  );
};

export default Contact;
