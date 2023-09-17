import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const errMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.statusText}`
  } else if (error instanceof Error) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    return 'Unknown error'
  }
}

const ErrorPage = () => {
  const error: unknown = useRouteError()
  const errorText: string = errMessage(useRouteError())
  console.error(error)

  return (
    <div id="error-page">
      no page found here...
      <p>{errorText}</p>
    </div>
  )
}

export default ErrorPage