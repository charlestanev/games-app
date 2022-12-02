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
				body: JSON.stringify(data)
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
export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST')
export const patch = request.bind({}, 'PATCH')
export const put = request.bind({}, 'PUT')
export const del = request.bind({}, 'DELETE')