import bem from 'bem-ts';
import React, { Component } from 'react';

const b = bem('Error');

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
        <div className={b()}>
          <header>
            <h1 className="alert-heading">Something went wrong :(</h1>
            <h2>I'll working hard to resolve it</h2>
            <h3>Please kindly report this error to Smile</h3>
            <hr />
          </header>
          <div className={b('info')}>Addition infomation : {this.state.error?.message}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
