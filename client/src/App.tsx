import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "@/components/ErrorBoundary";

// Pages
import Home from "@/pages/Home";
import UsersPage from "@/pages/infra/Users";
import ReputationPage from "@/pages/infra/Reputation";
import ProtocolPage from "@/pages/infra/Protocol";
import DiscussionPage from "@/pages/phase1/Discussion";
import ReviewPage from "@/pages/phase1/Review";
import DebatePage from "@/pages/phase2/Debate";
import AuctionPage from "@/pages/phase2/Auction";
import PipelinePage from "@/pages/phase2/Pipeline";
import TaskChainPage from "@/pages/phase3/TaskChain";
import EconomyPage from "@/pages/Economy";
import ChangelogPage from "@/pages/Changelog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/infra/users" component={UsersPage} />
      <Route path="/infra/reputation" component={ReputationPage} />
      <Route path="/infra/protocol" component={ProtocolPage} />
      <Route path="/phase1/discussion" component={DiscussionPage} />
      <Route path="/phase1/review" component={ReviewPage} />
      <Route path="/phase2/debate" component={DebatePage} />
      <Route path="/phase2/auction" component={AuctionPage} />
      <Route path="/phase2/pipeline" component={PipelinePage} />
      <Route path="/phase3/taskchain" component={TaskChainPage} />
      <Route path="/economy" component={EconomyPage} />
      <Route path="/changelog" component={ChangelogPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={false}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
