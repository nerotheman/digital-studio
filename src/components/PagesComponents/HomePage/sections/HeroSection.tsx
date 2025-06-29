import GradientHero from '@/components/GradientHero';
import { DEFAULT_PARTICLE_COLORS } from '@/components/GradientHero/constants';
import { PRIMARY_GRADIENT } from '@/lib/gradient-constants';
import heroImage from '../../../../../public/images/hero.webp';

const HeroSection = () => {
  return (
    <GradientHero
      title={
        <>
          Hemsidor som{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text !text-transparent [text-shadow:none]">
            funkar
          </span>{' '}
          på riktigt
        </>
      }
      description="Vi skapar skräddarsydda hemsidor som laddar snabbt, rankar på Google och hjälper småföretag i Uppsala att växa online."
      colorScheme="blue-purple"
      particleColors={DEFAULT_PARTICLE_COLORS}
      textAlign="left"
      minHeight="64vh"
      backgroundImage={{
        src: heroImage,
        alt: 'Datorskärm med datorkod i rörelse, som symboliserar modern webbutveckling och teknik.',
        priority: true,
      }}
      overlayOpacity={0.85}
      secondaryCTA={{
        text: 'Se vårt arbete',
        href: '#arbete',
        variant: 'ghost-hero',
      }}
      verticalCenter={true}
      showValueProposition={true}
    />
  );
};

export default HeroSection;
