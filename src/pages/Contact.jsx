
import React from 'react';
import { Mail, Instagram, Linkedin,GitHub, Send ,Facebook} from 'react-feather';
import portfolioData from '../data/Data.js'; 

const SocialCard = ({ href, icon, title, description, buttonText, gradient }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`block p-6 rounded-xl text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${gradient}`}>
        <div className="flex justify-between items-center">
            <div>
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-sm opacity-80 mt-1">{description}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
                {icon}
            </div>
        </div>
        <div className="mt-4 inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors">
            <span>{buttonText}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
    </a>
);

const Contact = () => {
    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
            
            <div className="pb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Let's get in touch</p>
            </div>

            <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />

            <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Find me on social media</h3>
                
                <SocialCard 
                    href="mailto:adelfarizi182@gmail.com"
                    icon={<Mail size={32} />}
                    title="Stay in Touch"
                    description="Reach out via email for any inquiries or collaborations."
                    buttonText="Go to Gmail"
                    gradient="bg-gradient-to-br from-red-500 to-red-700"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <SocialCard 
                        href="https://www.instagram.com/nofalfrzi/"
                        icon={<Instagram size={32} />}
                        title="Follow My Journey"
                        description="Stay updated with my latest posts and stories on Instagram."
                        buttonText="Go to Instagram"
                        gradient="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
                    />
                    <SocialCard 
                        href="www.linkedin.com/in/adelnovalalfarizi"
                        icon={<Linkedin size={32} />}
                        title="Let's Connect"
                        description="Connect for collaboration or explore my professional experience."
                        buttonText="Go to Linkedin"
                        gradient="bg-gradient-to-br from-blue-400 to-blue-600"
                    />
                    <SocialCard 
                        href="https://www.tiktok.com/@nofarzi"
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-2.14.03 1.38.01 2.75.02 4.12-.01 1.88-.35 3.73-1.12 5.41-.81 1.73-2.1 3.25-3.64 4.33-1.02.73-2.22 1.14-3.48 1.25-1.23.08-2.48-.19-3.54-.81-1.07-.61-1.9-1.53-2.4-2.65-.18-.38-.35-.76-.49-1.17-.06-.23-.09-.46-.12-.69-.03-.3-.04-.6-.04-.9.01-.33.01-.66.04-.99.09-1.07.38-2.13.82-3.12 1.06-2.36 3.22-4.28 5.74-5.12 1.33-.45 2.7-.68 4.07-.74.04-1.38.02-2.76.01-4.14Z"></path></svg>}
                        title="Join the Fun"
                        description="Follow me on TikTok for entertaining and engaging content."
                        buttonText="Go to Tiktok"
                        gradient="bg-gradient-to-br from-gray-800 to-black"
                    />
                    <SocialCard 
                        href="https://github.com/Biggze"
                        icon={<GitHub size={32} />}
                        title="Explore the Code"
                        description="Explore the source code for all my projects on GitHub."
                        buttonText="Go to Github"
                        gradient="bg-gradient-to-br from-gray-700 to-gray-900"
                    />
                </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Or send me a message</h3>
                <form action="#" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <input type="text" name="name" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Name" />
                        </div>
                        <div>
                            <input type="email" name="email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Email" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <textarea name="message" rows="5" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Message"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center mx-auto">
                            <Send size={16} className="mr-2" />
                            Send Email
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;
