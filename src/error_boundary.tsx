import React, { Component } from 'react';

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error: error });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <header>
            <h1 className="alert-heading">Something went wrong!</h1>
            <p>Please try again later.</p>
            <hr />
          </header>
          <div>{this.state.error?.message}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
