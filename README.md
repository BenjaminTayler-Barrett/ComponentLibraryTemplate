# Template for a Component Library

---

## Getting Started

To get everything up and running, you should have the LTS version
of NodeJS installed, and Yarn classic. If not, then make sure you install those first.

It is advisable to use [node version manager](https://github.com/nvm-sh/nvm#installing-and-updating) to install NodeJS,
and [yarn classic](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to install yarn.

If you're not running Ubuntu, or you don't want to use NVM, your millage may vary.

Once these packages are installed, run:
```zsh
yarn install
```

This should install all the dependencies for the component library. Once this is done, see the `package.json` file for 
available scripts. The most useful ones are:

```zsh
yarn run clean:build
```
This will remove all generated files then will lint the project, build the css from tailwind, run tests with coverage,
then build the project.

```zsh
yarn run lint:fix
```
This will attempt to auto fix any issues brought up by ESlint.

```zsh
yarn run format
```
This will auto fix any issues raised by Prettier.

```zsh
yarn run test:watch
```
This will constantly be running unit tests in the background.

```zsh
yarn run tailwind:watch
```
This will constantly update the css file with any correct styles whenever tailwind classes are added or removed.

```zsh
yarn run storybook
```
Will run storybook with HMR.
