import HeroSection from "@/components/fragments/HeroSection";
import Products from "@/components/fragments/ProductSection";
import Superiority from "@/components/fragments/SuperioritySection";
import Testimonial from "@/components/fragments/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* Section Hero */}
      <HeroSection />

      {/* Products Section */}
      <Products />

      {/* Superiority Section */}
      <Superiority />

      {/* Testimonial Section  */}
      <Testimonial />
    </>
  );
}
