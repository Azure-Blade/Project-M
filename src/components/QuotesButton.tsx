'use client';

import { useState } from 'react';

type Quote = {
  content: string;
  author: string;
};

type Props = {
  className?: string;
};
export default function QuotesButton({ className }: Props) {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('/api/v1/quote/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Quote = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  return (
    <>
      <button
        className="btn glass bg-pink-900 max-w-48 flex items-center justify-center"
        onClick={fetchQuote}
      >
        Generate quote
      </button>
      {quote && (
        <div className="mt-4 p-4 glass rounded shadow">
          {/* When writing something like quote "", in html it is considered bad syntax (even if browsers do render it properly stay way from it!) */}
          {/* Instead use the special characters combination in order to achieve the same result, like the &ldquo; */}
          {/* https://www.w3.org/wiki/Common_HTML_entities_used_for_typography */}
          <p className="text-lg italic">&ldquo;{quote.content}&ldquo;</p>
          <p className="text-right font-bold">- {quote.author}</p>
        </div>
      )}
    </>
  );
}
