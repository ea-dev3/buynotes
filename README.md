## Make JAMstack apps, not sites with Gatsby + Netlify Identity + Netlify Functions

This is a fork of https://github.com/gatsbyjs/gatsby-starter-default which shows how to use Netlify Identity and Netlify Functions with Gatsby. Start here for your next JAMstack hackathon or use this as a reference implementation.

You can clone and deploy this sample project with one click:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter)

Basically these are the extra dependencies it adds:

- [`netlify-lambda`](https://github.com/netlify/netlify-lambda): For locally emulating Netlify Functions
- `http-proxy-middleware`: For proxying netlify-lambda function calls to avoid CORS issues as [per the Gatsby docs](https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying)
- [`netlify-identity-widget`](netlify-identity-widget): For adding

## Further Documentation in nested READMEs

- please see the [src README](/src/README.md) for explanation on the layout
- please see the [app README](/src/app/README.md) for explanation on the app

## Other Resources

Other useful resources/reference projects that may help you:

- https://github.com/netlify/create-react-app-lambda
- https://github.com/netlify/netlify-identity-widget/tree/master/example

Please contact [@swyx](https://twitter.com/swyx) if you need more help with Netlify.
