export const request = async (method, url, data) => {
	try {
		let buildRequest = fetch(url);

		if (method === 'GET') {
			buildRequest = fetch(url);
		} else {
			buildRequest = fetch(url, {
				method,
				headers: {
					'content-type': 'application/json'
				},
				data: JSON.stringify(data)
			})
		}

		const response = await buildRequest;

		const result = await response.json();

		return result;
	} catch (error) {
		console.log(error);
	}
}
// export default request;