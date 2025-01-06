'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container py-8 md:py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Get in Touch
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              <span className="text-pink-500">Contact</span>{' '}
              <span className="text-purple-500">Information</span>
            </h2>

            <div className="space-y-4 text-gray-200">
              <p className="flex items-start">
                <span className="block">
                  #St 8BT, Somkosal II, Boeng Tumpun, Mean Cheay, Phnom Penh
                </span>
              </p>

              <p className="flex items-center">
                <span>(+855) 15607950</span>
              </p>

              <p className="flex items-center">
                <span>humsopha@gmail.com</span>
              </p>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/SophaHum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sopha-hum-2a8b0b1b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-purple-500">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
