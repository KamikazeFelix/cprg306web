"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Student from './Student';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-5">Wanna Kill Your Time? - Test to get score!</h1>
        <p>We design and create fun quizzes, covering all kinds of questions. Hope that youll <b>have fun</b></p>
        <br/>
        <p className='flex flex-col items-center bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-300 transition duration-100'><Link href="quiz">Start Quiz!</Link></p>
        
        <Student />
      </div>
    </main>
  );
}
