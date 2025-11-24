import Areas from "@/components/home/Areas";
import AttorneyFeedback from "@/components/home/AttorneyFeedback";
import Credentials from "@/components/home/Credentials";
import HomeBanner from "@/components/home/HomeBanner";
import HowEngagement from "@/components/home/HowEngagement";
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
      <AttorneyFeedback/>
      <HowEngagement/>
    </div>
  );
}
