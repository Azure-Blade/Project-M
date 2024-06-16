import { db, schema } from "@/db/index";
import QuotesButton from "@/components/QuotesButton";
import { Content } from "next/font/google";

export default async function Page() {
//   const quotes = await db.query.quotes.findMany();
  const result = await db.select({
    id: schema.quotes.id,
    content: schema.quotes.content
  }).from(schema.quotes)

  const { id, content } = result[0]

  console.log(content)

  return (
    <>
      <section>
        <h1>Quote generator</h1>
        <QuotesButton />
      </section>
    </>
  );
}
