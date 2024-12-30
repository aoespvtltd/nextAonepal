import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocateIcon, Mail } from 'lucide-react';
import React from 'react';

function AddressBar() {
  return (
    <div className="md:flex hidden justify-between items-center p-2 text-black border-b border-gray-300 px-20">
      {/* Contact Information */}
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Mail className="text-gray-600" />
          <span className="text-sm">alphaomegaengsol@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <LocateIcon className="text-gray-600" />
          <span className="text-sm">Kathmandu, Nepal</span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 text-blue-600">
        <a href="https://www.facebook.com/alphaomegaengsol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-800">
          <FontAwesomeIcon icon={faFacebook} className="text-lg" />
        </a>
        <a href="https://www.youtube.com/@alphaomegaengsol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-600">
          <FontAwesomeIcon icon={faYoutube} className="text-lg" />
        </a>
        <a href="https://www.instagram.com/alphaomegaengsol/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500">
          <FontAwesomeIcon icon={faInstagram} className="text-lg" />
        </a>
        <a href="https://www.linkedin.com/in/alphaomegaengsol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700">
          <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
        </a>
      </div>
    </div>
  );
}

export default AddressBar;
