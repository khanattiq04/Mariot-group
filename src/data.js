/* ------------------------------------------------------------------
   ALL SITE CONTENT LIVES HERE. Edit text, numbers, images and links
   in this file — the pages pick the changes up automatically.
------------------------------------------------------------------- */
import {
  UtensilsCrossed, Coffee, Hotel, Palmtree, Castle, Hospital, Croissant, WashingMachine, Truck, ShoppingCart,
  Cloud, Factory, Globe, Award, Users, LifeBuoy, PackageCheck, Hammer, MapPin, Briefcase, CalendarCheck, Rocket,
  Siren, CalendarClock, QrCode, BarChart3, MessagesSquare, ShieldCheck, Zap, CreditCard, UserCheck, Percent,
  FileText, RefreshCcw, PenTool, Boxes, GraduationCap, Wrench, PlugZap, Cog, Ruler, Box, CheckCircle2,
} from 'lucide-react';

/* Royalty-free photography (Unsplash / Pexels licences) */
export const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;
export const px = (id, w = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1749478072094-d21cb929490c?auto=format&fit=crop&w=1900&q=72',
  kitchen: u('1556909114-f6e7ad7d3136', 1600),
  kitchen2: u('1556910103-1c02745aae4d', 1600),
  chef: u('1577219491135-ce391730fb2c', 1100),
  chefLine: u('1600565193348-f74bd3c7ccdf', 1600),
  welding: u('1504328345606-18bbc8c9d7d1', 1600),
  engineer: u('1581092160562-40aa08e78837', 1600),
  technician: u('1581094794329-c8112a89af12', 1600),
  warehouse: u('1586528116311-ad8dd3c8310d', 1600),
  team: u('1552664730-d307ca884978', 1600),
  dining: u('1414235077428-338989a2e8c0', 1600),
  about: px('2977514', 1600),
  design: px('2696064', 1600),
  blueprint: px('358549', 1400),
  store: u('1556910096-6f5e72db6803', 1400),
};

export const COMPANY = {
  name: 'Mariot Kitchen Equipment',
  short: 'Mariot',
  since: 2004,
  phone: '+971 4-288-2777',
  phoneHref: 'tel:+97142882777',
  whatsapp: 'https://wa.me/97142882777',
  waNumber: '97142882777',
  email: 'admin@mariotkitchen.com',
  address: 'Near Abu Bakkar Siddique Metro Station, Dubai, UAE',
  store: 'https://www.mariotstore.com',
  social: {
    instagram: 'https://www.instagram.com/mariotuae/',
    facebook: 'https://www.facebook.com/mariotuae/',
    linkedin: 'https://www.linkedin.com/company/mariot-kitchen-equipment',
  },
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Projects', to: '/projects' },
  {
    label: 'Services',
    children: [
      { label: 'Design Your Project', to: '/design', desc: '3D kitchen planning & engineering', icon: PenTool },
      { label: 'Fabrication', to: '/fabrication', desc: 'Our own stainless steel factory', icon: Hammer },
      { label: 'Maintenance', to: '/maintenance', desc: 'Service plans & 24/7 call-outs', icon: Wrench },
      { label: 'How We Work', to: '/how-we-work', desc: 'Our 11-step methodology', icon: Cog },
      { label: 'Business Hub', to: '/business-hub', desc: 'Trade accounts & B2B support', icon: Briefcase },
      { label: 'Blog', to: '/blog', desc: 'Insights & guides', icon: FileText },
    ],
  },
  { label: 'Brands', to: '/brands' },
  { label: 'Branches', to: '/branches' },
  { label: 'Contact', to: '/contact' },
];

export const HERO_WORDS = ['restaurants.', 'hotels & resorts.', 'cafés & bakeries.', 'villas & palaces.'];

export const CLIENTS = ['MARRIOTT', 'HILTON', 'ROTANA', 'JUMEIRAH', 'EMAAR HOSPITALITY', 'RIXOS', 'ADDRESS HOTELS', 'MILLENNIUM', 'SHERATON', 'MÖVENPICK', 'FAIRMONT', 'GRAND HYATT', 'WALDORF ASTORIA', 'RITZ-CARLTON', 'KEMPINSKI', 'RADISSON BLU'];

export const STATS = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 500, suffix: '+', label: 'Delivered projects' },
  { value: 40, suffix: '+', label: 'Global brands' },
  { value: 7, suffix: '', label: 'Emirates served' },
];

export const NUMBERS = [
  { value: 500, suffix: '+', label: 'Projects done' },
  { value: 40, suffix: '+', label: 'Global brands' },
  { value: 300, suffix: '+', label: 'Happy clients' },
  { value: 7, suffix: '', label: 'Emirates' },
];

