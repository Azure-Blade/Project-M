import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/index';
import { quotes } from '@/db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch all quotes
        const allQuotes = await db.select({
            content: quotes.content,
            author: quotes.author
        }).from(quotes);

        // Select a random quote
        if (allQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * allQuotes.length);
            const randomQuote = allQuotes[randomIndex];
            res.status(200).json(randomQuote);
        } else {
            res.status(404).json({ error: "No quotes found" });
        }
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        res.status(500).json({ error: "Failed to fetch quote" });
    }
}
