import React, { useState } from 'react';
import { RumorInput } from './RumorInput';
import { RumorList } from './RumorList';

const RumorForum = () => {
  const [rumors, setRumors] = useState<{ text: string; likes: number; author: string }[]>([]);
  const [newRumor, setNewRumor] = useState('');
  const [authorName, setAuthorName] = useState('');

  const addRumor = () => {
    if (newRumor.trim() !== '') {
      const author = authorName.trim() !== '' ? authorName : 'Anonymous';
      setRumors([...rumors, { text: newRumor, likes: 0, author }]);
      setNewRumor('');
      setAuthorName('');
    }
  };

  const likeRumor = (index: number) => {
    const updatedRumors = [...rumors];
    updatedRumors[index].likes += 1;
    setRumors(updatedRumors);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Anonymous Rumor Forum</h1>
      <RumorInput
        newRumor={newRumor}
        setNewRumor={setNewRumor}
        authorName={authorName}
        setAuthorName={setAuthorName}
        addRumor={addRumor}
      />
      <RumorList rumors={rumors} likeRumor={likeRumor} />
    </div>
  );
};

export default RumorForum;
