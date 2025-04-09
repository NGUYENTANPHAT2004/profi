import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Gửi email
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `;

      // Mở ứng dụng email mặc định với nội dung được điền sẵn
      const mailtoLink = `mailto:your.email@example.com?subject=Message from ${formData.name}&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink);

      // Hiển thị thông báo thành công
      toast.success('Message sent successfully! Thank you for contacting.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
        url = 'https://www.messenger.com/e2ee/t/8918597751504452/'; // Link đến Messenger của bạn
        break;
      case 'email':
        url = 'mailto:your.email@example.com';
        break;
      case 'github':
        url = 'https://github.com/yourusername';
        break;
      case 'linkedin':
        url = 'https://linkedin.com/in/yourusername';
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item clickable" onClick={() => handleSocialClick('email')}>
            <FaEnvelope />
            <span>your.email@example.com</span>
          </div>
          <div className="social-links">
            <button onClick={() => handleSocialClick('facebook')} className="social-btn">
              <FaFacebook /> Message on Facebook
            </button>
            <button onClick={() => handleSocialClick('github')} className="social-btn">
              <FaGithub /> GitHub
            </button>
            <button onClick={() => handleSocialClick('linkedin')} className="social-btn">
              <FaLinkedin /> LinkedIn
            </button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            className={`submit-btn ${isSending ? 'sending' : ''}`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact; 