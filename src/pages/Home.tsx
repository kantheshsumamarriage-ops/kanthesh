import React from 'react';
import HeroScrollytelling from '../components/HeroScrollytelling';
import Services from '../components/Services';
import ProblemAwareness from '../components/ProblemAwareness';
import ValueProposition from '../components/ValueProposition';
import Transparency from '../components/Transparency';
import Guarantee from '../components/Guarantee';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Quiz from '../components/Quiz';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="space-y-8">
      <HeroScrollytelling />
      <Services />
      <Quiz />
      <ProblemAwareness />
      <ValueProposition />
      <Transparency />
      <Guarantee />
      <BeforeAfter />
      <Gallery />
      <Process />
      <Partners />
      <Testimonials />
      <CTA />
    </main>
  );
}
