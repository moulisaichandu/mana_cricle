"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="container simple-page"><h1>A small interruption.</h1><p>This page couldn’t load. Please try again.</p><button className="button" onClick={reset}>Try again</button></section>;
}
