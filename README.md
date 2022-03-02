This is the repo for my current personal portfolio site, built using Next.js, TailwindCSS, and Contentful.

## Initial setup

First, install all the required dependencies using:
```bash
npm ci
```
This ensures that all packages are pulled from `package-lock.json`, which helps avoid breaking changes with different package versions.

Next, all of the environment variables must be included. These include Contentful credentials, along with email credentials for Nodemailer (needed for the contact form to function). 

Since the app is built using TypeScript, custom types must be generated for content served by Contentful. They will be generated through a script automatically whenever the application is run locally or built for production, but can also be generated manually by running:

```bash
npm run contentful-types
```

## Running the app

From here, the standard `create-next-app` scripts apply. To run the app locally, run:

```bash
npm run dev
```

The app will be served on port 3000, and can be accessed at [http://localhost:3000](http://localhost:3000).

To build the app for production, run:

```bash
npm run build
```

## Deployment

All deployments are automated through Vercel. The production deployment tracks the main branch, so any changed pushed or merged into `main` will be reflected on the production app. Preview deployments are generated for any pull requests, and can be accessed by following the link provided by the Vercel bot.

The production app can be accessed at: [https://bbradforddesign.com](https://bbradforddesign.com).
