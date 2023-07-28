import clientPromise from '@/lib/mongodb';
const URL = `${process.env.NEXT_PUBLIC_VERCEL_URL}`;

function generateSiteMap(projects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/studio</loc>
     </url>
     <url>
       <loc>${URL}/contact</loc>
     </url>
     <url>
       <loc>${URL}/faqs</loc>
     </url>
     ${projects
       .map(({ slug }) => {
         return `
           <url>
               <loc>${`${URL}/projects/${slug}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}
export async function getServerSideProps({ res }) {
  const client = await clientPromise;
  const db = client.db('lumos-web');

  const data = await db.collection('projects').find({}).toArray();
  const projects = await JSON.parse(JSON.stringify(data));
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(projects);

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
