import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto text-center">
                <div className="mt-4">
                    <a
                        href="https://www.linkedin.com/in/iustin-burlacu-0b4457183/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white mr-4"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Iustin-Burlacu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