/* rate = rough AED per m² used by the budget calculator (planning estimate only) */
export const SECTORS = [
  { slug: 'restaurant', name: 'Restaurants', icon: UtensilsCrossed, img: '1517248135467-4c7edcad34c4', rate: 3200,
    text: 'Full show kitchens, prep lines and stainless fabrication.',
    long: 'From fine dining to fast casual, we plan the line around your menu and your covers per hour. Hot line, cold prep, pass, dishwash and extraction are engineered as one workflow.',
    items: ['Cooking suites & combi ovens', 'Charbroilers, fryers & griddles', 'Under-counter & reach-in refrigeration', 'Custom stainless prep tables & pass', 'Exhaust hoods & ventilation', 'Dishwashing area'] },
  { slug: 'cafe', name: 'Cafés', icon: Coffee, img: '1554118811-1e0d58224f24', rate: 2600,
    text: 'Espresso platforms, pastry displays and compact prep areas.',
    long: 'Bar flow decides how many cups you serve at peak. We design the espresso platform, grinder stations, display and back prep so baristas never cross paths.',
    items: ['Espresso machines & grinders', 'Blenders, juicers & ice machines', 'Pastry & cake display chillers', 'Bar counters & under-bar fridges', 'Compact ovens & sandwich grills', 'Water filtration'] },
  { slug: 'hotel', name: 'Hotels', icon: Hotel, img: '1566073771259-6a8506099945', rate: 4200,
    text: 'Main production, banquet, room service and outlet kitchens.',
    long: 'Hotel back-of-house is several kitchens working as one. We deliver main production, banqueting, all-day dining, room service, pastry and staff canteen with shared cold storage and stewarding.',
    items: ['Main production & banquet kitchens', 'Walk-in cold rooms & blast chillers', 'Pastry & bakery sections', 'Buffet counters & live stations', 'Stewarding & conveyor dishwashing', 'In-house laundry equipment'] },
  { slug: 'resort', name: 'Resorts', icon: Palmtree, img: '1571003123894-1f0594d2b5d9', rate: 4000,
    text: 'Multi-outlet kitchens, pool bars and central production.',
    long: 'Resorts spread outlets across a large site. We plan central production with satellite kitchens, pool and beach bars, and the cold chain that links them.',
    items: ['Central production kitchen', 'Satellite outlet kitchens', 'Pool & beach bars', 'Outdoor grills & live cooking', 'Cold rooms & ice production', 'Staff dining facilities'] },
  { slug: 'villa_palace', name: 'Villas & Palaces', icon: Castle, img: '1600585154340-be6161a56a0c', rate: 5200,
    text: 'Luxury private kitchens for villas, palaces and royal residences.',
    long: 'Private residences need commercial performance with a residential finish. We build show kitchens, back kitchens and majlis service pantries to the highest standard of detail.',
    items: ['Show kitchen & back kitchen', 'Premium cooking suites', 'Majlis & service pantries', 'Custom stainless & joinery integration', 'Cold rooms & wine storage', 'Private laundry rooms'] },
  { slug: 'hospital', name: 'Hospitals', icon: Hospital, img: '1519494026892-80bbd2d6fd0d', rate: 3800,
    text: 'HACCP-compliant patient meal production with diet-line separation.',
    long: 'Healthcare catering is about safety and consistency. We deliver HACCP-compliant production with separate diet lines, tray assembly and temperature-controlled distribution.',
    items: ['Bulk cooking & kettles', 'Diet kitchen separation', 'Tray-line & meal distribution trolleys', 'Blast chilling & regeneration', 'Hygienic stainless fabrication', 'Ware-washing systems'] },
  { slug: 'bakery', name: 'Bakeries', icon: Croissant, img: '1509440159596-0249088772ff', rate: 3000,
    text: 'Deck ovens, dough mixers, proofers and cooling racks.',
    long: 'From artisan shops to production bakeries, we size ovens, mixers and proofing to your daily output and lay out the floor from flour store to display.',
    items: ['Deck, rotary & convection ovens', 'Spiral & planetary mixers', 'Proofers & retarder-proofers', 'Dough sheeters & dividers', 'Cooling racks & trolleys', 'Display counters'] },
  { slug: 'laundry', name: 'Laundries', icon: WashingMachine, img: '1626806787461-102c1bfaaea1', rate: 2800,
    text: 'Washers, tumble dryers, flatwork ironers and folding lines.',
    long: 'We equip hotel, hospital and commercial laundries with complete lines, planned around kilograms per shift and a clean soiled-to-clean flow.',
    items: ['Washer extractors', 'Tumble dryers', 'Flatwork ironers', 'Folding & finishing lines', 'Barrier washers for healthcare', 'Laundry trolleys & shelving'] },
  { slug: 'catering', name: 'Catering', icon: Truck, img: '1555244162-803834f70033', rate: 3400,
    text: 'Central production kitchens with blast chillers and packaging.',
    long: 'Catering lives on volume and safe transport. We build production kitchens with cook-chill, portioning, packaging and loading designed for large event and contract volumes.',
    items: ['High-volume cooking equipment', 'Blast chillers & freezers', 'Portioning & packaging lines', 'Hot & cold holding cabinets', 'Transport trolleys & containers', 'Large-scale dishwashing'] },
  { slug: 'supermarket', name: 'Supermarkets', icon: ShoppingCart, img: '1542838132-92c53300491e', rate: 2900,
    text: 'Refrigerated display cases, walk-in cold rooms, meat prep.',
    long: 'We supply the refrigerated backbone of grocery retail: display cases, cold rooms, and butchery, bakery and deli sections ready for trading.',
    items: ['Refrigerated display cases', 'Walk-in chillers & freezers', 'Butchery: bone saws, mincers, slicers', 'In-store bakery & deli', 'Scales & shelving', 'Fish & produce displays'] },
  { slug: 'cloud_kitchen', name: 'Cloud Kitchens', icon: Cloud, img: '1556909114-f6e7ad7d3136', rate: 2700,
    text: 'Standardized pods, shared cold storage and delivery staging.',
    long: 'Delivery-only brands need compact, repeatable kitchens. We build standardized pods with shared cold storage and a pickup zone that keeps riders out of the line.',
    items: ['Standardized kitchen pods', 'Compact multi-function cooking', 'Shared cold & dry storage', 'Packing & delivery staging', 'Efficient extraction', 'Fast replication across sites'] },
  { slug: 'central_kitchen', name: 'Central Kitchens', icon: Factory, img: '1600607687920-4e2a09cf159d', rate: 3600,
    text: 'High-volume production, cook-chill and distribution logistics.',
    long: 'Central kitchens feed multiple outlets from one site. We engineer high-volume production, cook-chill, packing and dispatch around your distribution plan.',
    items: ['Bratt pans & tilting kettles', 'Cook-chill systems', 'Vacuum packing & labelling', 'Large cold rooms & freezers', 'Dispatch & logistics bays', 'Heavy-duty ware-washing'] },
];

