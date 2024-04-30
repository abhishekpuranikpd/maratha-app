// components/ShareButton.js
import React from 'react';
import { Share } from 'lucide-react';

const ShareButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="ml-4 flex items-center text-indigo-500 hover:underline cursor-pointer"
        >
            <Share className="mr-1" size={20} />
            Share
        </button>
    );
};

export default ShareButton;
