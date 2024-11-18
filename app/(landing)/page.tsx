// import { ComingSoon } from "@/app/(coming-soon)/coming-soon";
// import { DemoSection } from "@/app/(landing)/_sections/demo";
// import { FaqSection } from "@/app/(landing)/_sections/faq";
// import { FeaturesSection } from "@/app/(landing)/_sections/features";
// import { NewsletterSection } from "@/app/(landing)/_sections/newsletter";
// import { PricingSection } from "@/app/(landing)/_sections/pricing";
// import { TestimonalsSection } from "@/app/(landing)/_sections/testimonals";
// import { TheProblemSection } from "@/app/(landing)/_sections/the-problem";

import { appConfig } from "@/constants/app-config";
import Hero from "./_sections/hero";
import NavLandingMain from "@/components/layout/header";
import Pricing from "./_sections/pricing";
import Marquee from "@/components/marquee";
import Container from "@/components/layout/container";
import AnimatedImage from "@/components/animated-image";
import DotPattern from "@/components/dot-pattern";

// import { getUserPlanUseCase } from "@/use-cases/subscriptions";
// import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  if (appConfig.mode === "soon") {
    return <>dwd</>;
  }

  if (appConfig.mode === "maintenance") {
    return (
      <div>
        <h1>Maintenance</h1>
      </div>
    );
  }

  if (appConfig.mode === "live") {
    // const user = await getCurrentUser();
    // const hasSubscription = user
    //   ? (await getUserPlanUseCase(user.id)) !== "free"
    //   : false;

    return (
      <main className="bg-white">
        <NavLandingMain />
        <Hero />
        <Container>
          <Marquee
            content={[
              { id: 1, image: "/logos/logoipsum-255.svg", name: "Google" },
              { id: 2, image: "/logos/logoipsum-264.svg", name: "Apple" },
            ]}
          />
        </Container>
        <Container className="relative">
          <DotPattern className="bg-[radial-gradient(97.14%_56.45%_at_51.63%_0%,_#ffffff_0%,_#ffffff_30%,_#ffffff_100%)]" />
          <AnimatedImage
            src="/image.webp"
            alt="Image"
            width={1200}
            height={900}
            className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg"
          />
        </Container>
        <Pricing />
      </main>
    );
  }
}
