# VT Hacks

## Prerequisites

NodeJS - v16.15.0\*
**(Please use to avoid Dependency Conflicts)**

## Changes from VueJS

_Note: This application is using TypeScript a superset of JavaScript any mention of JavaScript means TypeScript_

In VueJS, files were mainly written with plain HTML (templating), JavaScript, and SCSS in Single File Components with a close connection to the DOM.

[ReactJS](https://reactjs.org) uses a similar to HTML syntax called JSX (in this case it is TSX because TypeScript). This ensures that it is only JavaScript being written. Everything operates in the Virutal DOM.

Components are also now **functions** and are **rendered** instead of autoloaded

There is now a component library called [StoryBook](https://storybook.js.org/) to better customize and test components independently of the app

Considering using [Material UI](https://mui.com) or another framework to ease the learning curve of SCSS / CSS

## Usage

The framework used to support the React app as well as any additional technologies is [Nrwl Nx](https://nx.dev/).

### Starting Nx Application

```shell
//install packages
npm ci

//start service on localhost
npx nx serve <project-name>

//start test on service (will be done by husky)
npx nx test <project-name>

//run linter (also will be done by husky)
npx nx run <project-name>:lint
```

#### What is Husky? 🐶

Husky is a tool that pre-checks your code prior to committing to GitHub, this ensures good code coverage and uniformed styling

### File Structure

This project is structured by applications. Applications and Libraries can be generated using the Nx framework by running:

`nx g @nrwl/<generator> <project-name>`

The monorepo's file structure is as follows:

```
apps
|
|_ frontend
| |
| |_ src
| |  |_ app.tsx <-- where most of the css and styling goes
| |  |_ app.spec.tsx <-- jest testing
| |
| |_ assets
| |  |_ static images
| |
| |_ environment variables <-- any deployment keys and such
| |
| |_ favicon <-- icon for the website
| |
| |_ index.html <-- basic index.html
| |
| |_ main.tsx <-- renders the app
| |
| |_ tsconfig <-- shouldnt have to touch but typescript configuration files
|
|_ frontend-e2e (cypress end to end testing)

libs
|
|_ ui
  |_ .storybook
  |
  |_ src
    |_ lib
      |_ storybook components <-- each will have their own file
    |
    |_ index.ts <-- exports components
```

As more libraries and tools are added this will be subject to change

## Future Work

- [ ] Incorporating Live Site into Monorepo
- [ ] Adding DevTools to better update Live Site
