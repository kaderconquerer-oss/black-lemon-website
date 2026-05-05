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
  { slug: 'cs-01', client: 'Aurora Capital', title: 'A trading-floor town hall that didn\u2019t feel like one', tag: 'Corporate', year: 2025, location: 'DIFC, Dubai', attendees: 420, scope: ['Concept', 'Production', 'Stage Design', 'Run-of-show'], hero: 'editorial-dark', summary: 'Reframed an annual partner meeting as an editorial moment \u2014 black room, single yellow bar, three speakers, no podium.', tone: 'dark' },
  { slug: 'cs-02', client: 'Najma Foundation', title: 'A gala that raised AED 12.4M without a chandelier in sight', tag: 'Gala', year: 2025, location: 'Atlantis Royal', attendees: 680, scope: ['Creative Direction', 'F&B', 'Run-of-show', 'Talent'], hero: 'kinetic', summary: 'Reset expectations for what a Dubai charity gala can look like \u2014 raw concrete, soft lemon light, one auctioneer.', tone: 'yellow' },
  { slug: 'cs-03', client: 'Studio K\u014dki', title: 'Brand launch as theatre, not press release', tag: 'Brand Launch', year: 2024, location: 'Alserkal Avenue', attendees: 240, scope: ['Concept', 'Build', 'Lighting', 'Sound'], hero: 'editorial-dark', summary: 'A new fragrance house wanted no logos, no banners. We built a 90-second walk that ended in a single bottle.', tone: 'dark' },
  { slug: 'cs-04', client: 'Mirror Festival', title: 'Three nights, one yellow bar, eleven thousand people', tag: 'Festival', year: 2024, location: 'Expo City', attendees: 11200, scope: ['Stage Design', 'Production', 'Crew'], hero: 'kinetic', summary: 'A music festival that committed to a single visual signature across every stage, screen, and wristband.', tone: 'dark' },
  { slug: 'cs-05', client: 'Helix Wedding', title: 'A four-day wedding with no theme \u2014 just rooms', tag: 'Private', year: 2025, location: 'Ras Al Khaimah', attendees: 320, scope: ['Creative Direction', 'F&B', 'Florals', 'Logistics'], hero: 'architectural', summary: 'No mood boards, no Pinterest. Eight rooms designed as architecture, then dressed for one weekend.', tone: 'light' },
  { slug: 'cs-06', client: 'GITEX Stage', title: 'A keynote stage that read like a magazine spread', tag: 'Conference', year: 2024, location: 'Dubai World Trade Centre', attendees: 1800, scope: ['Stage Design', 'Content', 'Run-of-show'], hero: 'editorial-dark', summary: 'Replaced the usual LED-wall maximalism with three black walls, one ribbon of yellow, and a 12-meter cyc.', tone: 'dark' },
  { slug: 'cs-07', client: 'House of Beit', title: 'A pop-up that sold out before the door opened', tag: 'Retail', year: 2024, location: 'City Walk', attendees: 4400, scope: ['Concept', 'Build', 'PR', 'Operations'], hero: 'architectural', summary: 'Three weeks. One street-front. A retail concept that traded inventory turnover for staying-power.', tone: 'light' },
  { slug: 'cs-08', client: 'Ledger Summit', title: 'Closing dinner with no AV, no slides, no playlist', tag: 'Dinner', year: 2025, location: 'Al Quoz', attendees: 88, scope: ['Concept', 'F&B', 'Talent'], hero: 'editorial-dark', summary: 'After two days of panels, we sent 88 founders into a room with one long table and one rule: phones in the basket.', tone: 'dark' },
];

const SERVICES = [
  { num: '01', name: 'Creative Direction', desc: 'We start with the idea, not the venue. A point of view, a single image, the one thing the room should remember.', deliverables: ['Concept territories', 'Mood + reference', 'Naming', 'Editorial line'] },
  { num: '02', name: 'Production', desc: 'Permits, vendors, freight, build, strike. The unglamorous middle that makes everything else possible.', deliverables: ['Vendor sourcing', 'Budgets + tracking', 'Permits + safety', 'On-site management'] },
  { num: '03', name: 'Stage & Set Design', desc: 'Architecture for a single night. We design rooms the way set designers do \u2014 for sightlines, for cameras, for the way bodies move through them.', deliverables: ['Concept renders', 'Construction docs', 'Lighting plot', 'Build oversight'] },
  { num: '04', name: 'Run-of-show', desc: 'The minute-by-minute. Cues, calls, handoffs. Quietly the most important thing we do.', deliverables: ['Cue sheets', 'Stage management', 'Talent logistics', 'Tech rehearsal'] },
  { num: '05', name: 'F&B Direction', desc: 'Menus designed alongside the room, not after it. Plate, glass, paper goods \u2014 part of the brand, not a footnote.', deliverables: ['Menu development', 'Service design', 'Tableware', 'Beverage program'] },
  { num: '06', name: 'Brand & Identity', desc: 'For events that deserve their own logo, name, and editorial system. Done right, the brand outlives the night.', deliverables: ['Naming', 'Identity', 'Editorial guidelines', 'Web + invites'] },
];

const JOURNAL = [
  { date: '2025.04', tag: 'Field notes', title: 'Why we stopped using the word "experience"', dek: 'It used to mean something. Now it means anything. Notes from a year of refusing the brief.', read: '6 min' },
  { date: '2025.02', tag: 'Press', title: 'Black Lemon featured in Brownbook \u2014 "The new Dubai studio aesthetic"', dek: 'A 12-page profile on the studios reshaping how the region throws a room.', read: '\u2014' },
  { date: '2024.11', tag: 'Process', title: 'One yellow bar: a brand system at the smallest scale', dek: 'How we built a visual signature out of a single mark, and why restraint is harder to sell than scale.', read: '8 min' },
  { date: '2024.09', tag: 'Press', title: 'Gulf Business: "The studio that turned down the LED wall"', dek: 'On editorial restraint in a city that loves a screen.', read: '\u2014' },
  { date: '2024.07', tag: 'Field notes', title: 'The 88-person rule', dek: 'Why our favourite events are exactly 88 people \u2014 and why your gala probably shouldn\u2019t be 800.', read: '5 min' },
  { date: '2024.05', tag: 'Process', title: 'How we cast a room', dek: 'On the people in the corners. Floor staff, ushers, sound techs \u2014 the most underrated part of any event.', read: '7 min' },
];

const CLIENTS = ['Aurora Capital', 'Najma Foundation', 'Studio K\u014dki', 'Mirror Festival', 'GITEX', 'Atlantis', 'House of Beit', 'Ledger', 'Brownbook', 'DIFC', 'Alserkal', 'Expo City'];

Object.assign(window, { NAV, CASE_STUDIES, SERVICES, JOURNAL, CLIENTS });
