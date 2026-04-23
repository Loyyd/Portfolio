import catboticaBg from '../assets/images/projects/catbotica/catbotica-bg.webp';
import catboticaPromoBackground from '../assets/images/projects/catbotica/catbotica-promo-background.jpg';
import catboticaLogoWhite from '../assets/images/projects/catbotica/catbotica-logo-white.png';
import catboticaWebsiteButton from '../assets/images/projects/catbotica/catbotica-website-button.png';
import catboticaDiscordButton from '../assets/images/projects/catbotica/catbotica-discord-button.png';
import gunTurretThumbnail from '../assets/images/features/gun-turret-thumbnail.jpg';
import spiderModelingThumbnail from '../assets/images/features/spider-modeling-thumbnail.webp';
import counterPlatformBackground from '../assets/images/projects/accounta/counter.png';
import profileImage from '../assets/images/profile.jpg';
import galleryTitan from '../assets/images/gallery_pictures/Titan-Pilot.jpg';
import gallerySuperbodies from '../assets/images/gallery_pictures/SuperbodiesV08.jpg';
import galleryCreature from '../assets/images/gallery_pictures/TZOG2817_web.jpg';
import blenderLogo from '../assets/logos/blender_logo.png';
import substanceLogo from '../assets/logos/substance.webp';
import unityLogo from '../assets/logos/unity-badge.svg';
import trailerVideo from '../assets/videos/trailer.mp4';
import kineticRushVideo from '../assets/videos/kinetic-rush-challenge.mp4';
import makingWebgameVideo from '../assets/videos/making-a-3d-webgame.mp4';
import cosmicWatersTrailerVideo from '../assets/videos/cosmic-waters-game-jam.mp4';
import definitelyNotLegoChaosVideo from '../assets/videos/definitely-not-lego-chaos.mp4';
import neilosSneakPeekVideo from '../assets/videos/neilos-catbotica-sneak-peek.mp4';

