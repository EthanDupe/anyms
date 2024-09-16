import React from 'react';

interface RumorCardProps {
  rumor: { text: string; likes: number; author: string };
  index: number;
  likeRumor: (index: number) => void;
}

export const RumorCard: React.FC<RumorCardProps> = ({ rumor, index, likeRumor }) => (
  <div className="card mb-4" key={index}>
    <div>
      <h3>{rumor.author}</h3>
    </div>
    <div>
      <p>{rumor.text}</p>
      <div className="flex items-center mt-2">
        <button className="outline" onClick={() => likeRumor(index)}>
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-3 3 3 3m0-6l3 3-3 3"></path>
          </svg>
          {rumor.likes}
        </button>
      </div>
    </div>
  </div>
);
