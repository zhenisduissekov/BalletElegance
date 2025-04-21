import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
}

// Dynamically set base for Wouter routing
const isDev = import.meta.env.DEV;
const base = isDev ? "/" : "/BalletElegance";

function App() {
    return (
        <Router base={base}>
            <TooltipProvider>
                <Toaster />
                <Routes />
            </TooltipProvider>
        </Router>
    );
}

export default App;
