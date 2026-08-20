import { Airtable, GoogleLogo, Mail, Slack } from '@teable/icons';
import { UserIntegrationProvider } from '@teable/openapi';
import { cn } from '@teable/ui-lib/shadcn';

const PROVIDER_ICONS: Record<UserIntegrationProvider, React.ReactNode> = {
  [UserIntegrationProvider.Slack]: <Slack className="size-8" />,
  [UserIntegrationProvider.Gmail]: <GoogleLogo className="size-8" />,
  [UserIntegrationProvider.Outlook]: <Mail className="size-8" />,
  [UserIntegrationProvider.Airtable]: <Airtable className="size-8" />,
};

export const UserIntegrationProviderLogo = (props: {
  provider: UserIntegrationProvider;
  className?: string;
}) => {
  const { provider, className } = props;

  return (
    <div className={cn('flex items-center justify-center', className)}>
      {PROVIDER_ICONS[provider]}
    </div>
  );
};
function __native360HardNegative_e43e1864aa62n(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