export const HUB = [
  { to: '/business-account', icon: Briefcase, title: 'Business / Trade Account', text: 'Open a trade account and enjoy ongoing B2B support.', cta: 'Apply for account', img: '1552664730-d307ca884978' },
  { to: '/consultation', icon: CalendarCheck, title: 'Kitchen Consultation & Site Visit', text: 'Free consultation with a specialist and on-site inspection.', cta: 'Book consultation', img: '1556909114-f6e7ad7d3136' },
  { to: '/restaurant-opening', icon: Rocket, title: 'Restaurant & Café Opening', text: 'End-to-end launch support for new food service businesses.', cta: 'Start my project', img: '1445019980597-93fa8acb246c' },
  { to: '/urgent-request', icon: Siren, title: 'Urgent Equipment Request', text: "Fast-track supply when your kitchen can't wait.", cta: 'Send urgent request', img: '1504674900247-0877df9cc836' },
];

export const WHY = [
  { icon: Globe, title: 'Global Brands', text: 'Equipment from 40+ trusted manufacturers.' },
  { icon: Award, title: 'Commercial Expertise', text: 'Specialists in restaurants, hotels and catering.' },
  { icon: Users, title: 'Expert Team', text: 'Technical advisors to guide every purchase.' },
  { icon: LifeBuoy, title: 'After-Sales Support', text: 'Maintenance, parts and service you can rely on.' },
  { icon: PackageCheck, title: 'Delivery & Installation', text: 'Professional logistics across the UAE.' },
  { icon: Hammer, title: 'Custom Fabrication', text: 'In-house stainless steel built to your specs.' },
  { icon: MapPin, title: 'Multiple Branches', text: 'Presence across the UAE — always close to you.' },
];

export const FAB_ITEMS = [
  { name: 'Work Tables', img: '1556909114-f6e7ad7d3136' },
  { name: 'Sinks & Wash Units', img: '1556909172-54557c7e4fb7' },
  { name: 'Shelves & Racks', img: '1621263764928-df1444c5e859' },
  { name: 'Exhaust Hoods', img: '1585237017125-24baf8d7406f' },
  { name: 'Trolleys & Carts', img: '1556909195-27b0b96e2e7d' },
  { name: 'Counters & Buffets', img: '1591189863430-ab87e120f312' },
  { name: 'Cabinets', img: '1556910096-6f5e72db6803' },
  { name: 'Custom Fabrication', img: '1600607687920-4e2a09cf159d' },
];
export const FAB_SPECS = [
  { k: 'Material', v: 'AISI 304 & 430', t: 'Food-grade stainless steel, corrosion-resistant, hospitality standard.' },
  { k: 'Precision', v: 'TIG welded joints', t: 'Clean seams that pass HACCP hygiene audits without gaps or crevices.' },
  { k: 'Lead time', v: '10–14 days average', t: 'Made-to-measure units ready and delivered within two weeks of approval.' },
];

export const GCC = [
  { flag: '🇦🇪', name: 'UAE', note: 'Home base' }, { flag: '🇸🇦', name: 'Saudi Arabia', note: 'Active market' },
  { flag: '🇰🇼', name: 'Kuwait', note: 'Active market' }, { flag: '🇶🇦', name: 'Qatar', note: 'Active market' },
  { flag: '🇧🇭', name: 'Bahrain', note: 'Active market' }, { flag: '🇴🇲', name: 'Oman', note: 'Active market' },
];
export const BEYOND = ['🇮🇶 Iraq', '🇯🇴 Jordan', '🇱🇧 Lebanon', '🇪🇬 Egypt', '🇲🇦 Morocco', '🇮🇳 India', '🇰🇪 Kenya', '🇹🇿 Tanzania', 'More on request'];
export const EXPORT_STATS = [
  { value: 15, suffix: '+', label: 'Countries served' }, { value: 100, suffix: '+', label: 'Export projects' }, { value: 24, suffix: '/7', label: 'Support availability' },
];

