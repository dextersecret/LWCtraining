export const useStore = (() => {
	let storeInstance;

	const createStoreInstance = () => {
		let store = [ 'apple', 'grapefruit', 'banana' ];
		let subscribers = [];

		const getStore = () => {
			return store;
		};

		const setStore = (value) => {
			store = value;
			subscribers.forEach((fx) => fx());
			return store;
		};
		const subscribe = (fx) => {
			subscribers.push(fx);
		};
		const unsubscribe = (fx) => {
			let index = subscribers.indexOf(fx);
			subscribers.splice(index, 1);
		};

		// ..creation of store and store methods
		return { getStore, setStore, subscribe, unsubscribe };
	};

	return () => {
		if (!storeInstance) {
			storeInstance = createStoreInstance();
		}
		return storeInstance;
	};
})();
