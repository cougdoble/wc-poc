import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { angularOutputTarget } from '@stencil/angular-output-target';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/stencil-components/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/stencil-components/www',
      serviceWorker: null, // disable service workers
    },

    angularOutputTarget({
      componentCorePackage: '@wc-poc/stencil-components',
      directivesProxyFile:
        '../../../libs/stencil-components-angular/src/generated/directives/proxies.ts',
    }),

    reactOutputTarget({
      componentCorePackage: '@wc-poc/stencil-components',
      proxiesFile:
        '../../../libs/stencil-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
