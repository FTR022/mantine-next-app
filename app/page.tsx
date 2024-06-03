import { FeaturesCards } from '../components/FeaturesCards/FeaturesCards';
import { HeroImageBackground } from '../components/HeroImageBackground';
import { FaqWithImage } from '../components/FaqWithImage';
import { GetInTouch } from '../components/GetInTouch/GetInTouch';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterCentered } from '../components/FooterCentered/FooterCentered';
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';
// import { ContactIcons } from '../components/GetInTouch/ContactIcons';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroImageBackground />
      <FeaturesCards />
      <FaqWithImage />
      <GetInTouch />
      <ColorSchemeToggle />
      <FooterCentered />

      {/* <ContactIcons /> */}
    </>
  );
}