export const MAINT_POINTS = ['Preventive maintenance visits', 'Same-day emergency response', 'Genuine spare parts warehouse', 'QR-tagged equipment tracking', 'Certified technicians per brand', 'Monthly performance reports'];
export const MAINT_STATS = [
  { value: 75, suffix: '%', k: 'Downtime', label: 'Reduction in equipment downtime across our client fleet.' },
  { value: 50, suffix: '%', k: 'Lifespan', label: 'Enhanced equipment lifespan through preventive care.' },
  { value: 30, suffix: '%', k: 'Cost savings', label: 'Average savings on annual maintenance vs. break-fix operators.' },
];
export const MAINT_FEATURES = [
  { icon: CalendarClock, title: 'Smart Scheduling', text: 'Book, reschedule and track every service visit online.', pts: ['Preventive visits calendar', 'Emergency call-outs', 'Real-time status updates'] },
  { icon: QrCode, title: 'QR-Tagged Equipment', text: 'Every unit gets a QR code with full history in one scan.', pts: ['Service history', 'Manuals & warranty', 'Spare-parts lookup'] },
  { icon: BarChart3, title: 'Reports & Analytics', text: 'Monthly dashboards on uptime, spend, and asset performance.', pts: ['Downtime trends', 'Cost per asset', 'Compliance reports'] },
  { icon: MessagesSquare, title: 'Direct Technician Chat', text: 'Chat with our engineers directly for advice and updates.', pts: ['In-portal chat', 'Photo & video uploads', 'Same-day resolutions'] },
  { icon: ShieldCheck, title: 'Preventive Maintenance', text: 'Scheduled care prevents failure before it disrupts your kitchen.', pts: ['Manufacturer schedules', 'Deep cleaning', 'Calibration checks'] },
  { icon: Zap, title: 'Rapid Response', text: '24/7 emergency response with SLA-backed turnaround.', pts: ['30-min phone response', 'Same-day site visit', 'Loaner equipment options'] },
];
export const PLANS = [
  { tier: 'Essential', name: 'Essential Care', text: 'Basic preventive service for small operations.', price: '990',
    pts: ['For up to 10 units of equipment', '2 preventive visits per year', 'Standard business-hour response', '48-hour emergency call-out', 'Basic quarterly report', '10% discount on spare parts'] },
  { tier: 'Professional', name: 'Professional Plan', text: 'Comprehensive care for restaurants and cafés.', price: '2,490', popular: true,
    pts: ['For up to 30 units of equipment', '4 preventive visits per year', 'Same-day emergency call-out', 'QR asset tagging & portal access', 'Monthly performance report', '15% discount on spare parts', 'Direct technician chat'] },
  { tier: 'Premium', name: 'Premium Fleet', text: 'Full-service SLA for hotels & chains.', price: '6,900',
    pts: ['For 30+ units or multi-outlet fleets', 'Monthly preventive visits', '4-hour emergency SLA', 'Full smart portal + analytics', 'Dedicated account technician', '20% discount on spare parts', 'Loaner equipment during downtime', 'Staff training sessions'] },
];
export const MAINT_NUMBERS = [
  { value: 24, suffix: '/7', label: 'Emergency support' }, { value: 500, suffix: '+', label: 'Clients served' },
  { value: 12, suffix: '', label: 'Certified techs' }, { value: 48, suffix: 'h', label: 'Parts SLA' },
];
export const MAINT_TESTIMONIALS = [
  { q: "Since switching to Mariot's Professional plan, our unplanned downtime dropped by more than half. The client portal makes tracking every service call effortless.", name: 'Rania El-Kamal', role: 'F&B Director, Blue Fig Restaurant Group', k: 'Downtime cut', v: '-62%' },
  { q: "The 4-hour emergency SLA has saved us during two service peaks already. Their technicians are on brand-certified equipment we didn't even know they covered.", name: 'Faisal Al Hashimi', role: 'Operations Manager, Emerald Hospitality', k: 'SLA response', v: '3h 12m' },
  { q: 'Every asset now has a QR tag with full history. Onboarding a new chef used to take days for equipment training — now it takes a scan.', name: 'Yara Nassar', role: 'Executive Chef, Marina Beach Resort', k: 'Onboarding faster', v: '5x' },
  { q: 'Predictable monthly maintenance fees replaced random repair bills. We saved almost 30% year-on-year and got better service.', name: 'Marwan Hassan', role: 'CFO, Levantine Kitchens Group', k: 'Annual savings', v: '-28%' },
];

export const PACKAGES = [
  { name: 'Restaurant Opening', text: 'Complete starter package for new restaurants.', img: '1517248135467-4c7edcad34c4' },
  { name: 'Café Equipment', text: 'Everything you need to launch a café.', img: '1447933601403-0c6688de566e' },
  { name: 'Bakery Solutions', text: 'Ovens, mixers and bakery essentials.', img: '1509440159596-0249088772ff' },
  { name: 'Budget Startup', text: 'Cost-effective options for new ventures.', img: '1556909114-f6e7ad7d3136' },
  { name: 'Custom Kitchen', text: 'Fully tailored commercial kitchen projects.', img: '1556910103-1c02745aae4d' },
];

