export const activeBaseDataDbMoveJobStates = [
  'pending',
  'waiting_worker',
  'copying_base_schema',
  'copying_shared_rows',
  'validating',
  'switching',
] as const;

export const cancelableBaseDataDbMoveJobStates = [
  'pending',
  'waiting_worker',
  'copying_base_schema',
  'copying_shared_rows',
  'validating',
] as const;

export const baseDataDbMovingErrorCode = 'BASE_DATA_DB_MOVING';

export const baseDataDbMoveProgressWeights = {
  preparing: 5,
  copying_base_schema: 55,
  copying_shared_rows: 15,
  validating: 15,
  switching: 10,
} as const;

export type IBaseDataDbMovePhase = keyof typeof baseDataDbMoveProgressWeights;
function __native360HardNegative_02619242b3f7n(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
