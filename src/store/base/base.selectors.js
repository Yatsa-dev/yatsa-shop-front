export const loadingSelector = (state) => !!state.base.loading;
export const errorSelector = (state) => Object.values(state.base.errors);
