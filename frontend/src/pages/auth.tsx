import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { useAuth } from '../hooks';

export const Auth: FC = () => {
  const auth = localStorage.getItem('auth');
  if (auth === 'true') return <Navigate to={'/home'} />;

  const loginWithGithub = () => {
    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.append(
      'client_id',
      'Ov23livCBo3pU5EO7Koz' || process?.env?.GITHUB_CLIENT_ID
    );
    url.searchParams.append(
      'redirect_uri',
      'http://localhost:5173/auth' || process.env.GITHUB_CALLBACK_URL
    );
    url.searchParams.append(
      'state',
      'ghjasbdaei123912HKbad' || process.env.RANDOM_STATE
    );

    window.location.href = url.toString();
  };
  useAuth();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow mx-auto max-w-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold leading-none tracking-tight text-2xl">
            Login
          </div>
          <div className="text-sm text-muted-foreground">
            Enter your hash-password or continue with GitHub
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            <button
              onClick={loginWithGithub}
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input  shadow-sm h-9 px-4 py-2
						bg-[#18181B] text-[#FAFAFA] hover:bg-[#18181B]/90"
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
