import { createConfig } from "gatsby-theme-netlify-cms"

const config = createConfig({
  collections: [
    {
      label: "Notes",
      name: "notes",
      files: [
        {
          label: "Notes",
          name: "notes",
          file: "src/notes/index.md",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "about-page",
            },
            { label: "Title", name: "title", widget: "string" },
            { label: "Body", name: "body", widget: "markdown" },
          ],
        },
      ],
    },
  ],
})

//...

export default config
