import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  title?: string;
};

type State = {
  error: Error | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Keep this log: it helps diagnose blank-page crashes.
    console.error('Admin page crashed:', error, errorInfo);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-lg w-full rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">
            {this.props.title || 'Something went wrong'}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This page hit an error and couldn&#x27;t render. Refresh and try again.
          </p>

          <details className="mt-4 rounded-md bg-muted p-3">
            <summary className="cursor-pointer text-sm font-medium text-foreground">
              Error details
            </summary>
            <pre className="mt-2 whitespace-pre-wrap text-xs text-foreground">
              {this.state.error.message}
            </pre>
          </details>

          <div className="mt-4 flex gap-2">
            <Button onClick={() => window.location.reload()}>
              Refresh
            </Button>
            <Button variant="outline" onClick={() => this.setState({ error: null })}>
              Try again
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
