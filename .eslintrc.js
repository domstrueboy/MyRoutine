module.exports = {
	env: {
		browser: true,
		es2022: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['solid'],
	extends: ['xo', 'eslint:recommended', 'plugin:solid/typescript'],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
};
