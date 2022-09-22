export interface Actions {
  startTransition: () => {
    isTransitioning: boolean;
    shouldRenderBg: boolean;
    shouldRenderPage: boolean;
  };
  exitTransition: () => {
    isTransitioning: boolean;
    shouldRenderBg: boolean;
    shouldRenderPage: boolean;
  };
  shouldRenderPage: () => {
    isTransitioning: boolean;
    shouldRenderBg: boolean;
    shouldRenderPage: boolean;
  };
}

export const transitionActions = {
  startTransition: () => ({
    isTransitioning: true,
    shouldRenderBg: true,
    shouldRenderPage: false,
  }),
  exitTransition: () => ({
    isTransitioning: false,
    shouldRenderBg: true,
    shouldRenderPage: false,
  }),
  shouldRenderPage: () => ({
    isTransitioning: false,
    shouldRenderBg: false,
    shouldRenderPage: true,
  }),
};
