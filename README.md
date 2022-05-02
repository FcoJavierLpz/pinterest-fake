# The Awesome Pinterest Fake

- Firebase Authentication with google provider and email/password.
- Show Gallery from ImgUr API
- Lazy Loading for images
- Infine Scrolling

### Requirements

- Node.js 16.15.0
- Npm 8.5.5
- Git
- Typescript
- React 18
- Firebase 9
- Vite.js
- TailwindCSS 3

### Setup

For dependencies use:

```bash
$ sudo npm install
```

For install git hooks into git repository

```bash
npm run prepare
```

⚠️ Git Commits: Follow the conventional commits defined in the file .conmmitlintrc

### Development

For develop cycle use:

```bash
$ npm run dev
```

  <h2 style="color: orangered">⚠️ Caveats</h2>

**Development mode** (domain crossover issues):

- To consume the imgur services you must launch the application on your local network which deploys vitejs after running npm run dev.

- To consume the google authentication service it must be launched from the localhost.

- Into website with the reverse proxy configuration these problems do not apply.

### Testing static

**Linters & Formatters**

Find lint issues

```bash
$ npm run lint
```

Lint fix issues

```bash
$ npm run lint:fix
```

Find format issues

```bash
$ npm run format
```

Format Code

```bash
$ npm run format:fix
```

### Deploy

```bash
$ npm run build && npm run preview
```

### Website Deployment Site

> [https://the-awesome-pinterest-fake.netlify.app/](https://the-awesome-pinterest-fake.netlify.app/)
