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
	user: {
		favorites: [
			{
				favorite: {},
			},
		],
	},
	errorMessage: "",
};

export default initialState;
