import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSolution from '../components/home/ProblemSolution';
import SciencePreview from '../components/home/SciencePreview';
import PatientOwnership from '../components/home/PatientOwnership';
import RoadmapPreview from '../components/home/RoadmapPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <SciencePreview />
      <RoadmapPreview />
      <PatientOwnership />
      <CTASection />
    </>
  );
}
