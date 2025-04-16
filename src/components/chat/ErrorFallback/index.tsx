import { ErrorContainer, ReloadButton } from "./styles";

export const ErrorFallback = ({ error }: { error: Error}) => {
    return (
      <ErrorContainer>
        <h3>Something went wrong</h3>
        <p>{error.message}</p>
        <div>
          <ReloadButton onClick={() => window.location.reload()}>
            Reload Page
          </ReloadButton>
        </div>
      </ErrorContainer>
    );
  };
  