import { db } from "@/db/index";
import { quotes } from "@/db/schema";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
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

            return new Response(JSON.stringify(randomQuote) )
        } else {
            return new Response("Error", {
                status: 403
            })
        }
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        return new Response("Error" , {
            status: 500
        })
    }
}