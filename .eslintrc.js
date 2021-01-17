module.exports = {
	extends: ["eslint:recommended"],
	rules: {
		"prefer-const": ["warn"],
		"no-magic-numbers": [
			"warn",
			{
				ignore: [-1, 0, 1],
			},
		],
	},
	env: {
		node: true,
	},
}
