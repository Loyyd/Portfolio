import catboticaBg from '../assets/images/projects/catbotica/catbotica-bg.webp';
import catboticaLogoWhite from '../assets/images/projects/catbotica/catbotica_logo_white.webp';
import catboticaWebsiteButton from '../assets/images/projects/catbotica/Catbotica+Website.webp';
import catboticaDiscordButton from '../assets/images/projects/catbotica/Catbotica+Discord.webp';
import gunTurretThumbnail from '../assets/images/features/gun-turret-thumbnail.jpg';
import spiderModelingThumbnail from '../assets/images/features/spider-modeling-thumbnail.webp';
import accountaSectionBackground from '../assets/images/projects/accounta/accounta-background.png';
import aiDroneSectionBackground from '../assets/images/projects/ai-drone/drone-background.png';
import codingVscodeBackground from '../assets/images/projects/coding/coding-vscode-background.png';
import code8SectionBackground from '../assets/images/projects/code-8/code-8-background.jpg';
import netflixLogo from '../assets/images/projects/code-8/netflix-logo.png';
import gradeTrackerSectionBackground from '../assets/images/projects/grade-tracker/grade-tracker-background.png';
import holySongsSectionBackground from '../assets/images/projects/holy-songs/holy-songs-background.png';
import nullOrbitSectionBackground from '../assets/images/projects/null-orbit/orbit-background.png';
import subaquaWebsiteBackground from '../assets/images/projects/subaqua/subaqua-website-background.png';
import konradProfileImage from '../assets/images/profile/konrad-kunkel-profile.png';
import galleryTitan from '../assets/images/gallery_pictures/Titan-Pilot.jpg';
import blenderLogo from '../assets/logos/blender_logo.png';
import ciscoPacketTracerLogo from '../assets/logos/cisco-packet-tracer.png';
import davinciResolveStudioLogo from '../assets/logos/davinci-resolve-studio.png';
import cargonatorLogo from '../assets/logos/partners/cargonator.jpg';
import marianneLogo from '../assets/logos/partners/marianne.png';
import meshyLogo from '../assets/logos/partners/meshy.webp';
import motiontonicLogo from '../assets/logos/partners/motiontonic.webp';
import subaquaLogo from '../assets/logos/partners/subaqua.png';
import substanceLogo from '../assets/logos/substance.webp';
import unrealLogo from '../assets/logos/unreal.png';
import unityLogo from '../assets/logos/unity-badge.svg';
import visualStudioCodeLogo from '../assets/logos/visual-studio-code.png';
import trailerVideo from '../assets/videos/trailer.webm';
import chasmsCallRenderChallengeVideo from '../assets/videos/chasms-call-3d-render-challenge.webm';
import kineticRushVideo from '../assets/videos/kinetic-rush-challenge.webm';
import makingWebgameVideo from '../assets/videos/making-a-3d-webgame.webm';
import cosmicWatersTrailerVideo from '../assets/videos/cosmic-waters-game-jam.mp4';
import definitelyNotLegoChaosVideo from '../assets/videos/definitely-not-lego-chaos.webm';
import neilosSneakPeekVideo from '../assets/videos/neilos-catbotica-sneak-peek.webm';
import archerTowerDefenseVideo from '../assets/videos/projects/archer/archer-tower-defense.webm';
import dungeonGameplayVideo from '../assets/videos/projects/dungeon/dungeon-gameplay.webm';
import herosUnitedGameplayVideo from '../assets/videos/projects/heros-united/heros-united-gameplay.webm';

