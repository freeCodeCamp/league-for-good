module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		mongo: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		}
	},
	rules: {
		'no-cond-assign': ['warn'],
		'comma-dangle': ['error', 'always-multiline'],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'jsx-quotes': ['error', 'prefer-double'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-console': ['warn'],
	},
};
