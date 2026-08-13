// COCO Design style reminder: case studies are spacious, image-led, and editorial;
// keep each project useful as proof of capability, not just a gallery tile.
import { Link } from "wouter";

const projects = [
  { no: "01", type: "Residential renovation / Living", title: "Light-drawn family lounge", desc: "A soft renovation organized around daylight, oak, and low sculptural furniture.", image: "/manus-storage/coco-project-living-original_42028b94.png", slug: "light-drawn-family-lounge" },
  { no: "02", type: "Apartment design / Dining", title: "City kitchen with quiet evening light", desc: "A compact city home shaped by warm task lighting and dark wood rhythm.", image: "/manus-storage/coco-project-dining-original_1c86ecd9.png", slug: "city-kitchen-evening-light" },
  { no: "03", type: "Primary suite / Bedroom", title: "Textured bedroom retreat", desc: "A calm suite using plaster, linen, and integrated storage to reduce visual noise.", image: "/manus-storage/coco-project-bedroom-original_33a24536.png", slug: "textured-bedroom-retreat" },
];

export default function Works() {
  return <div className="site-page section-sand"><section className="page-hero section-cream"><div className="section-label">Selected works</div><h1>Quiet transformations<br />for everyday living.</h1><div className="text-link-row"><a href="#living">Living</a><a href="#dining">Dining</a><a href="#bedroom">Bedroom</a></div></section><section className="works-preview section-sand">{projects.map((project) => <article className="work-detail" id={project.type.split(" /")[1]?.toLowerCase()} key={project.slug}><div className="detail-intro"><div className="section-label">{project.no} / {project.type}</div><div><h2>{project.title}</h2><p>{project.desc}</p><Link className="text-link" href={`/works/${project.slug}`}>View project</Link></div></div><img className="detail-hero-image" src={project.image} alt={project.title} /></article>)}</section></div>;
}
