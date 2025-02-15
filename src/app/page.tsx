import { HeroSection } from "@/components/layuout/hero-section";
import { ProblemStatement } from "@/components/sections/problem-statement";
import { Statistics } from "@/components/sections/statistics";
import { WhyRetention } from "@/components/sections/why-retention";
import { EmployeeExperience } from "@/components/sections/employee-experience";
import { UniqueApproach } from "@/components/sections/unique-approach";
import { KeyBenefits } from "@/components/sections/key-benefits";
import { ManagerImpact } from "@/components/sections/manager-impact";
import { Results } from "@/components/sections/results";
import { MissionSolutions } from "@/components/sections/mission-solutions";
import { CTA } from "@/components/sections/cta";
import { RetentionPriority } from "@/components/sections/retention-priority";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemStatement />
      <RetentionPriority />
      <Statistics />
      <EmployeeExperience />
      {/* <WhyRetention /> */}
      <UniqueApproach />
      <KeyBenefits />
      <ManagerImpact />
      <Results />
      <MissionSolutions />
      <CTA />
    </main>
  );
}