export const portfolioPages = {
  '/about': {
    label: 'About',
    eyebrow: 'About',
    title: 'Konrad Kunkel.',
    intro:
      'I work across 3D art, game projects, and frontend builds, with a focus on strong atmosphere, interactive presentation, and polished visual storytelling.',
    heroImage: profileImage,
    heroActions: [
      {
        path: '/3d',
        eyebrow: '3D',
        label: 'Enter Gallery',
        variant: 'hero-nav-button--solid',
      },
      {
        path: '/coding',
        eyebrow: 'Coding',
        label: 'View Projects',
        variant: 'hero-nav-button--outline',
      },
    ],
    sections: [
      {
        theme: 'midnight',
        kicker: 'Overview',
        heading: 'A portfolio built around visual craft, playable ideas, and product-focused execution.',
        copy:
          'This page gives a quick read on the main areas I work in, so visitors can get context before moving deeper into the 3D, Gamedev, or Coding sections.',
        cards: [
          {
            title: '3D Art',
            meta: 'Lookdev + Worldbuilding',
            image: galleryTitan,
            description:
              'Cinematic stills, creature work, modeling studies, and atmosphere-first visual storytelling.',
          },
          {
            title: 'Gamedev',
            meta: 'Playable Worlds',
            image: catboticaBg,
            description:
              'Prototypes, game jam collaborations, and interactive environments built around mood and exploration.',
          },
          {
            title: 'Coding',
            meta: 'Frontend + Tools',
            image: counterPlatformBackground,
            description:
              'Interfaces and technical builds shaped by both product thinking and visual presentation.',
          },
        ],
      },
    ],
  },
  '/3d': {
    label: '3D',
    eyebrow: '3D Direction',
    title: 'Cinematic 3D Worlds.',
    intro:
      'A 3D-focused gallery page built around creature work, cinematic stills, and environment-heavy presentation.',
    heroVideo: trailerVideo,
    heroActions: [
      {
        path: '/3d',
        eyebrow: '3D',
        label: 'Enter Gallery',
        variant: 'hero-nav-button--solid',
      },
      {
        path: '/coding',
        eyebrow: 'Coding',
        label: 'View Projects',
        variant: 'hero-nav-button--outline',
      },
    ],
    stats: ['Lookdev', 'Creature Frames', 'Cinematic Stills'],
    sections: [
      {
        type: 'feature',
        theme: 'ember',
        kicker: 'Featured Build',
        heading: 'Gun Turret Thunder',
        copy:
          'A hard-surface turret study focused on layered mechanics, believable weight, and a more cinematic final presentation. This section uses the thumbnail as a full background so the project gets a stronger hero moment before the wider gallery begins.',
        backgroundImage: gunTurretThumbnail,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch On YouTube',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=Konrad+Kunkel+gun+turret+3D',
      },
      {
        type: 'feature',
        theme: 'steel',
        kicker: 'Motion Challenge',
        heading: 'Kinetic Rush',
        copy:
          'A high-energy animation challenge focusing on dynamic camera movement, fluid character physics, and the visual weight of momentum in a 3D space.',
        backgroundVideo: kineticRushVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch On YouTube',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=Konrad+Kunkel+3D+Kinetic+Rush',
      },
      {
        type: 'feature',
        theme: 'ember',
        kicker: 'Animation Clash',
        heading: 'LEGO Madara vs Might Guy',
        copy:
          'A brick-built fight beat with stronger silhouette reads, quick impact posing, and a more playful action rhythm. This section uses the MP4 as a full background so the animation lands like a proper showcase moment inside the 3D page.',
        backgroundVideo: definitelyNotLegoChaosVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Search On YouTube',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=LEGO+Madara+vs+Might+Guy+Animation',
      },
      {
        type: 'feature',
        theme: 'steel',
        kicker: 'Featured Build',
        heading: 'Spider Modeling',
        copy:
          'A creature-driven modeling piece built around silhouette, surface detail, and the uneasy visual tension that makes spider designs memorable. The background treatment gives this project its own dedicated spotlight section.',
        backgroundImage: spiderModelingThumbnail,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Open YouTube',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=Konrad+Kunkel+spider+modeling',
      },
      {
        theme: 'midnight',
        kicker: 'Software',
        layout: 'software-strip',
        heading: 'The software that I use',
        cards: [
          {
            title: 'Blender',
            meta: 'Modeling + Animation',
            image: blenderLogo,
            fit: 'contain',
            url: 'https://www.blender.org/',
          },
          {
            title: 'Substance Painter',
            meta: 'Texturing + Materials',
            image: substanceLogo,
            fit: 'contain',
            url: 'https://www.adobe.com/products/substance3d-painter.html',
          },
          {
            title: 'Unity',
            meta: 'Real-Time Presentation',
            image: unityLogo,
            fit: 'contain',
            url: 'https://unity.com/',
          },
        ],
      },
    ],
  },
  '/gamedev': {
    label: 'Gamedev',
    eyebrow: 'Game Worlds',
    title: 'Playable Worlds.',
    intro:
      'Game projects, prototypes, and worldbuilding collected into a tighter, more cinematic showcase.',
    heroImage: catboticaBg,
    heroActions: [
      {
        path: '/gamedev',
        eyebrow: 'Gamedev',
        label: 'See Projects',
        variant: 'hero-nav-button--solid',
      },
      {
        path: '/about',
        eyebrow: 'About',
        label: 'Meet Konrad',
        variant: 'hero-nav-button--outline',
      },
    ],
    stats: ['Prototypes', 'Pitch Art', 'Launch Assets'],
    sections: [
      {
        type: 'feature',
        theme: 'ocean',
        kicker: 'Playable Prototype',
        heading: 'Enter The Build',
        copy:
          'A fast-opening prototype section built to feel more like a playable world reveal than a devlog. The camera motion, environment framing, and in-engine energy make this a stronger first impression for the Gamedev page.',
        backgroundVideo: makingWebgameVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch Prototype',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=Konrad+Kunkel+making+a+3D+webgame',
      },
      {
        type: 'feature',
        theme: 'sunset',
        kicker: 'Game Jam Project',
        heading: 'Cosmic Waters',
        copy:
          'A trailer section for Cosmic Waters, an Epic Games game jam project I worked on with friends. This keeps the Gamedev page focused on collaborative game work with a second full-bleed showcase moment.',
        backgroundVideo: cosmicWatersTrailerVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch Trailer',
        youtubeUrl: '#',
      },
      {
        type: 'feature',
        theme: 'forest',
        kicker: 'Catbotica Peek',
        heading: 'Neilos: Former Home of the Catbots',
        copy:
          "A look into the environmental storytelling and level design for Neilos, the ancestral home of the Catbots. This experiment focuses on building atmospheric depth and visual history within a playable space for the Catbotica universe.",
        backgroundVideo: neilosSneakPeekVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch Sneak Peek',
        youtubeUrl:
          'https://www.youtube.com/results?search_query=Catbotica+Neilos+Sneak+Peek',
      },
      {
        type: 'feature',
        theme: 'ocean',
        kicker: 'Catbotica Promo',
        heading: 'Catbotica',
        copy:
          'A direct promo band for the Catbotica universe, focused on the hand-drawn generative collection, its story world, and the community around it. This section mirrors the Motiontonic promo with the same backdrop and the same two destination buttons.',
        backgroundImage: catboticaPromoBackground,
        brandImage: catboticaLogoWhite,
        brandImageAlt: 'Catbotica',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'Catbotica Website',
            url: 'https://catbotica.com',
            image: catboticaWebsiteButton,
          },
          {
            label: 'Catbotica Discord',
            url: 'https://discord.gg/catbotica',
            image: catboticaDiscordButton,
          },
        ],
      },
    ],
  },
  '/coding': {
    label: 'Coding',
    eyebrow: 'Coding Work',
    title: 'Product builds, finance tools, and interactive platforms with a cleaner showcase focus.',
    intro:
      'A coding page centered on standout shipped work, with room for platform screenshots, product framing, and clearer project context.',
    heroImage: profileImage,
    heroActions: [
      {
        path: '/coding',
        eyebrow: 'Coding',
        label: 'View Projects',
        variant: 'hero-nav-button--solid',
      },
      {
        path: '/about',
        eyebrow: 'About',
        label: 'About Konrad',
        variant: 'hero-nav-button--outline',
      },
    ],
    stats: ['Frontend', 'Tools', 'Creative Tech'],
    sections: [
      {
        type: 'feature',
        theme: 'midnight',
        kicker: 'Finance Platform',
        heading: 'Counter',
        copy:
          'An accounting platform built to help users track finances, organize records, and get a clearer view of their money in one interface. This section uses the product screen as a full background so the coding page opens on a more concrete software case study.',
        backgroundImage: counterPlatformBackground,
        mediaRatio: '16 / 9',
        youtubeLabel: 'View Project',
        youtubeUrl: '#',
      },
    ],
  },
};

export const portfolioPaths = Object.keys(portfolioPages);

export function normalizePath(pathname) {
  return portfolioPaths.includes(pathname) ? pathname : '/3d';
}
