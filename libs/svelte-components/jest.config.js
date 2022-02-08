module.exports = {
  displayName: 'svelte-components',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^(.+\\.svelte$)': [
      'svelte-jester',
      {
        preprocess: 'libs/svelte-components/svelte.config.cjs',
      },
    ],
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['svelte', 'ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/svelte-components',
};
