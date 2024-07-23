import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.tsx";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrips from "./view-trip/[tripId]/index.tsx";
import Header from "./components/shared/Header.tsx";
import { History } from "./history/index.tsx";
import * as Sentry from "@sentry/react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/create-trip", element: <CreateTrip /> },
  { path: "/view-trip/:tripId", element: <ViewTrips /> },
  { path: "/history", element: <History /> },
]);

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID_KEY}>
    <React.StrictMode>
      <Header />
      <RouterProvider router={routes} />
      <Toaster />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
