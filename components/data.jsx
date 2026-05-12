// Black Lemon — site data (case studies, services, journal)

const NAV = [
  { id: 'home', label: 'Home', href: '#/home' },
  { id: 'work', label: 'Work', href: '#/work' },
  { id: 'services', label: 'Services', href: '#/services' },
  { id: 'studio', label: 'Studio', href: '#/studio' },
  { id: 'journal', label: 'Journal', href: '#/journal' },
  { id: 'contact', label: 'Contact', href: '#/contact' },
];

const CASE_STUDIES = [
  { slug: 'cs-01', client: 'BMW', title: 'A trading-floor town hall that didn\u2019t feel like one', tag: 'Corporate', year: 2025, location: 'DIFC, Dubai', attendees: 420, scope: ['Concept', 'Production', 'Stage Design', 'Run-of-show'], hero: 'editorial-dark', summary: 'Reframed an annual partner meeting as an editorial moment \u2014 black room, single yellow bar, three speakers, no podium.', tone: 'dark' },
  { slug: 'cs-02', client: 'Department of Culture & Tourism', title: 'A gala that raised AED 12.4M without a chandelier in sight', tag: 'Gala', year: 2025, location: 'Atlantis Royal', attendees: 680, scope: ['Creative Direction', 'F&B', 'Run-of-show', 'Talent'], hero: 'kinetic', summary: 'Reset expectations for what a Dubai charity gala can look like \u2014 raw concrete, soft lemon light, one auctioneer.', tone: 'yellow' },
  { slug: 'cs-03', client: 'Sephora', title: 'Brand launch as theatre, not press release', tag: 'Brand Launch', year: 2024, location: 'Alserkal Avenue', attendees: 240, scope: ['Concept', 'Build', 'Lighting', 'Sound'], hero: 'editorial-dark', summary: 'A new fragrance house wanted no logos, no banners. We built a 90-second walk that ended in a single bottle.', tone: 'dark' },
  { slug: 'cs-04', client: 'F1', title: 'Three nights, one yellow bar, eleven thousand people', tag: 'Festival', year: 2024, location: 'Expo City', attendees: 11200, scope: ['Stage Design', 'Production', 'Crew'], hero: 'kinetic', summary: 'A music festival that committed to a single visual signature across every stage, screen, and wristband.', tone: 'dark' },
  { slug: 'cs-05', client: 'Aldar', title: 'A four-day wedding with no theme — just architecture', tag: 'Private', year: 2025, location: 'Ras Al Khaimah', attendees: 320, scope: ['Creative Direction', 'F&B', 'Florals', 'Logistics'], hero: 'architectural', summary: 'No mood boards, no Pinterest. Eight ceremony and reception spaces designed as architecture, then dressed for one weekend.', tone: 'light' },
  { slug: 'cs-06', client: 'Philips', title: 'A keynote stage that read like a magazine spread', tag: 'Conference', year: 2024, location: 'Dubai World Trade Centre', attendees: 1800, scope: ['Stage Design', 'Content', 'Run-of-show'], hero: 'editorial-dark', summary: 'Replaced the usual LED-wall maximalism with three black walls, one ribbon of yellow, and a 12-meter cyc.', tone: 'dark' },
  { slug: 'cs-07', client: 'Lucid', title: 'A pop-up that sold out before the door opened', tag: 'Retail', year: 2024, location: 'City Walk', attendees: 4400, scope: ['Concept', 'Build', 'PR', 'Operations'], hero: 'architectural', summary: 'Three weeks. One street-front. A retail concept that traded inventory turnover for staying-power.', tone: 'light' },
  { slug: 'cs-08', client: 'Audi', title: 'Closing dinner with no AV, no slides, no playlist', tag: 'Dinner', year: 2025, location: 'Al Quoz', attendees: 88, scope: ['Concept', 'F&B', 'Talent'], hero: 'editorial-dark', summary: 'After two days of panels, we sent 88 founders into a room with one long table and one rule: phones in the basket.', tone: 'dark' },
];

