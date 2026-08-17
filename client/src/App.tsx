// COCO Design style reminder: reproduce the reference site's warm editorial minimalism,
// asymmetric spaces, crisp type, restrained motion, and studio-first navigation.
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
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
const TeahouseCaseStudy = lazy(() => import("./pages/TeahouseCaseStudy"));
const Services = lazy(() => import("./pages/Services"));
const Works = lazy(() => import("./pages/Works"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/works" component={Works} />
      <Route path="/works/teahouse-graduation-project" component={TeahouseCaseStudy} />
      <Route path="/works/:slug" component={ProjectDetail} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={Process} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RouteTransition() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div key={location} className="route-transition"><Router /></div>;
}

function App() {
  return (
    <ErrorBoundary>
      <SiteSeo />
      <SiteHeader />
      <main><Suspense fallback={<div className="route-loading" aria-live="polite">Loading page…</div>}><RouteTransition /></Suspense></main>
      <SiteFooter />
    </ErrorBoundary>
  );
}

export default App;
