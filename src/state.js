
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    starred: [],
});

export { useGlobalState, setGlobalState }