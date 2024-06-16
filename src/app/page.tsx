import QuotesButton from "@/components/QuotesButton";

export default function Page() {
  return (
    <>
      <section className="font-sans flex flex-col bg-background">
        <h1 className="flex justify-center pt-16 pb-12 text-xl">Welcome to</h1>
        <div className="flex justify-center text-5xl leading-tight flex-col items-center">
          <p>Daily</p>
          <p>Motivational</p>
          <p>Quotes</p>
          <div className="p-24 flex flex-col items-center">
            <QuotesButton></QuotesButton>
          </div>
        </div>
      </section>
    </>
  );
}
