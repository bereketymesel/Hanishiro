import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/Logo.png';

const contactuslink = [
    { title: 'Home', link: '/#' },
    { title: 'About', link: '/About' },
    { title: 'Contact', link: '/Contact' },
    { title: 'Blog', link: '/Blog' },
];

const AdditionalLinks = [
    { title: 'Privacy Policy', link: '/PrivacyPolicy' },
    { title: 'Terms of Service', link: '/TermsOfService' },
    { title: 'FAQ', link: '/FAQ' },
];

const ContactUs = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div ref={ref}>
            <div className='container grid md:grid-cols-3 pb-20 pt-5 bg-yellow-400'>
                <div className='py-8 px-4'>
                    <img src={Logo} alt='Logo' className='w-40 h-40' />
                    <div className='space-y-5'>
                        <p className='pt-4 opacity-60'>Unforgettable moment your perfect</p>
                        <div>
                            <a href='https://www.youtube.com/watch?v=GbQTgWdUeR0' target='_blank' rel='noopener noreferrer' className='primary-btn'>
                                Visit YouTube Channel
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 grid grid-cols-3 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4 text-left'>
                        <h1 className='text-xl font-semibold sm:text-left mb-5'>Company Address</h1>
                        <p>KARAQORE</p>
                        <p>ADISSABAB</p>
                        <p>Phone: (251) 910502802</p>
                        <p>Email: HANISHIRO@gmail.com</p>
                        <div className='flex space-x-4 pt-4'>
                            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="https://www.facebook.com/bereket.yemsel" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-2 py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-5'>Contact Us</h1>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium'>Name</label>
                                <input 
                                    type='text' 
                                    name='name' 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
                                    required 
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium'>Email</label>
                                <input 
                                    type='email' 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
                                    required 
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium'>Subject</label>
                                <input 
                                    type='text' 
                                    name='subject' 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
                                    required 
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium'>Comment</label>
                                <textarea 
                                    name='comment' 
                                    value={formData.comment} 
                                    onChange={handleChange} 
                                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md' 
                                    rows='4' 
                                    required 
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type='submit' 
                                    className='primary-btn mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200'>
                <div className='text-xs md:text-sm container p-4 flex justify-between'>
                    <p>@2024 all rights reserved inc</p>
                    <div className='flex justify-center items-center gap-3'>
                        <a href='#'>Privacy</a>
                        <a href='#'>Accessibility</a>
                        <a href='#'>Terms</a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ContactUs;