export const TESTIMONIALS = [
  { q: 'Mariot has been our kitchen equipment partner for over 7 years. Unmatched product quality and exceptional after-sales support — our entire restaurant chain relies on them.', name: 'Khalid Al Mansouri', role: 'Executive Chef, Marriott Dubai' },
  { q: 'We outfitted our entire commercial kitchen through Mariot. Delivery was on schedule, installation was flawless, and the equipment continues to perform beyond our expectations.', name: 'Fatima Al Rashidi', role: 'Operations Director, Hilton Abu Dhabi' },
  { q: 'From consultation to commissioning, Mariot makes equipping a professional kitchen effortless. Their deep expertise in commercial equipment is second to none in the UAE.', name: 'Ahmed Qassem', role: 'F&B Manager, Rotana Hotels Group' },
];
export const TRUST = [{ v: '500+', l: 'Active clients' }, { v: '4.9', l: 'Average rating' }, { v: '20+', l: 'Years in business' }];

export const STEPS = [
  { title: 'Consultation', text: 'Discuss the project idea, menu, capacity, budget, and timeline.', img: '1552664730-d307ca884978' },
  { title: 'Site Visit', text: 'Inspect the site — dimensions, utilities, ventilation, delivery access, installation conditions.', img: '1497366216548-37526070297c' },
  { title: 'Kitchen Planning', text: 'Workflow-based planning focused on speed, hygiene, safety and staff movement.', img: '1454165804606-c3d57bc86b40' },
  { title: 'Equipment Selection', text: 'Choose the right equipment based on menu, production capacity, project type and budget.', img: '1556910096-6f5e72db6803' },
  { title: 'BOQ Preparation', text: 'Clear bill of quantities with specifications, sizes and scope.', img: '1450101499163-c8848c66ca85' },
  { title: 'Stainless Steel Fabrication', text: 'In-house manufacturing of custom tables, sinks, counters, shelves, hoods and worktops.', img: '1556909114-f6e7ad7d3136' },
  { title: 'Supply & Delivery', text: 'Logistics coordinated to your project timeline.', img: '1601584115197-04ecc0da31d7' },
  { title: 'Installation', text: 'On-site installation by experienced technicians.', img: '1581093458791-9d15482442f6' },
  { title: 'Testing & Commissioning', text: 'Full testing and safe hand-over ready for operation.', img: '1581094794329-c8112a89af12' },
  { title: 'Training', text: 'Guide your team on operation, cleaning and daily care.', img: '1521737604893-d14cc237f11d' },
  { title: 'Maintenance & Support', text: 'After-sales support, maintenance contracts and spare parts.', img: '1600880292203-757bb62b4baf' },
];

export const ABOUT = {
  intro: 'Mariot Kitchen Equipment is a professional supplier of commercial kitchen equipment, refrigeration solutions, stainless steel fabrication, laundry equipment, and project support for restaurants, cafés, hotels, supermarkets, bakeries, catering companies, hospitals, resorts and commercial food service businesses.',
  story: 'For over two decades, Mariot Kitchen Equipment has helped restaurants, hotels, hospitals, catering companies and industrial food businesses across the UAE build kitchens that perform. From single-item supply to complete turn-key projects — we deliver.',
  vision: 'To become one of the leading commercial kitchen equipment and project solution providers in the UAE and GCC by delivering reliable products, professional service, and complete equipment solutions for every type of food service business.',
  mission: 'To help our clients build efficient, reliable, and professional kitchens by providing high-quality equipment, fast quotations, trusted brands, and complete project support from planning to supply.',
  whatWeDo: [
    'Supply of commercial kitchen equipment and cooking suites',
    'Commercial refrigeration — walk-in cold rooms, blast chillers, display cases',
    'Custom stainless steel fabrication (Grade 304 and 430)',
    'Laundry equipment for hotels, hospitals and industrial applications',
    'Complete turn-key project design, supply, installation and commissioning',
    'After-sales service, spare parts and maintenance contracts',
  ],
  strengths: [
    { icon: Globe, t: 'Direct partnerships with top-tier global manufacturers' },
    { icon: Ruler, t: 'Complete in-house engineering and design team' },
    { icon: Boxes, t: 'UAE-based warehouse with immediate stock availability' },
    { icon: MessagesSquare, t: 'Multi-lingual sales and technical support' },
  ],
};

