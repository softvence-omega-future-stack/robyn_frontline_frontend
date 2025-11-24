import Areas from "@/components/home/Areas";
import Credentials from "@/components/home/Credentials";
import HomeBanner from "@/components/home/HomeBanner";
import Objective from "@/components/home/Objective";
import SelectedCase from "@/components/home/SelectedCase";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <Services/>
      <Objective/>
      <Areas/>
      <Credentials/>
      <SelectedCase/>
    </div>
  );
}
