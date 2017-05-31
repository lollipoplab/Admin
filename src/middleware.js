const middleware = store => next => action => {
	next(action)

	switch (action.type) {

	case 'ADD_ITEM':
		var string = 'http://0.0.0.0:3000/api/pops';
			fetch(string, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'Taffy',
					identification: '1234'
				})
			})
			.then(res => res.json())
			.then(data => next({ type: 'ADD_ITEM_STATUS', data }))
		break

	case 'READ_ITEM':
		var string = 'http://0.0.0.0:3000/api/pops';
		fetch(string)
			.then(res => res.json())
			.then(data => next({ type: 'READ_ITEM_STATUS', data }))
		break

	default:
		break

	}
};

export default middleware
