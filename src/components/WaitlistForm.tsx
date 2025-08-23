// file: src/components/WaitlistForm.tsx
'use client';

import { FormEvent, useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    alert(`Thank you! ${email} has been added to our private beta waitlist.`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="w-full px-5 py-3 bg-[var(--color-content)] border border-gray-700 rounded-[var(--rounded-soft)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow duration-300"
      />
      <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[var(--color-primary)] text-white font-bold rounded-[var(--rounded-soft)] whitespace-nowrap hover:bg-red-800 transition-colors duration-300">
        Join the Waitlist
      </button>
    </form>
  );
}