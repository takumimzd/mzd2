import { Component, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  fallbackUi?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error): void {
    console.error(error);
  }

  public render(): ReactNode {
    if (this.state.hasError) return this.props.fallbackUi;

    return this.props.children;
  }
}
