# Developers

## Link between projects

You can link `tiny-slider` with other projects locally, thanks to [NPM's `link` command](https://docs.npmjs.com/cli/v11/commands/npm-link).

> [!NOTE]  
> Both projects need to be npm compatible (i.e. have the same Node and NPM version).
> See example below.

Run:
- `npm run build -- -w` in the root of the project. This will watch the changes on the `src/` folder.
- `npm link' in this project
- `npm link @justia/tiny-slider` in the project you want to test this out.

### Example

```bash
# ~/repos/tiny-slider
nvm use 18 # using v18 because the other project uses it
npm link

cd ~/repos/justatic/www/hazel
nvm use 18 
npm link @justia/tiny-slider
```


> [!TIP]  
> You can use two terminals or terminal tabs so you can watch your changes while working on both projects :)
 
```bash
# TERMINAL 1
# ~/repos/tiny-slider
nvm use 18 # using v18 because the other project uses it
npm link
npm run build -- -w
```

```bash
# TERMINAL 2
cd ~/repos/justatic/www/hazel
nvm use 18 
npm link @justia/tiny-slider
```

## Troubleshooting

### Cache

If you're using Vite on your other project, your changes may not be reflected correctly.
The files in the `node_modules/` folder may be ok, but Vite uses a cache. To override it, run:
`vite --force`, which forces the optimizer to ignore the cache and re-bundle.

> [!WARNING]  
> You can't watch your changes comfortably :( You have to run `vite --force` every time you want to see your changes reflected. 

### JS Modules

This project uses the old CommonJS modules pattern, if your project uses the ES Modules syntax, use:

```ts
import * as tinySlider from '@justia/tiny-slider';

const { tns } = tinySlider;
```

Or... if you're also using **Vite** in your other project, add:

```ts
optimizeDeps: {
    include: ['@justia/tiny-slider']
  }
```

## Release

### 1. Update the Package Version

Do a _Search and Replace_ to replace the current version in several files:

- `package-lock.json`
- `package.json`
- `bower.json`
- `src/tiny-slider.scss`
- `src/tiny-slider.js`
- `src/tiny-slider.module.js`

You may need to run `npm run build` again.
Commit the changes with the message: `chore: update version to [NEW_VERSION]`.

### 2. Create a Pull Request

Nothing special here. 

### 3. Merge to Master

### 4. Publish to NPM

> [!IMPORTANT]
> You'll need to be logged into the Justia NPM account ([details here](https://github.com/justia/front-end-projects?tab=readme-ov-file#login-)).

Run:

```bash
npm publish
```