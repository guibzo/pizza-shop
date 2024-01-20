import { Link, useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação. Abaixo você pode encontrar mais
        detalhes:
      </p>

      <div className="my-8 rounded-md border border-gray-200 px-8 py-4 dark:border-gray-700">
        <pre>{error?.message || JSON.stringify(error)}</pre>
      </div>

      <p className="text-lg text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className=" text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
