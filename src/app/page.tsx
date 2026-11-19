import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThematicWeeks from "@/components/ThematicWeeks";
import MenuPhotoGallery from "@/components/MenuPhotoGallery";
import Menu from "@/components/Menu";
import Atmosphere from "@/components/Atmosphere";
import Contacts from "@/components/Contacts";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThematicWeeks />
        <MenuPhotoGallery />
        <Menu />
        <Atmosphere />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
