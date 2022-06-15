module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:cypress/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"cypress"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": "off",
		"react/prop-types": "off",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
	},
	"globals": {
		"React": "writable", 
		"process": "writable", 
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
