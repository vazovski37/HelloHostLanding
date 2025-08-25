// file: src/components/WaitlistForm.tsx
'use client';

import { FormEvent, useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setMessage(`Success! ${email} has been added. We'll be in touch!`);
      setEmail('');

    } catch (err: any) {
      setIsError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={isSubmitting}
          className="w-full px-5 py-3 bg-[var(--color-content)] border border-gray-700 rounded-[var(--rounded-soft)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow duration-300 disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-[var(--color-primary)] text-white font-bold rounded-[var(--rounded-soft)] whitespace-nowrap hover:bg-red-800 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${isError ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </>
  );
}