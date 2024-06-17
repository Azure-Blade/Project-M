import QuotesButton from '@/components/QuotesButton';

export default function Page() {
  return (
    <section className="flex flex-col items-center  flex-1 justify-center">
      <span className="text-3xl ">Welcome to</span>
      <h1 className="text-5xl tracking-widest font-extrabold">
        Daily Motivational Quotes
      </h1>
      <div className="p-24 flex flex-col items-center">
        <QuotesButton />
      </div>
    </section>
  );
}
