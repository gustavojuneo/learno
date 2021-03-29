<div align="center">
  <img src="./.github/logo.png">
</div>

<br />
<p align="center">
  <a href="#the-solution">Solution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## The Solution

<div align="center">
  <img src="./.github/screenshot.png">
</div>

An open source application, using the concepts of the pomodoro method with task registration and user profile to save your progress.

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](http://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [FaunaDB](https://fauna.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [Yarn](https://yarnpkg.com/)

## How to use

### Required Environment Variables

- NEXTAUTH_URL
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- FAUNADB_KEY

### Repository clone

To download the project on your machine, run the command below in the terminal or [download](https://github.com/gustavojuneo/learno/archive/main.zip).

```bash
$ git clone https://github.com/gustavojuneo/learno/.git
```

### Installing the Dependencies

To be able to start the application it will be necessary to install the project dependencies, run the command below in the directory to install all the necessary dependencies.

```bash
$ yarn install
```

ou

if you don't use Yarn you can use npm, just remove the yarn.lock file from inside the folder and run the following command:

```bash
$ npm install
```

### Starting the Application

To start the application use the command:

```bash
$ yarn dev
```

The application will run by default on the route:
https://localhost:3000

## LICENSE

This project is under [LICENSE](../LICENSE) from MIT.
