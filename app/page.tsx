import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';

export default function HomePage() {
  return (
    <>
      <HeroImageRight />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
