import React from 'react';
import { RumorCard } from './RumorCard';

interface RumorListProps {
  rumors: { text: string; likes: number; author: string }[];
  likeRumor: (index: number) => void;
}

export const RumorList: React.FC<RumorListProps> = ({ rumors, likeRumor }) => (
  <>
    {rumors.map((rumor, index) => (
      <RumorCard key={index} rumor={rumor} index={index} likeRumor={likeRumor} />
    ))}
  </>
);
