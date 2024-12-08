import Hero from "@/components/Hero/Hero";
import VideosContainer from "@/components/VideosContainer/VideosContainer";

export default function HomePage({ params: { lang } }) {
  return (
    <>
      <Hero />
      <VideosContainer lang={lang} />
    </>
  );
}
