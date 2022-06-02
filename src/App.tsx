import { ErrorBoundary } from "components/error-boundary";
import { AuthenticatedApp } from "authenticated-app";
import { FullPageErrorFallback } from "components/lib";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "screens/unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
