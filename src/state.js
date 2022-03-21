
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    starred: [],
    selectedCharacter:{},
});

export { useGlobalState, setGlobalState }