import { IconBrandNextjs } from '@irsyadadl/paranoid';
import Link from 'next/link';
import React from 'react'

export default function AppLogo() {
  return (
    <Link
      href="/"
      className="flex items-center font-semibold text-primary space-x-1">
      <IconBrandNextjs className="w-8 h-8" />
      <span className='md:text-base text-lg'>Zannns</span>
    </Link>
  );
}
