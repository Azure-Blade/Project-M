"use client";

import { useState } from "react";

// Define the type for the quote object
interface Quote {
  content: string;
  author: string;
}

export default function QuotesButton() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch("/api/randomQuote");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Quote = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
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
          <p className="text-lg italic">"{quote.content}"</p>
          <p className="text-right font-bold">- {quote.author}</p>
        </div>
      )}
    </>
  );
}
