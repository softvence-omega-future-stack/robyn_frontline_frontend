import Footer from "@/components/Footer";
import Areas from "@/components/home/Areas";
import AttorneyFeedback from "@/components/home/AttorneyFeedback";
import Credentials from "@/components/home/Credentials";
import Faq from "@/components/home/Faq";
import HomeBanner from "@/components/home/HomeBanner";
import HowEngagement from "@/components/home/HowEngagement";
import Objective from "@/components/home/Objective";
import RequestCase from "@/components/home/RequestCase";
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
      <Faq/>
      <RequestCase/>
      <Footer/>
    </div>
  );
}
