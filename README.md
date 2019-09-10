## Make Authenticated, Serverless, Dynamic Clientside JAMstack apps with Gatsby + Netlify Dev (Functions + Identity)!

<marquee>
  <a href="https://app.netlify.com/sites/jamstack-hackathon-starter/deploys">
<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/7be76523-4643-4ce9-a6fd-a103463b62f3/deploy-status" />
  </a>
</marquee>

This is a fork of https://github.com/gatsbyjs/gatsby-starter-default which shows how to use Netlify Identity and Netlify Functions (via [Netlify Dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)) with Gatsby. Start here for your next JAMstack hackathon or use this as a reference implementation.

Features:

- ✅Serverless Functions
- ✅Authentication (with Netlify Identity)
- ✅Authenticated Serverless Functions
- ✅Protected Routes
- ✅Dynamic Clientside Pages in Gatsby (enabling all the above)

## 3 minute video walkthrough of this starter

[![walkthru](https://img.youtube.com/vi/bueXJInQt2c/1.jpg)](https://www.youtube.com/watch?v=bueXJInQt2c)


## Make this yourself

You may not need this starter repo! Learn how to add Netlify Identity and Functions to your own existing Gatsby project. 


- [May 2019 livestream](https://www.youtube.com/watch?v=vrSoLMmQ46k&feature=youtu.be) Note: this doesn't include Netlify Dev.
- Check our post on the Gatsby blog: [Turning the Static Dynamic: Gatsby + Netlify Functions + Netlify Identity](https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/)

## How to start

You can clone and deploy this sample project with one click:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms)

Basically these are the extra dependencies it adds:

- (TODO) [`netlify-lambda`](https://github.com/netlify/netlify-lambda): For locally emulating Netlify Functions
- [`react-netlify-identity-widget`](https://github.com/sw-yx/react-netlify-identity-widget): For adding Netlify Identity authentication easily on any React site

For local development, first make sure you have Netlify CLI:

```bash
npm i -g netlify-cli

## if you are totally new, you will probably need to log in, e.g.
netlify login
```

And then you can run this project with:

```bash
netlify dev # or ntl dev
```

This starts up both the Gatsby server (at port 8000) and a functions server (at a randomly selected port) and proxies them for you to a new port (usually port 8888). So make sure you go to `http://localhost:8888` to have the project work

You can read the [Netlify Dev docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md) for more info.

## Enabling Netlify Identity

If you are not using the **Deploy to Netlify** button (which has the `&stack=cms` parameter that automatically sets it up for you), you will have to enable Netlify Identity manually yourself. Just head to `https://app.netlify.com/sites/YOUR_SITE_HERE/identity` and enable it, so that your `netlify-identity-widget` works.

## Further Documentation in nested READMEs

- please see the [src README](/src/README.md) for explanation on the layout
- please see the [app README](/src/app/README.md) for explanation on the app

## Other Resources

Other useful resources/reference projects that may help you:

- https://github.com/netlify/create-react-app-lambda
- https://github.com/sw-yx/react-netlify-identity-widget

Please contact [@swyx](https://twitter.com/swyx) if you need more help with Netlify.
