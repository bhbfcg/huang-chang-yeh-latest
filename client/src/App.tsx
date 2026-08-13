// COCO Design style reminder: reproduce the reference site's warm editorial minimalism,
// asymmetric spaces, crisp type, restrained motion, and studio-first navigation.
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Process from "./pages/Process";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import Works from "./pages/Works";

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
      <SiteHeader />
      <main>
        <Router />
      </main>
      <SiteFooter />
    </ErrorBoundary>
  );
}

export default App;
