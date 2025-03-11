import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import Button from './Button';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactCard from './ContactCard';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email me',
      content: 'martinezannemerlyn@gmail.com',
      link: 'mailto:martinezannemerlyn@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      title: 'Message me',
      content: 'linkedin.com/in/anne-merlyn-martinez',
      link: 'https://www.linkedin.com/in/anne-merlyn-martinez',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-center text-xl mb-2">Get In Touch</h4>
        <h2
          className={`text-4xl font-bold mb-8 text-center ${getThemeClasses(
            theme,
            'text-sky-400',
            'text-sky-500'
          )}`}
        >
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-4">
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                icon={contact.icon}
                title={contact.title}
                content={contact.content}
                link={contact.link}
              />
            ))}
          </div>
          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 ${getThemeClasses(
                    theme,
                    'text-gray-300',
                    'text-gray-700'
                  )}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md ${getThemeClasses(
                    theme,
                    'bg-gray-800 border border-gray-700 text-white',
                    'bg-white border border-gray-300 text-gray-900'
                  )}`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 ${getThemeClasses(
                    theme,
                    'text-gray-300',
                    'text-gray-700'
                  )}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md ${getThemeClasses(
                    theme,
                    'bg-gray-800 border border-gray-700 text-white',
                    'bg-white border border-gray-300 text-gray-900'
                  )}`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 ${getThemeClasses(
                    theme,
                    'text-gray-300',
                    'text-gray-700'
                  )}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full p-3 rounded-md ${getThemeClasses(
                    theme,
                    'bg-gray-800 border border-gray-700 text-white',
                    'bg-white border border-gray-300 text-gray-900'
                  )}`}
                />
              </div>

              <Button variant="primary" className="w-full" onClick={() => handleSubmit}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