export const DESIGN = {
  phases: [
    { icon: Ruler, title: 'Engineering Blueprint', text: 'Compliant drawings and detailed equipment schedules.' },
    { icon: Box, title: '3D Design', text: 'Walk through your kitchen before a single piece is installed.' },
    { icon: CheckCircle2, title: 'Complete Execution', text: 'Supply, install and commission — ready for service.' },
  ],
  steps: [
    { title: 'Discovery & Consultation', text: 'We study your concept, menu, space and production capacity to define the optimal workflow.' },
    { title: '3D Design', text: '2D and 3D layouts engineered for hygiene, workflow and code compliance.' },
    { title: 'Equipment Selection', text: 'Curated choice from 40+ trusted global brands to fit your budget.' },
    { title: 'Supply & Installation', text: 'Logistics, staging, MEP coordination and professional on-site installation.' },
    { title: 'Commissioning & Support', text: 'Testing, staff handover, warranties, ongoing maintenance and spare parts.' },
  ],
  why: [
    { icon: UserCheck, title: 'One accountable partner', text: 'A single team handles design, supply and install — no finger-pointing between vendors.' },
    { icon: ShieldCheck, title: 'Original brands & warranties', text: 'Authorized distribution with manufacturer warranties and certified after-sales service.' },
    { icon: CalendarCheck, title: 'On time and on budget', text: 'Transparent timelines and pricing locked from the planning phase.' },
    { icon: PlugZap, title: 'Complete solutions', text: 'From empty space to a fully operational, service-ready kitchen.' },
  ],
  faq: [
    { q: 'Do you offer a free initial consultation?', a: 'Yes — the first consultation and a preliminary layout proposal are completely free, with no obligation.' },
    { q: 'Which areas do you serve?', a: 'We supply and install across all 7 emirates of the UAE, with dedicated branches supporting the wider region.' },
    { q: 'Do you work with our existing space and contractor?', a: 'Absolutely. We coordinate with your architect, contractor and MEP team for seamless integration.' },
    { q: 'How long does a project usually take?', a: 'Design takes 1–2 weeks; full supply and installation runs from 3 to 8 weeks depending on scope.' },
  ],
};

export const ACCOUNT_BENEFITS = [
  { icon: CreditCard, title: 'Flexible Credit Terms', text: 'Net-15, Net-30, or Net-60 approved after account setup.' },
  { icon: UserCheck, title: 'Dedicated Manager', text: 'A single point of contact for orders, service, and after-sales.' },
  { icon: Percent, title: 'Volume Pricing', text: 'Tiered discounts based on annual commercial volume.' },
  { icon: Truck, title: 'Priority Delivery', text: 'Your orders jump the queue with same-week UAE-wide fulfilment.' },
  { icon: RefreshCcw, title: 'Quarterly Reviews', text: 'Business reviews to catch usage patterns and future needs.' },
  { icon: FileText, title: 'Consolidated Invoicing', text: 'Monthly consolidated invoicing across all outlets.' },
];
export const OPENING_PILLARS = [
  { icon: PenTool, title: 'Design & Layout', text: 'Kitchen and front-of-house layout engineered for your concept.' },
  { icon: Boxes, title: 'Equipment Packages', text: 'Bundled equipment sourced from 40+ trusted brands.' },
  { icon: Truck, title: 'Delivery & Install', text: 'Coordinated logistics, install, testing, and handover.' },
  { icon: GraduationCap, title: 'Training & Launch', text: 'Team training, pre-opening dry runs, and soft-launch support.' },
];
export const URGENT_SLA = [{ k: 'Response', v: '< 30 min' }, { k: 'Quote', v: '< 4 hrs' }, { k: 'Delivery (stocked)', v: '24–48 hrs' }, { k: 'Engineer call-out', v: 'Same day' }];
export const URGENT_CASES = [
  { icon: Wrench, title: 'Broken Equipment', text: 'Repair, replace, or hire a temporary unit.' },
  { icon: Truck, title: 'Fast Delivery', text: 'Priority dispatch of stocked equipment UAE-wide.' },
  { icon: Zap, title: 'Emergency Install', text: 'Same-day install of critical replacement units.' },
  { icon: Cog, title: 'Spare Parts', text: 'Genuine parts pulled from our warehouse stock.' },
];

export const BRANCHES = [
  { name: 'Dubai Branch', area: 'Deira, Dubai, UAE', email: 'admin@mariotkitchen.com', phone: '+971 4 288 2777', tag: 'Head office' },
  { name: 'Al Ain Branch', area: 'Al Ain Industrial Area, UAE', email: 'alain@mariotkitchen.com', phone: '+971 3 722 7337', tag: 'Showroom' },
  { name: 'Abu Dhabi Muroor Branch', area: 'Muroor Road, Abu Dhabi, UAE', email: 'sales2@mariotkitchen.com', phone: '+971 2 645 9353', tag: 'Showroom' },
  { name: 'Sharjah Branch', area: 'Al Majaz, Sharjah, UAE', email: 'sales@mariot-group.com', phone: '+971 6 767 7777', tag: 'Showroom' },
  { name: 'Sharjah Industrial Branch', area: 'Industrial Area, Sharjah, UAE', email: 'factory@mariotkitchen.com', phone: '+971 6 767 7776', tag: 'Factory' },
];

export const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain', 'Other'];

/* SAMPLE PORTFOLIO — replace titles, details and photos with your real projects.
   The live site currently lists two projects without descriptions. */
export const PROJECTS = [
  { slug: 'luxury-hotel-kitchen', title: 'Luxury Hotel Kitchen', sector: 'hotel', place: 'Dubai', img: '1556910103-1c02745aae4d', area: '420 m²', scope: 'Design · Supply · Fabrication · Installation', text: 'Main production and banquet kitchen with dedicated pastry, cold rooms and stewarding.' },
  { slug: 'fine-dining-show-kitchen', title: 'Fine Dining Show Kitchen', sector: 'restaurant', place: 'Abu Dhabi', img: '1414235077428-338989a2e8c0', area: '160 m²', scope: 'Design · Supply · Installation', text: 'Open show kitchen with a custom cooking suite and chef’s pass facing the dining room.' },
  { slug: 'specialty-coffee-bar', title: 'Specialty Coffee Bar', sector: 'cafe', place: 'Sharjah', img: '1554118811-1e0d58224f24', area: '65 m²', scope: 'Supply · Fabrication', text: 'Espresso platform, pastry display and compact back prep for a specialty café.' },
  { slug: 'artisan-bakery-line', title: 'Artisan Bakery Line', sector: 'bakery', place: 'Dubai', img: '1509440159596-0249088772ff', area: '120 m²', scope: 'Supply · Installation · Training', text: 'Deck ovens, spiral mixers and retarder-proofers sized for daily artisan production.' },
  { slug: 'beach-resort-outlets', title: 'Beach Resort Outlets', sector: 'resort', place: 'Ras Al Khaimah', img: '1571003123894-1f0594d2b5d9', area: '600 m²', scope: 'Turn-key', text: 'Central production kitchen feeding three outlets and a pool bar.' },
  { slug: 'private-villa-kitchen', title: 'Private Villa Kitchen', sector: 'villa_palace', place: 'Al Ain', img: '1600585154340-be6161a56a0c', area: '90 m²', scope: 'Design · Fabrication · Installation', text: 'Show kitchen and back kitchen with made-to-measure stainless steel.' },
  { slug: 'hospital-central-production', title: 'Hospital Central Production', sector: 'hospital', place: 'Abu Dhabi', img: '1519494026892-80bbd2d6fd0d', area: '350 m²', scope: 'Turn-key', text: 'HACCP-compliant patient meal production with separate diet lines.' },
  { slug: 'catering-production-hub', title: 'Catering Production Hub', sector: 'catering', place: 'Dubai', img: '1555244162-803834f70033', area: '500 m²', scope: 'Supply · Installation', text: 'High-volume cook-chill production with packaging and dispatch.' },
  { slug: 'supermarket-fresh-section', title: 'Supermarket Fresh Section', sector: 'supermarket', place: 'Sharjah', img: '1542838132-92c53300491e', area: '280 m²', scope: 'Supply · Installation', text: 'Refrigerated displays, cold rooms and butchery preparation area.' },
];

