'use client';

import Lottie from 'lottie-react';
import netflixLanding from './json/netflixLanding.json';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <Lottie
        animationData={netflixLanding}
        style={{ maxWidth: '100%' }}
        loop={false}
        onComplete={() => router.push('/home')}
      />
    </div>
  );
}
