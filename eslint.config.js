import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		files: ['**/*.svelte'],
		rules: {
			// TODO: fix these pre-existing patterns
			'svelte/require-each-key': 'warn',
			'svelte/no-navigation-without-resolve': 'warn',
			'svelte/no-useless-children-snippet': 'warn',
			'svelte/no-useless-mustaches': 'warn'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
