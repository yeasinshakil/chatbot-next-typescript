import Header from "@/components/header/Header";
import HomeAnimation from "@/components/homeContent/HomeAnimation";
import SubscriptionPlan from "@/components/homeContent/SubscriptionPlan";

export default function Home() {
  return (
    <main className=" bg-white">
      <Header />
      <div className=" relative pt-14 isolate bg-header">
        <HomeAnimation />
        <SubscriptionPlan />
      </div>
      Chat Bot
    </main>
  );
}
