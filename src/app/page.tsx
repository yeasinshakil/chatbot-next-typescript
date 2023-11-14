import Header from "@/components/header/Header";
import HomeAnimation from "@/components/homeContent/HomeAnimation";

export default function Home() {
  return (
    <main className=" bg-white">
      <Header />
      <div className=" relative pt-14 isolate bg-header">
        <HomeAnimation />
      </div>
      Chat Bot
    </main>
  );
}