const SERVICES = [
  { num: '01', name: 'Advertising & Marketing Solutions', desc: 'Outdoor advertising in premium locations, social media campaigns, sports advertising, branding & visual identity.' },
  { num: '02', name: 'PR, Media & Influencer Network', desc: 'Public relations, influencer marketing, talent & celebrity engagement, MCs, speakers & hosts, press & media relations.' },
  { num: '03', name: 'Media Coverage & Content Production', desc: 'Full event media coverage, photo & video shooting, live stream production & control, drone coverage.' },
  { num: '04', name: 'Design & Creative Direction', desc: 'Visual identity, event design, marketing & advertising design, corporate presentations, brand identity, social media & video design.' },
  { num: '05', name: 'Mockups & Build Execution', desc: 'Amenities, hologram, masterplan & layout, location & surroundings, exterior buildings & interior.' },
  { num: '06', name: 'AV Production & Technical Solutions', desc: 'LED screens & visual display, sound systems & audio engineering, lighting systems, live production & control.' },
  { num: '07', name: 'Production & On-Ground Execution', desc: 'Stage & structural setup, logistics & equipment handling, on-site team & crew management, branding & venue setup.' },
  { num: '08', name: 'Exhibitions & Showcase Platforms', desc: 'End-to-end exhibition solutions, booth management, exhibition booth design & setup, pre & post exhibition marketing.' },
  { num: '09', name: 'Catering & Hospitality Services', desc: 'Catering solutions, service staff & hospitality, custom catering, live cooking stations, branded beverage booths.' },
  { num: '10', name: 'Giveaways & Branded Gifts', desc: 'Customized branded giveaways, gift booths & activation stations, premium gift packaging, concept & gift strategy.' },
  { num: '11', name: 'Booth, Stands & Location Solutions', desc: 'Location sourcing, mall & activation stands, outdoor & roadshow promotional booths, stand design & branding.' },
  { num: '12', name: 'Regional & International Roadshows', desc: 'UAE, GCC & regional roadshows, Egypt, Africa & Europe, full roadshow management, audience targeting, integrated marketing.' },
  { num: '13', name: 'Entertainment & Live Experiences', desc: 'Live performances, themed & cultural entertainment, interactive entertainment, special effects & show elements.' },
  { num: '14', name: 'Venue Sourcing & Reservations', desc: 'Indoor & outdoor venues, reservation & coordination, outdoor tents & seasonal event structures, venue selection strategy.' },
];

const JOURNAL = [
  { date: '2025.04', tag: 'Field notes', title: 'Why we stopped using the word "experience"', dek: 'It used to mean something. Now it means anything. Notes from a year of refusing the brief.', read: '6 min' },
  { date: '2025.02', tag: 'Press', title: 'Black Lemon featured in Brownbook — "The new Dubai studio aesthetic"', dek: 'A 12-page profile on the studios reshaping how the region throws an event.', read: '\u2014' },
  { date: '2024.11', tag: 'Process', title: 'One yellow bar: a brand system at the smallest scale', dek: 'How we built a visual signature out of a single mark, and why restraint is harder to sell than scale.', read: '8 min' },
  { date: '2024.09', tag: 'Press', title: 'Gulf Business: "The studio that turned down the LED wall"', dek: 'On editorial restraint in a city that loves a screen.', read: '\u2014' },
  { date: '2024.07', tag: 'Field notes', title: 'The 88-person rule', dek: 'Why our favourite events are exactly 88 people \u2014 and why your gala probably shouldn\u2019t be 800.', read: '5 min' },
  { date: '2024.05', tag: 'Process', title: 'How we cast an event', dek: 'On the people in the corners. Floor staff, ushers, sound techs — the most underrated part of any event.', read: '7 min' },
];

const CLIENTS = [
  'F1', 'Philips', 'Sephora', 'Lucid', 'Mario Makeup',
  'Aldar', 'Lapies', 'Ariel', 'Marsh', 'Public Art Abu Dhabi',
  'BMW', 'Jotun', 'Department of Culture & Tourism', 'Audi', 'Gillette',
  'JAG', 'Range', 'A2RL', 'Aspire', 'Electrolux', 'Tide',
];

const MENA_CITIES = [
  // GCC
  'Dubai', 'Abu Dhabi', 'Sharjah', 'Riyadh', 'Jeddah', 'Dammam',
  'Doha', 'Kuwait City', 'Manama', 'Muscat',
  // North Africa (Morocco + Tunisia only)
  'Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Tunis',
];

Object.assign(window, { NAV, CASE_STUDIES, SERVICES, JOURNAL, CLIENTS, MENA_CITIES });
