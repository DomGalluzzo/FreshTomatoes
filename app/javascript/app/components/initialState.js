const initialState = {
	loading: false,
	movies: [
		{
			movie: {
				actors: [
					{
						actor: {},
					},
				],
				director: {},
				genre: {},
				reviews: [
					{
						review: {},
					},
				],
			},
		},
	],
	genres: [],
	watchlists: [],
	errorMessage: "",
};

export default initialState;
