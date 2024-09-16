import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RumorForum = () => {
  const [rumors, setRumors] = useState([]);
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

  const likeRumor = (index) => {
    const updatedRumors = [...rumors];
    updatedRumors[index].likes += 1;
    setRumors(updatedRumors);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Anonymous Rumor Forum</h1>
      
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter your rumor"
          value={newRumor}
          onChange={(e) => setNewRumor(e.target.value)}
          className="flex-grow mr-2"
        />
      </div>

      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Name (optional)"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={addRumor}>Submit Rumor</Button>
      </div>

      {rumors.map((rumor, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>{rumor.author}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{rumor.text}</p>
            <div className="flex items-center mt-2">
              <Button variant="outline" size="sm" onClick={() => likeRumor(index)}>
                <ThumbsUp className="mr-2 h-4 w-4" />
                {rumor.likes}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RumorForum;
