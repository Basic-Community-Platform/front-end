import React from "react"
import { FallbackProps } from "react-error-boundary"

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div role="alert" className="flex items-center justify-center">
			<p className="">Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary} className="rounded-sm bg-blue-800 text-white">
				Try again
			</button>
		</div>
	)
}