export const BRAND_CATS = ['All', 'Cooking', 'Refrigeration-line', 'Coffee & Bar', 'Bakery', 'Food Processing', 'Snack Maker', 'Dish Washer', 'Super Market', 'Dry Store'];
const RAW_BRANDS = `3MF|3mf|3mf.webp|Refrigeration-line,Snack Maker
Ailipu|ailipu|ailipu-1.webp|Cooking
Alto-Shaam|alto-shaam|Alto-Shaam.webp|Cooking
Anfim|anfim|anfilm.webp|Coffee & Bar
APW Wyott|apw-wyott|apwwyott.webp|Bakery,Snack Maker
Asaki|asaki|asaki-logo.webp|Coffee & Bar,Food Processing
Battistella|battistella|BATTISTELLA-1.webp|Super Market
Berjaya|berjaya|Berjaya-Logo.webp|Super Market
Bilait|bilait|BILAIT-Logo.webp|Snack Maker
Bimatic|bimatic|bimatic.webp|Cooking
Blendtec|blendtec|Blendec-logo.webp|Coffee & Bar
Brema|brema|brema.webp|Refrigeration-line
Bunn|bunn|bunn.webp|Coffee & Bar
Camry|camry|camry.webp|Super Market
Capinox|capinox|capinox.webp|Bakery,Food Processing
Cofrimell|cofrimell|cofrimell.webp|Coffee & Bar
Desmon|desmon|desmon.webp|Refrigeration-line
Easyline|easyline|easyline.webp|Cooking,Coffee & Bar,Food Processing,Dry Store
Electrolux|electrolux|electrolux.webp|
Empero|empero|empero.webp|Cooking,Refrigeration-line,Coffee & Bar,Bakery,Food Processing,Snack Maker,Dish Washer,Dry Store
Fagor|fagor|FagorProfesional.webp|Dish Washer
Ace Filters|ace-filters|Falater.webp|
Fimar|fimar|fimar.webp|Cooking,Coffee & Bar,Food Processing
Frymaster|frymaster|FRYMASTER.webp|Cooking
Gelmatic|gelmatic|gelmatic.webp|Refrigeration-line
GGF|ggf|ggf-logo.webp|Cooking,Bakery
GHS|ghs|ghs.webp|Coffee & Bar
Grindmaster|grindmaster|grindmaster.webp|Coffee & Bar
Hatco|hatco|hacto.webp|Cooking
Hamilton Beach|hamilton-beach|hamilton-logo.webp|Cooking,Coffee & Bar,Bakery
Henny Penny|henny-penny|hennypenny.webp|Cooking
Hoonved|hoonved|hoonved.webp|Dish Washer
Hoshizaki|hoshizaki|hoshizaki.webp|Refrigeration-line
Imesa|imesa|imesa.webp|Dish Washer
Imperial|imperial|IMPERIAL.webp|
Infrico|infrico|inofrigo.webp|Refrigeration-line,Bakery
Josper|josper|josper.webp|Cooking
KitchenAid|kitchenaid|Kitchen-Aid.webp|Bakery
La Marzocco|la-marzocco|La-Marzocco.webp|Coffee & Bar
La Minerva|la-minerva|LA-MINERVA.webp|Food Processing
La Cimbali|la-cimbali|lacimbali.webp|Coffee & Bar
Miska|miska|Logo-MiskaFoodTechnology1.webp|Food Processing
Longoni|longoni|Longoni-Brand.webp|Bakery
Mac.Pan|mac-pan|macpac.webp|Bakery
Mahlkonig|mahlkonig|MAHLKONIG-vector-logo.webp|Coffee & Bar
Mariot|mariot|mariot.webp|Refrigeration-line,Coffee & Bar,Food Processing,Snack Maker,Super Market,Dry Store
MBM|mbm|mbm-logo.webp|Cooking,Bakery,Dish Washer
Menumaster|menumaster|menumaster.webp|Cooking,Bakery
Merrychef|merrychef|merrychef.webp|
Middleby Marshall|middleby-marshall|middleby-marshall-logo.webp|Cooking
MKE-Matic|mke-matic|mke-logo.webp|Refrigeration-line,Coffee & Bar
Moel|moel|moel.webp|Dry Store
Monolith|monolith|monolith.webp|
Mussana|mussana|mussana.webp|
Nuova Simonelli|nuova-simonelli|simonelli.webp|Coffee & Bar
Omega|omega|Omega.webp|Food Processing
Oztiryakiler|oztiryakiler|oztriyakiler.webp|Cooking,Dish Washer
Pastaline|pastaline|pastaline.webp|Bakery
Pitco|pitco|pitco.webp|Cooking
POSLIX|poslix|poslix.webp|Super Market
Prince Castle|prince-castle|prince-casle.webp|
Rancilio|rancilio|Rancilio-logo-1.webp|
Rational|rational|rational.webp|Cooking
Red Fox|red-fox|redfox.webp|Cooking,Bakery
Robot Coupe|robot-coupe|robotcoupe.webp|Coffee & Bar,Bakery,Food Processing
Roller Grill|roller-grill|roller-grill.webp|Cooking,Refrigeration-line,Bakery,Snack Maker
Rotondi Group|rotondi-group|Rotondi-Group.webp|
SAB|sab|sab.webp|Coffee & Bar
Salva|salva|salva.webp|Cooking
Samixir|samixir|samixir.webp|Cooking,Coffee & Bar
Santos|santos|santos.webp|Coffee & Bar,Food Processing
SAP|sap|sap-bone-saw-machine-in-dubai.webp|Food Processing
Scotsman|scotsman|Logo-1.webp|
Server|server|server.webp|Cooking
Sheffield|sheffield|Sheffiel.webp|Snack Maker
Snooker|snooker|snooker-1.webp|Refrigeration-line
Sofinor|sofinor|sofinor.webp|Food Processing,Dry Store
Southbend|southbend|southbend.webp|Cooking
Spaceman|spaceman|20210329_Spaceman-Logo_Black.webp|
Speed Queen|speed-queen|Speed-Queen.webp|
Star|star|star.webp|Cooking,Coffee & Bar,Snack Maker
Stilco|stilco|stilco1.webp|Cooking,Refrigeration-line,Bakery,Snack Maker
Technocooler|technocooler|technocooler.webp|Refrigeration-line,Bakery
Tecnodom|tecnodom|tecnodom.webp|Refrigeration-line,Bakery,Super Market
Toastmaster|toastmaster|Toastmaster.webp|
TurboChef|turbochef|turbo-chef.webp|Cooking
Ubermilk|ubermilk|uebermilk_logo_small.webp|
Union|union|Union.webp|
Unox|unox|unox.webp|Cooking,Bakery
Venarro|venarro|venarro.webp|Bakery
Venix|venix|venix.webp|Cooking,Bakery
Vitamix|vitamix|vitamix.webp|Coffee & Bar
VITO|vito|VITO-OIL-FILTER-SYSTEM.webp|Cooking
Vulcan|vulcan|VULCAN-BRAND.webp|Cooking
Waring|waring|warning.webp|Cooking,Coffee & Bar,Food Processing
Zemic Europe|zemic-europe|Zemic-Europe.webp|Coffee & Bar
Zmatik|zmatik|zmatik-1.webp|Dry Store
Zumex|zumex|Zumex.webp|Coffee & Bar`;
export const BRANDS = RAW_BRANDS.split('\n').map((l) => {
  const [name, slug, file, cats] = l.split('|');
  return { name, slug, file, cats: cats ? cats.split(',') : [] };
});
/* Logos: looks in /assets/brands/ of this site first, then falls back to the live site, then to text. */
export const BRAND_LOGO_PATHS = ['/assets/brands/', 'https://mariot-group.com/assets/brands/'];
