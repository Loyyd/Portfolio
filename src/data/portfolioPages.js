import catboticaBg from '../assets/images/projects/catbotica/catbotica-bg.webp';
import catboticaSite from '../assets/images/projects/catbotica/Catbotica+Website.webp';
import catboticaDiscord from '../assets/images/projects/catbotica/Catbotica+Discord.webp';
import code8Poster from '../assets/images/projects/code-8part-2/code-8-part2.jpg';
import profileImage from '../assets/images/profile.jpg';
import galleryRobot from '../assets/images/gallery_pictures/Robot_web02.jpg';
import galleryTitan from '../assets/images/gallery_pictures/Titan-Pilot.jpg';
import gallerySchool from '../assets/images/gallery_pictures/Thinkmore+TED+Ed+-+06.jpg';
import gallerySuperbodies from '../assets/images/gallery_pictures/SuperbodiesV08.jpg';
import galleryCreature from '../assets/images/gallery_pictures/TZOG2817_web.jpg';
import blenderLogo from '../assets/logos/blender_logo.png';
import vscodeLogo from '../assets/logos/vscode.png';
import substanceLogo from '../assets/logos/substance.webp';

export const portfolioPages = {
  '/3d': {
    label: '3D',
    eyebrow: '3D Direction',
    title: 'Sculpted frames, atmospheric look-dev, and image-led worldbuilding.',
    intro:
      'A 3D-focused gallery page built around creature work, cinematic stills, and environment-heavy presentation.',
    heroImage: galleryTitan,
    stats: ['Lookdev', 'Creature Frames', 'Cinematic Stills'],
    sections: [
      {
        theme: 'ember',
        kicker: 'Featured',
        heading: 'Hero images with a wider studio-film feel.',
        copy:
          'These cards lean into strong silhouettes, moody palettes, and the kind of framing that sells range quickly.',
        cards: [
          { title: 'Titan Pilot', meta: 'Key Art', image: galleryTitan },
          { title: 'Creature Study', meta: 'Character Surface', image: galleryCreature },
          { title: 'Robot Closeup', meta: 'Hard-Surface Detail', image: galleryRobot },
        ],
      },
      {
        theme: 'steel',
        kicker: 'Gallery',
        heading: 'A denser wall for experiments, alternate angles, and polished stills.',
        copy:
          'This section works like a visual proof-board: fast to scan, but still dramatic enough to feel authored.',
        cards: [
          { title: 'Superbodies', meta: 'Render Still', image: gallerySuperbodies },
          { title: 'Editorial Frame', meta: 'Design Shot', image: code8Poster },
          { title: 'Education Visual', meta: 'Motion Asset', image: gallerySchool },
          { title: 'Catbotica Environment', meta: 'Worldbuilding', image: catboticaBg },
        ],
      },
      {
        theme: 'aurora',
        kicker: 'Toolkit',
        heading: 'Software and process cues to support the gallery.',
        copy:
          'The page still feels visual-first, but it now gives enough technical context for art direction or studio roles.',
        cards: [
          { title: 'Blender', meta: 'Modeling + Rendering', image: blenderLogo, fit: 'contain' },
          { title: 'Substance', meta: 'Surfacing', image: substanceLogo, fit: 'contain' },
          { title: 'Visual Research', meta: 'Reference Systems', image: profileImage },
        ],
      },
    ],
  },
  '/gamedev': {
    label: 'Gamedev',
    eyebrow: 'Game Worlds',
    title: 'Playable ideas, game-facing art, and launch visuals with more energy.',
    intro:
      'A page for mechanics, pitch visuals, and game-style presentation with larger bands and bolder contrast shifts.',
    heroImage: catboticaBg,
    stats: ['Prototypes', 'Pitch Art', 'Launch Assets'],
    sections: [
      {
        theme: 'violet',
        kicker: 'Pitch Frames',
        heading: 'A front section for high-concept game worlds and campaign art.',
        copy:
          'This first band is tuned for key art, splash screens, and strong first-impression images with space for hooks.',
        cards: [
          { title: 'Catbotica Universe', meta: 'Original IP', image: catboticaBg },
          { title: 'Community Portal', meta: 'Launch Surface', image: catboticaSite },
          { title: 'Discord Drop', meta: 'Audience Onboarding', image: catboticaDiscord },
        ],
      },
      {
        theme: 'forest',
        kicker: 'Systems',
        heading: 'Room for mechanics, factions, loops, and progression beats.',
        copy:
          'The structure here is meant for game design thinking: not just pretty shots, but visualized systems and player fantasy.',
        cards: [
          { title: 'Combat Moodboard', meta: 'Player Fantasy', image: galleryTitan },
          { title: 'Enemy Variant', meta: 'Encounter Design', image: galleryCreature },
          { title: 'World Event', meta: 'Narrative Hook', image: code8Poster },
          { title: 'Reward Scene', meta: 'Progression Beat', image: gallerySuperbodies },
        ],
      },
      {
        theme: 'sunset',
        kicker: 'Presentation',
        heading: 'A closing band for trailers, store capsules, and release-facing assets.',
        copy:
          'This is where the page shifts from concepting to market-facing communication and cleaner showcase polish.',
        cards: [
          { title: 'Store Capsule', meta: 'Marketing Visual', image: galleryRobot },
          { title: 'Promo Scene', meta: 'Launch Moment', image: gallerySchool },
          { title: 'Cover Exploration', meta: 'Packaging', image: catboticaBg },
        ],
      },
    ],
  },
  '/coding': {
    label: 'Coding',
    eyebrow: 'Coding Work',
    title: 'Interfaces, tools, and technical builds presented like polished case studies.',
    intro:
      'A coding page with gallery-style panels for product thinking, technical stack cues, and feature storytelling.',
    heroImage: profileImage,
    stats: ['Frontend', 'Tools', 'Creative Tech'],
    sections: [
      {
        theme: 'midnight',
        kicker: 'Builds',
        heading: 'Case-study cards for web interfaces, dashboards, and creative tools.',
        copy:
          'Instead of a plain project list, this page frames coding work as finished product experiences with visual hierarchy.',
        cards: [
          { title: 'Editor Experience', meta: 'Frontend System', image: vscodeLogo, fit: 'contain' },
          { title: 'Creative Pipeline', meta: 'Tooling', image: substanceLogo, fit: 'contain' },
          { title: 'Portfolio Engine', meta: 'React + Vite', image: profileImage },
        ],
      },
      {
        theme: 'ocean',
        kicker: 'Screens',
        heading: 'A wider gallery band for UI states, feature slices, and implementation storytelling.',
        copy:
          'The section background shifts cooler here so code projects read cleaner, sharper, and slightly more product-led.',
        cards: [
          { title: 'Project Gallery UI', meta: 'Routing + Layout', image: catboticaSite },
          { title: 'Content System', meta: 'Reusable Components', image: catboticaDiscord },
          { title: 'Media Page', meta: 'Responsive Build', image: code8Poster },
          { title: 'Visual Module', meta: 'Animation Layer', image: galleryRobot },
        ],
      },
      {
        theme: 'copper',
        kicker: 'Stack',
        heading: 'A final section that anchors the page with workflow and technologies.',
        copy:
          'This band gives the coding page enough substance for recruiters without losing the overall image-forward direction.',
        cards: [
          { title: 'React Frontend', meta: 'Component Design', image: vscodeLogo, fit: 'contain' },
          { title: 'Blender Integration', meta: 'Creative Pipeline', image: blenderLogo, fit: 'contain' },
          { title: 'Design Systems', meta: 'Visual Consistency', image: gallerySchool },
        ],
      },
    ],
  },
};

export const portfolioPaths = Object.keys(portfolioPages);

export function normalizePath(pathname) {
  return portfolioPaths.includes(pathname) ? pathname : '/3d';
}
