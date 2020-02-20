export const useStore = (() => {
	let storeInstance;

	const createStoreInstance = () => {
		let store = [ 'apple', 'grapefruit', 'banana' ];

		const getStore = () => {
			return store;
		};

		const setStore = (value) => {
			store = value;
			return store;
		};
		// ..creation of store and store methods
		return { getStore, setStore };
	};

	return () => {
		if (!storeInstance) {
			storeInstance = createStoreInstance;
		}
		return storeInstance;
	};
})();
