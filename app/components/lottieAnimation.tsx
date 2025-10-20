'use client';

import Lottie from 'lottie-react';
import animationData from '../../public/animation/hero.json';

export default function LottieAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="w-full h-auto max-w-2xl mx-auto"
    />
  );
}
