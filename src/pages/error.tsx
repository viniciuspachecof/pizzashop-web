import { Link, useRouteError } from 'react-router';

export function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">Um erro aconterceu na aplicação, abaixo você encontra mais detalhes:</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-500">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
