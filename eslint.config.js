import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginImportHelpers from 'eslint-plugin-import-helpers';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				Atomics: 'readonly',
				SharedArrayBuffer: 'readonly',
			},
		},
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			prettier: eslintPluginPrettier,
			import: eslintPluginImport,
			'import-helpers': eslintPluginImportHelpers,
		},
		rules: {
			'prettier/prettier': 'error',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'error',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'import-helpers/order-imports': [
				'error',
				{
					newlinesBetween: 'always',
					groups: [
						'/react/',
						'/^react-/',
						'module',
						'/^types/',
						'/^components/',
						'/^services/',
						'/^layouts/',
						'/^styled/',
						'/^styles/',
						'/^pages/',
						'/^routes/',
						'/^store/',
						['parent', 'sibling', 'index'],
					],
					alphabetize: {
						order: 'asc',
						ignoreCase: true,
					},
				},
			],
			'@typescript-eslint/camelcase': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/prop-types': 'off',
			'no-shadow': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/no-unescaped-entities': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
	},
];
