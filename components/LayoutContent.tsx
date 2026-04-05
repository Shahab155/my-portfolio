'use client';

import { useEffect } from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import FloatingActions from './FloatingActions';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <FloatingActions />
      {children}
    </>
  );
}
