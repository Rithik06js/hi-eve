import React from 'react';
import { HexagonGrid } from './HexagonGrid';
import { StarField } from './StarField';
import { WaveEffect } from './WaveEffect';

export const AnimatedBackground: React.FC = () => (
  <>
    <StarField />
    <HexagonGrid />
    <WaveEffect />
  </>
);