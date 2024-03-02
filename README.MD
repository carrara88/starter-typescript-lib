**Starter TypeScript Library for Node.js**

**Project Setup for the Library:**

1. Create a new directory for the library project, for example, my-node-lib.
2. Initialize npm project in the directory:

```bash
npm init
```

3. Answer the questions to create the package.json.

**Adding TypeScript and Configuration:**

1. Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

2. Init TypeScript in your project by creating a tsconfig.json file. You can use the following command to generate a default configuration file:

```bash
npx tsc --init
```

2. Configure TypeScript `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2016", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs", /* Specify what module code is generated. */
    "outDir": "./dist", /* Specify an output folder for all emitted files. */
    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true, /* Enable all strict type-checking options. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

**Defining the Library:**

1. Create a file named `index.ts` in your project directory.
2. Create an entity file named `/src/lib.factory.ts` in your project directory.
3. Inside the `/src/lib.factory.ts` file create an entity need to be exposed by library.

As sample place under `/src` subfolder your elements:

```typescript
// src/lib.factory.ts
export function info() {
    return "lib.factory.info()" 
}
```

**Exporting the Library:**

1. Export on `/index.ts` all entities created:

```typescript
/* index.ts */
import * as Factory from './src/lib.factory'

export { 
    Factory
};
```


**NPM Package configuration**

1. Edit NPM scripts to build your library:

```json
{
  "name": "my-node-lib",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "dev":"npx tsc -w",
    "start":"npx tsc",
    "build": "npx tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```


**Compiling the TypeScript Project:**

1. Compile your TypeScript project using the command:

```bash
npm run build
```

This will compile your TypeScript code into JavaScript within a dist directory.

**Using the Library Locally in Another Project:**

If you want to use the library locally in another TypeScript project without publishing it to npm, you can do so by directly linking the library path to your main project.

**Compiling the Library:**

Make sure you have compiled your library using the TypeScript command (npx tsc).

**Include local library source inside other local projects:**

You can include into a project as a related library.

1. Copy the library source from your library to your main project.

You can use Git or you can move entire source as sample under `/libs` root subfolder

2. Add the `/libs` path to your main project as a node module under `/node_modules` root subfolder:

- Open the tsconfig.json file of your main project.
- Add the library path to the paths section as follows:

```json
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "*": ["node_modules/*", "libs/*"]
    }
},
"include": [
    "src/**/*"
],
"exclude": [
    "node_modules",
    "**/*.spec.ts"
]
```

- Open the `webpack.config.js` file of your main project.
- Add to the `modules: ['node_modules', path.resolve(__dirname, 'libs')]` to load local library

resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'libs')],
    extensions: ['.tsx', '.ts', '.js'],
  },



**Importing the myLib Interface:**

Now you can import the myLib interface in your TypeScript files within your main project as follows:

```typescript
import * as lib from 'my-node-lib'
lib.Factory.info();
```

**Using the Interface:**

You can now use the myLib interface within your main project just like you would with any other installed library.

**Publishing to npm (Optional):**

**Preparation for Publishing:**

1. Choose a unique name for your npm package and ensure it's defined in `package.json` under "name".

**Login to npm (One-time only):**

Login to your npm account using the command:

```bash
npm login
```

You'll be prompted to enter your npm account credentials.

**Publishing the Package:**

To publish your package, run the command:

```bash
npm publish
```

This command will publish your library to the npm registry, making it available for installation by other users via npm install.

Make sure you've logged in to your npm account via npm login before running the publish command.

Once these steps are completed, your TypeScript library will be ready for use by other developers via npm.

You can install it in other TypeScript projects using the name you defined in your `package.json`.

For example, if you've defined `"name": "my-node-lib"` in your `package.json`, you can install it in another project by running `npm install my-node-lib`.
