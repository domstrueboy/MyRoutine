export function rewriteStorage(key: string, obj: unknown) {
	try {
		localStorage.setItem(key, JSON.stringify(obj));
	} catch (err) {
		console.error('Error while writing state to localstorage');
	}
}
