import { createBrowserRouter } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { AuthScreen } from "./screens/AuthScreen";
import { ProfileSetupScreen } from "./screens/ProfileSetupScreen";
import { MainLayout } from "./components/MainLayout";
import { HomeScreen } from "./screens/HomeScreen";
import { DareDiscoveryScreen } from "./screens/DareDiscoveryScreen";
import { NewDareScreen } from "./screens/NewDareScreen";
import { DareDetailsScreen } from "./screens/DareDetailsScreen";
import { ProofSubmissionScreen } from "./screens/ProofSubmissionScreen";
import { ApprovalScreen } from "./screens/ApprovalScreen";
import { MatchesScreen } from "./screens/MatchesScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SafetyScreen } from "./screens/SafetyScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/onboarding",
    element: <OnboardingScreen />,
  },
  {
    path: "/auth",
    element: <AuthScreen />,
  },
  {
    path: "/setup",
    element: <ProfileSetupScreen />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "dares", element: <DareDiscoveryScreen /> },
      { path: "dares/new", element: <NewDareScreen /> },
      { path: "dares/:id", element: <DareDetailsScreen /> },
      { path: "dares/:id/proof", element: <ProofSubmissionScreen /> },
      { path: "dares/:id/approval", element: <ApprovalScreen /> },
      { path: "matches", element: <MatchesScreen /> },
      { path: "chat/:id", element: <ChatScreen /> },
      { path: "profile", element: <ProfileScreen /> },
      { path: "safety", element: <SafetyScreen /> },
    ],
  },
]);
