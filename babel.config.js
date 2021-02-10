module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
				alias: {
					'components': './src/components',
					'containers': './src/containers',
					'screens': './src/screens',
					'stores': './src/stores',
					'icons': 'assets/icons',
					'images': 'assets/images',
					'utils': './src/utils',
				},
			},
		],
	],
};