export const portfolioPages = {
  '/about': {
    label: 'About',
    eyebrow: 'About',
    title: 'Konrad Kunkel.',
    intro:
      'I work across 3D art, game projects, and frontend builds, with a focus on strong atmosphere, interactive presentation, and polished visual storytelling.',
    heroImage: galleryTitan,
    profileCard: {
      image: konradProfileImage,
      name: 'Konrad Kunkel',
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/konrad-kunkel-21a956256/',
    },
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
        kicker: 'Collaborations',
        layout: 'logo-carousel',
        heading: 'Collaborations and partners',
        copy:
          'A logo-led overview of collaborations, partnerships, and projects where I contributed across 3D work, visual storytelling, and interactive presentation.',
        cards: [
          {
            title: 'Netflix',
            meta: 'Feature Film Credit',
            image: netflixLogo,
            fit: 'contain',
          },
          {
            title: 'Catbotica',
            meta: 'Creative Collaboration',
            image: catboticaLogoWhite,
            fit: 'contain',
          },
          {
            title: 'Motiontonic',
            meta: 'Creative Production',
            image: motiontonicLogo,
            fit: 'contain',
          },
          {
            title: 'SubAqua',
            meta: 'University Website',
            image: subaquaLogo,
            fit: 'contain',
          },
          {
            title: 'Marianne',
            meta: 'Website Collaboration',
            image: marianneLogo,
            fit: 'contain',
          },
          {
            title: 'Cargonator',
            meta: 'Website Collaboration',
            image: cargonatorLogo,
            fit: 'contain',
          },
          {
            title: 'Meshy',
            meta: 'Brand Partnership',
            image: meshyLogo,
            fit: 'contain',
          },
        ],
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
          {
            title: 'Unreal Engine',
            meta: 'Realtime Worlds',
            image: unrealLogo,
            fit: 'contain',
            url: 'https://www.unrealengine.com/',
          },
          {
            title: 'DaVinci Resolve Studio',
            meta: 'Editing + Color',
            image: davinciResolveStudioLogo,
            fit: 'contain',
            url: 'https://www.blackmagicdesign.com/products/davinciresolve',
          },
          {
            title: 'Visual Studio Code',
            meta: 'Code + Tooling',
            image: visualStudioCodeLogo,
            fit: 'contain',
            url: 'https://code.visualstudio.com/',
          },
          {
            title: 'Cisco Packet Tracer',
            meta: 'Networking + Simulation',
            image: ciscoPacketTracerLogo,
            fit: 'contain',
            url: 'https://www.netacad.com/courses/packet-tracer',
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
        theme: 'violet',
        kicker: '3D Render Challenge',
        heading: "Chasm's Call",
        copy:
          'A stylized 3D render challenge built around atmosphere, scale, and a strong cinematic read. The piece focuses on using lighting, framing, and environment mood to sell the story of the scene quickly.',
        backgroundVideo: chasmsCallRenderChallengeVideo,
        mediaRatio: '12 / 5',
        youtubeLabel: 'Watch On YouTube',
        youtubeUrl: 'https://www.youtube.com/watch?v=1U2J-CP2zbw',
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
        youtubeUrl: 'https://www.youtube.com/watch?v=wqUFWX4iGIs',
      },
      {
        type: 'feature',
        theme: 'ember',
        kicker: 'Animation Clash',
        heading: 'LEGO Madara vs Might Guy',
        copy:
          'A brick-built fight beat with stronger silhouette reads, quick impact posing, and a more playful action rhythm. This section uses the MP4 as a full background so the animation lands like a proper showcase moment inside the 3D page.',
        backgroundVideo: definitelyNotLegoChaosVideo,
        mediaRatio: '24 / 11',
        youtubeLabel: 'Search On YouTube',
        youtubeUrl: 'https://www.youtube.com/watch?v=OilnHUUkruQ',
      },
      {
        type: 'feature',
        theme: 'copper',
        kicker: 'Feature Film VFX',
        heading: 'CODE 8 THE MOVIE',
        copy:
          'A feature-film VFX section based on the CODE 8 showcase from Motiontonic, reflecting the work I contributed there. This uses the same guardian background so the 3D page closes on a darker, more cinematic sci-fi moment.',
        backgroundImage: code8SectionBackground,
        brandImage: netflixLogo,
        brandImageAlt: 'Netflix',
        brandImageClass: 'feature-brand--netflix',
        showHeadingWithBrand: true,
        mediaRatio: '21 / 9',
        actions: [
          {
            label: 'Watch Now',
            url: 'https://www.youtube.com/watch?v=6Aq6ktl24Gw',
          },
          {
            label: 'IMDb Link',
            url: 'https://www.imdb.com/name/nm15871529/?ref_=fn_t_1',
          },
        ],
      },
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
        youtubeUrl: 'https://www.youtube.com/watch?v=8Ntr8HHRcfI&t=2s',
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
        youtubeUrl: 'https://www.youtube.com/watch?v=H0nOKLRfRjA&t=4s',
      },
      {
        type: 'feature',
        theme: 'ocean',
        kicker: '',
        heading: 'Catbotica',
        copy:
          'A direct promo band for the Catbotica universe, focused on the hand-drawn generative collection, its story world, and the community around it. This section mirrors the Motiontonic promo with the same backdrop and the same two destination buttons.',
        backgroundImage: catboticaBg,
        brandImage: catboticaLogoWhite,
        brandImageAlt: 'Catbotica',
        mediaRatio: '16 / 9',
        panelVariant: 'catbotica-promo',
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
        heading: 'Tankfall',
        copy:
          'A playable tank game prototype built to feel more like a world reveal than a devlog. The camera motion, environment framing, and in-engine energy make this a stronger first impression for the Gamedev page.',
        backgroundVideo: makingWebgameVideo,
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'Play Game',
            url: 'https://loyyd.github.io/tankfall/',
          },
          {
            label: 'Watch Breakdown',
            url: 'https://www.youtube.com/watch?v=aImgEKGhxXA&t=5s',
          },
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/tankfall',
          },
        ],
      },
      {
        type: 'feature',
        theme: 'ocean',
        kicker: 'Three.js Spacegame',
        heading: 'Null Orbit',
        copy:
          'A space game built with Three.js, focused on movement, atmosphere, and a more cinematic sci-fi feel in the browser. This section uses the project image as a full background so the game gets a proper opening showcase moment on the Gamedev page.',
        backgroundImage: nullOrbitSectionBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/null-orbit',
          },
          {
            label: 'Play Game',
            url: 'https://loyyd.github.io/null-orbit/',
          },
        ],
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
        actions: [
          {
            label: 'Watch Trailer',
            url: 'https://www.youtube.com/watch?v=2wKactSyGXM',
          },
          {
            label: 'Download Game',
            url: 'https://fbicactus.itch.io/cosmic-waters',
          },
        ],
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
        actions: [
          {
            label: 'Watch Trailer',
            url: 'https://www.youtube.com/watch?v=iwvbObmkbOM',
          },
        ],
      },
      {
        type: 'feature',
        theme: 'copper',
        kicker: 'Tower Defense',
        heading: 'Archer',
        copy:
          'A tower-defense game built around archer combat, defensive positioning, and wave-based pressure. This section uses the gameplay video as a full background so the project closes the Gamedev page with a more action-driven playable showcase.',
        backgroundVideo: archerTowerDefenseVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch On YouTube',
        youtubeUrl: 'https://www.youtube.com/watch?v=o-ja2FhzQNM',
      },
      {
        type: 'feature',
        theme: 'forest',
        kicker: 'Dungeon Game',
        heading: '3D Dungeon',
        copy:
          'A dungeon-focused game built around exploration, combat, and a darker playable atmosphere. This section uses the gameplay capture as a full background so the Gamedev page closes on a more enclosed, adventure-driven showcase moment.',
        backgroundVideo: dungeonGameplayVideo,
        mediaRatio: '16 / 9',
        youtubeLabel: 'Watch On YouTube',
        youtubeUrl: 'https://www.youtube.com/watch?v=LwQVaLcacq4',
      },
      {
        type: 'feature',
        theme: 'violet',
        kicker: 'Competition RPG',
        heading: 'Heros United',
        copy:
          'A 2D RPG created for a competition, focused on party-style combat, progression, and a more playful adventure tone. This section uses the gameplay capture as a full background so the Gamedev page ends on a different style of playable project.',
        backgroundVideo: herosUnitedGameplayVideo,
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'Watch Gameplay',
            url: 'https://www.youtube.com/watch?v=woRXvMam_Zc',
          },
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/Brackeys_GameJam',
          },
        ],
      },
    ],
  },
  '/coding': {
    label: 'Coding',
    eyebrow: 'Coding Work',
    title: 'Full stack product builds.',
    intro:
      'A coding page centered on standout shipped work, with room for platform screenshots, product framing, and clearer project context.',
    heroImage: codingVscodeBackground,
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
        heading: 'Accounta',
        copy:
          'An accounting platform built to help users track finances, organize records, and get a clearer view of their money in one interface. This section uses the product screen as a full background so the coding page opens on a more concrete software case study.',
        backgroundImage: accountaSectionBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        youtubeLabel: 'View Project',
        youtubeUrl: 'https://github.com/Loyyd/accounta',
      },
      {
        type: 'feature',
        theme: 'forest',
        kicker: 'Music Tool',
        heading: 'Chord Songs',
        copy:
          'A musician-focused chord tracking tool designed to make songs easier to organize, follow, and revisit. This section uses the product screen as a full background so the project reads like a dedicated software showcase inside the coding page.',
        backgroundImage: holySongsSectionBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'View Project',
            url: 'https://holy-songs.bcgen.ie/',
          },
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/holy-songs',
          },
        ],
      },
      {
        type: 'feature',
        theme: 'ocean',
        kicker: 'AI Project',
        heading: 'AI Drone',
        copy:
          'A reinforcement learning project where I teach a drone how to fly through training, feedback, and repeated simulation runs. This section uses the drone image as a full background so the project reads as a focused AI experiment inside the coding page.',
        backgroundImage: aiDroneSectionBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/ai-drone',
          },
        ],
      },
      {
        type: 'feature',
        theme: 'steel',
        kicker: 'University Tool',
        heading: 'Grade Tracker',
        copy:
          'A university grade tracker built to help students monitor results, keep coursework organized, and maintain a clearer overview of academic progress across modules. This section uses the product image as a full background so the tool reads like another focused software case study on the coding page.',
        backgroundImage: gradeTrackerSectionBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'View Project',
            url: 'https://loyyd.github.io/uni-track/',
          },
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/uni-track',
          },
        ],
      },
      {
        type: 'feature',
        theme: 'ocean',
        kicker: 'University Website',
        heading: 'SubAqua',
        copy:
          'A university club website I am building for DCU SubAqua, focused on clearer event presentation, club identity, and a stronger public-facing web presence. This section uses the site screenshot as a full background so the project reads like another polished frontend case study on the coding page.',
        backgroundImage: subaquaWebsiteBackground,
        mediaFit: 'width',
        mediaRatio: '16 / 9',
        actions: [
          {
            label: 'Preview Website',
            url: 'https://loyyd.github.io/dcusubaqua/',
          },
          {
            label: 'GitHub Link',
            url: 'https://github.com/Loyyd/dcusubaqua',
          },
        ],
      },
    ],
  },
};

export const portfolioPaths = Object.keys(portfolioPages);

export function normalizePath(pathname) {
  return portfolioPaths.includes(pathname) ? pathname : '/3d';
}
