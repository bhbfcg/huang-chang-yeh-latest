// COCO Design style reminder: reproduce the reference site's warm editorial minimalism,
// asymmetric spaces, crisp type, restrained motion, and studio-first navigation.
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import NotFound from "./pages/NotFound";
import SiteSeo from "./components/SiteSeo";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Process = lazy(() => import("./pages/Process"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Services = lazy(() => import("./pages/Services"));
const Works = lazy(() => import("./pages/Works"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/works" component={Works} />
      <Route path="/works/:slug" component={ProjectDetail} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={Process} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SiteSeo />
      <SiteHeader />
      <main><Suspense fallback={<div className="route-loading" aria-live="polite">Loading page…</div>}><Router /></Suspense></main>
      <SiteFooter />
    </ErrorBoundary>
  );
}

export default App;
