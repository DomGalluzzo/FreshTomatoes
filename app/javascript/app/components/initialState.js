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
	watchlists: [
		{
			favorites: [
				{
					favorite: {},
				},
			],
		},
	],
	errorMessage: "",
};

export default initialState;
