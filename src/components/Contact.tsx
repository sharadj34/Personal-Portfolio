import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS service configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Template parameters that will be sent to your email template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject || 'Contact from Portfolio Website',
        message: formData.message
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', response);
      
      // Success - reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitMessage('Sharad has received your message and will reach out to you soon!');
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly at sharad.jha1010@gmail.com');
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 8 seconds
      setTimeout(() => setSubmitMessage(''), 8000);
    }
  };
  const contactInfo = {
    email: 'sharad.jha1010@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sharadj34/',
    github: 'https://github.com/sharadj34',
    twitter: 'https://twitter.com/yourusername'
  };

  return (
    <section id="contact" style={{
      padding: isMobile ? '60px 15px' : '80px 20px',
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold'
        }}>Get in Touch</h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '50px'
        }}>I'd love to hear from you! Feel free to send me a message using the form below.</p>


        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{
          maxWidth: '800px',
          margin: '40px auto 0 auto',
          backgroundColor: '#f8f9fa',
          padding: isMobile ? '25px' : '40px',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          textAlign: 'left'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginBottom: '30px',
            textAlign: 'center'
          }}>Send me a Message</h3>
          
          <div style={{ 
            display: 'grid', 
            gap: '20px',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #e0e0e0',
              fontSize: '1rem',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s ease',
              marginTop: '20px'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          />
          
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #e0e0e0',
              fontSize: '1rem',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s ease',
              marginTop: '20px',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '25px',
              padding: '15px 40px',
              backgroundColor: isSubmitting ? '#999' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              display: 'block',
              margin: '25px auto 0 auto'
            }}
            onMouseOver={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#5a67d8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>

          {submitMessage && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: submitMessage.includes('error') ? '#f8d7da' : '#d4edda',
              color: submitMessage.includes('error') ? '#721c24' : '#155724',
              borderRadius: '8px',
              textAlign: 'center',
              border: submitMessage.includes('error') ? '1px solid #f5c6cb' : '1px solid #c3e6cb',
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              {submitMessage}
            </div>
          )}
        </form>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: isMobile ? '20px' : '30px',
          borderRadius: '15px',
          textAlign: 'left',
          marginTop: '40px'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>Contact Info</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '30px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div>
              <strong style={{ color: '#333', fontSize: '1.1rem' }}>📧 Email:</strong>
              <span style={{ color: '#666', marginLeft: '10px', fontSize: '1rem' }}>{contactInfo.email}</span>
            </div>
            <div>
              <strong style={{ color: '#333', fontSize: '1.1rem' }}>📍 Location:</strong>
              <span style={{ color: '#666', marginLeft: '10px', fontSize: '1rem' }}>Jhansi, India</span>
            </div>
          </div>
        </div>
        
        <footer style={{
          marginTop: '60px',
          padding: '20px 0',
          borderTop: '2px solid #e9ecef',
          color: '#666',
          fontSize: '1rem'
        }}>
          <p>Thank you for visiting my portfolio website. Connect with me over socials.</p>
          <p style={{ fontWeight: 'bold', color: '#667eea' }}>Keep Rising 🚀</p>
          <p style={{ fontSize: '0.9rem', marginTop: '20px' }}>
            Designed with ❤️ by Sharad Jha
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
