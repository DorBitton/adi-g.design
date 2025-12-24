import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Keep a breadcrumb in the console for debugging in production.
    // eslint-disable-next-line no-console
    console.error('Route render error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-xl text-center space-y-4">
            <h1 className="text-3xl font-semibold">Something went wrong</h1>
            <p className="text-neutral-300">
              The page hit an unexpected error. Refresh usually fixes it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 transition-colors"
              >
                Refresh
              </button>
              <a
                href={`${import.meta.env.BASE_URL}#/`}
                className="px-5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-600 transition-colors"
              >
                Go home
              </a>
            </div>
            {import.meta.env.DEV && this.state.error ? (
              <pre className="mt-6 text-left text-xs text-neutral-400 whitespace-pre-wrap break-words">
                {String(this.state.error?.stack || this.state.error)}
              </pre>
            ) : null}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary


