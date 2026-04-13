'use client';

import { useEffect } from 'react';
import Navbar from './Navbar';
import FloatingActions from './FloatingActions';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <FloatingActions />
      {children}
    </>
  );
}
