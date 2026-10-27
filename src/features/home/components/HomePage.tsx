import { About } from "./About";
import { Achievements } from "./Achievements";
import { Causes } from "./Causes";
import { Hero } from "./Hero";
import { ImpactStats } from "./ImpactStats";
import { JoinUs } from "./JoinUs";
import { News } from "./News";
import { Partners } from "./Partners";
import { Projects } from "./Projects";
import { VisionMission } from "./VisionMission";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Causes />
      <ImpactStats />
      <Projects />
      <Achievements />
      <VisionMission />
      <News />
      <Partners />
      <JoinUs />
    </main>
  );
}
