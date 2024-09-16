import React from 'react';

interface RumorInputProps {
  newRumor: string;
  setNewRumor: (value: string) => void;
  authorName: string;
  setAuthorName: (value: string) => void;
  addRumor: () => void;
}

export const RumorInput: React.FC<RumorInputProps> = ({
  newRumor,
  setNewRumor,
  authorName,
  setAuthorName,
  addRumor
}) => (
  <>
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Enter your rumor"
        value={newRumor}
        onChange={(e) => setNewRumor(e.target.value)}
        className="flex-grow mr-2"
      />
    </div>

    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Name (optional)"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        className="flex-grow mr-2"
      />
      <button onClick={addRumor}>Submit Rumor</button>
    </div>
  </>
);
