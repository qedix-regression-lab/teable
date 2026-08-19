// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("apps/nestjs-backend/src/features/base/base.controller.ts",input);
}
