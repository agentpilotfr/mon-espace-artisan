import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC = '_content/cmonsite-export/images';
const OUT_GUILLAUME = 'public/images/guillaume';
const OUT_LOGOS = 'public/images/logos';
const OUT_DOCS = 'public/documents';

fs.mkdirSync(`${OUT_GUILLAUME}/seminaires`, { recursive: true });
fs.mkdirSync(`${OUT_GUILLAUME}/chef-domicile`, { recursive: true });
fs.mkdirSync(`${OUT_GUILLAUME}/evjf`, { recursive: true });
fs.mkdirSync(`${OUT_GUILLAUME}/misc`, { recursive: true });
fs.mkdirSync(OUT_DOCS, { recursive: true });

const mapping = [
  // Séminaires
  { src: 'ateliers-de-cuisine-seminaires.jpg', dest: `${OUT_GUILLAUME}/seminaires/ateliers-seminaires.webp`, w: 900, q: 85 },
  // Chef à domicile
  { src: 'chef-a-domicile-la-baule-nantes_1.jpg', dest: `${OUT_GUILLAUME}/chef-domicile/chef-domicile-1.webp`, w: 900, q: 85 },
  { src: 'menu-chef-a-domicile.jpeg', dest: `${OUT_GUILLAUME}/chef-domicile/menu-chef-domicile.webp`, w: 900, q: 85 },
  // Cours de cuisine
  { src: 'coursdecuisinelabaule.jpg', dest: `${OUT_GUILLAUME}/cours/cours-la-baule.webp`, w: 900, q: 85 },
  { src: 'coursdecuisine2-1.jpg', dest: `${OUT_GUILLAUME}/cours/cours-2.webp`, w: 900, q: 85 },
  { src: 'coursdecuisine2.1_1.jpg', dest: `${OUT_GUILLAUME}/cours/cours-3.webp`, w: 900, q: 85 },
  // EVJF
  { src: 'evg.png', dest: `${OUT_GUILLAUME}/evjf/evjf.webp`, w: 900, q: 85 },
  // Restaurant
  { src: 'restaurant.jpeg', dest: `${OUT_GUILLAUME}/restaurant/restaurant-ext.webp`, w: 900, q: 85 },
  { src: 'brisartculinaire.jpeg', dest: `${OUT_GUILLAUME}/restaurant/brisart-facade.webp`, w: 900, q: 85 },
  // Cuisine
  { src: 'langoustinecroisic.png', dest: `${OUT_GUILLAUME}/cuisine/langoustine-croisic.webp`, w: 900, q: 85 },
  // Portraits / inconnus
  { src: 'p1591572-2.jpg', dest: `${OUT_GUILLAUME}/misc/photo-1.webp`, w: 1400, q: 88 },
  { src: 'p1591421_1.jpg', dest: `${OUT_GUILLAUME}/misc/photo-2.webp`, w: 1400, q: 88 },
  { src: 'img_9067-scaled.jpeg', dest: `${OUT_GUILLAUME}/misc/photo-3.webp`, w: 1400, q: 88 },
  { src: '1625902609605.jpg', dest: `${OUT_GUILLAUME}/misc/social-1.webp`, w: 900, q: 85 },
  { src: '1605290370693.jpg', dest: `${OUT_GUILLAUME}/misc/social-2.webp`, w: 900, q: 85 },
  { src: '545826067_2841025679428340_7920255194099661977_n.jpg', dest: `${OUT_GUILLAUME}/misc/social-3.webp`, w: 900, q: 85 },
  { src: 'unnamed.jpg', dest: `${OUT_GUILLAUME}/misc/unnamed-1.webp`, w: 900, q: 85 },
  { src: 'unnamed_-3-.jpg', dest: `${OUT_GUILLAUME}/misc/unnamed-2.webp`, w: 900, q: 85 },
  { src: 'de094511-b146-46fd-a277-c3bca5268c95-scaled.jpg', dest: `${OUT_GUILLAUME}/misc/photo-4.webp`, w: 900, q: 85 },
  { src: 'd6ebf22b-9e62-4df9-b52f-4d460edb1e9e-scaled.jpeg', dest: `${OUT_GUILLAUME}/misc/photo-5.webp`, w: 900, q: 85 },
  { src: 'a617350a-cd48-4015-a5d8-d92a19637e32.jpg', dest: `${OUT_GUILLAUME}/misc/photo-6.webp`, w: 900, q: 85 },
  { src: 'c5a00c38-bfd5-41ae-b7ee-daba79e75a44-scaled.jpg', dest: `${OUT_GUILLAUME}/misc/photo-7.webp`, w: 900, q: 85 },
  // Logos/design (keep as PNG — pas de conversion)
  { src: 'design-sans-titre-19.png', dest: `${OUT_LOGOS}/design-19.png`, copy: true },
  { src: 'design_sans_titre-17.png', dest: `${OUT_LOGOS}/design-17.png`, copy: true },
  { src: 'design-sans-titre-5.png', dest: `${OUT_LOGOS}/design-5.png`, copy: true },
  { src: '2.png', dest: `${OUT_LOGOS}/misc-2.png`, copy: true },
  { src: 'telechargement.png', dest: `${OUT_LOGOS}/telechargement.png`, copy: true },
  { src: '8.webp', dest: `${OUT_GUILLAUME}/cuisine/cuisine-8.webp`, copy: true },
];

const pdfs = [
  'boncours1.pdf', 'boncours3.pdf', 'les_huitres_de_mesquer_-1-.pdf',
  'accompagnant-au-cours.pdf', 'boncadeaucoffretgourmand.pdf',
  'boncadeauviergemenumidi.pdf', 'boncours1 (1).pdf', 'boncours2.pdf',
  'boncours3 (1).pdf', 'bonviergeimmersionencuisine.pdf',
];

let ok = 0, skip = 0, err = 0;

for (const item of mapping) {
  const srcPath = path.join(SRC, item.src);
  if (!fs.existsSync(srcPath)) { console.log(`⏭  SKIP (not found): ${item.src}`); skip++; continue; }
  if (fs.existsSync(item.dest)) { console.log(`⏭  SKIP (exists): ${item.dest}`); skip++; continue; }

  try {
    if (item.copy) {
      fs.copyFileSync(srcPath, item.dest);
      console.log(`✓  COPY  ${item.src} → ${item.dest}`);
    } else {
      await sharp(srcPath).resize({ width: item.w, withoutEnlargement: true }).webp({ quality: item.q }).toFile(item.dest);
      console.log(`✓  WebP  ${item.src} → ${item.dest}`);
    }
    ok++;
  } catch (e) {
    console.error(`✗  ERR   ${item.src}: ${e.message}`);
    err++;
  }
}

for (const pdf of pdfs) {
  const srcPath = path.join(SRC, pdf);
  if (!fs.existsSync(srcPath)) { console.log(`⏭  PDF SKIP: ${pdf}`); continue; }
  const dest = path.join(OUT_DOCS, pdf);
  if (!fs.existsSync(dest)) { fs.copyFileSync(srcPath, dest); console.log(`✓  PDF   ${pdf}`); }
}

console.log(`\nRésultat: ${ok} ok, ${skip} skip, ${err} erreurs`);
