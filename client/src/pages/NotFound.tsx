// COCO Design style reminder: even error states should remain calm, typographic, and
// provide a clear way back to the studio rather than exposing a generic template.
import { Link } from "wouter";

export default function NotFound() {
  return <div className="not-found"><h1>404</h1><p>The page you are looking for is not part of this studio yet.</p><Link className="button button-dark" href="/">Back to home</Link></div>;
}
