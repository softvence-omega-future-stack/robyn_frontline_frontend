import Areas from "@/components/home/Areas";
import HomeBanner from "@/components/home/HomeBanner";
import Objective from "@/components/home/Objective";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <Services/>
      <Objective/>
      <Areas/>
    </div>
  );
}
