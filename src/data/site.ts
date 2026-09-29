export const site = {
  name: 'ROOFRIVA',
  tagline: 'Built Above. Built to Last.',
  phone: '(512) 555-0147',
  phoneHref: 'tel:+15125550147',
  email: 'hello@roofriva.example',
  hours: 'Monday–Friday: 8:00 AM–5:00 PM',
  serviceArea: 'Austin Metro Area, Texas',
  domain: 'https://roofriva.keydiv.workers.dev',
  demo: true,
};

const asset = (name: string) => `/assets/roofriva/${name}.jpg`;

const roofingPhotos = {
  hero: asset('hero-traditional'),
  house: asset('hero-traditional'),
  crew: asset('crew-blueprint'),
  shingles: asset('shingles'),
  install: asset('install'),
  repair: asset('repair'),
  roof: asset('roof'),
  inspection: asset('inspection'),
  metal: asset('metal'),
  tile: asset('tile'),
  faq: asset('faq'),
};

export { roofingPhotos };

export const services = [
  { slug: 'roof-repair', title: 'Roof Repair', short: 'Targeted repairs for leaks, flashing, damaged shingles and localized wear.', image: roofingPhotos.repair },
  { slug: 'roof-replacement', title: 'Roof Replacement', short: 'A complete replacement path for aging, storm-worn or extensively damaged roofing.', image: roofingPhotos.shingles },
  { slug: 'residential-roofing', title: 'Residential Roofing', short: 'Roofing systems planned around the home, material, ventilation and drainage needs.', image: roofingPhotos.house },
  { slug: 'roof-inspection', title: 'Roof Inspection', short: 'A visual condition review to help identify damage, wear and the right next step.', image: roofingPhotos.inspection },
  { slug: 'metal-roofing', title: 'Metal Roofing', short: 'Modern metal roof profiles for distinctive looks and durable exterior protection.', image: roofingPhotos.metal },
];

export const faqs = [
  ['How do I know if my roof needs replacement?', 'Localized damage may be repairable, while widespread wear, repeated leaks, missing material or significant deterioration can point toward replacement. A site-specific inspection is the best starting point.'],
  ['How long does a typical roof replacement take?', 'Timing depends on roof size, complexity, weather, material choice and site conditions. A real contractor should confirm the schedule after inspection.'],
  ['What roofing materials do you install?', 'This demo template presents asphalt shingles, designer shingles, metal and tile as common material categories. A real client should replace this with their verified offering.'],
  ['Can you inspect storm damage?', 'A roofing inspection can document visible damage after wind or hail. Roofing contractors do not replace the role of an insurer or public adjuster.'],
  ['Do you provide free estimates?', 'This template demonstrates an estimate-request journey. The final client should confirm whether estimates are free and update the wording accordingly.'],
  ['How often should I have my roof inspected?', 'Inspection frequency depends on roof age, material, climate and recent weather events. Homeowners should also inspect after severe storms or when signs of leakage appear.'],
];
