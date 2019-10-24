module.exports = {
  pathPrefix: `/docs`,
  siteMetadata: {
    title: `DrupalConsole site`,
    description: `DrupalConsole site, docs, cheatsheet`,
    author: `@drupalconsole`,
  },
  mapping: {
    "LanguagesYaml.authors": `AuthorsYaml`,
    "ResourcesYaml.author": `AuthorsYaml`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "changelog",
        path: `${__dirname}/content/changelog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content/docs/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data/`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer external",
            },
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/drupal-console-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `UA-57046308-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
        languages: [
          {
            name: 'en',
            filterNodes: node => node.fields && node.fields.language === 'en',
          },
          {
            name: 'es',
            filterNodes: node => node.fields && node.fields.language === 'es',
          },
          // {
          //   name: 'ca',
          //   filterNodes: node => node.fields && node.fields.language === 'ca',
          // },
          // {
          //   name: 'fa-ir',
          //   filterNodes: node => node.fields && node.fields.language === 'fa-ir',
          // },
          {
            name: 'fr',
            filterNodes: node => node.fields && node.fields.language === 'fr',
          },
          // {
          //   name: 'hi',
          //   filterNodes: node => node.fields && node.fields.language === 'hi',
          // },
          {
            name: 'hu',
            filterNodes: node => node.fields && node.fields.language === 'hu',
          },
          {
            name: 'ja',
            filterNodes: node => node.fields && node.fields.language === 'ja',
          },
          // {
          //   name: 'mr',
          //   filterNodes: node => node.fields && node.fields.language === 'mr',
          // },
          // {
          //   name: 'pt-br',
          //   filterNodes: node => node.fields && node.fields.language === 'pt-br',
          // },
          {
            name: 'ro',
            filterNodes: node => node.fields && node.fields.language === 'ro',
          },
          {
            name: 'ru',
            filterNodes: node => node.fields && node.fields.language === 'ru',
          },
          // {
          //   name: 'vn',
          //   filterNodes: node => node.fields && node.fields.language === 'vn',
          // },
          // {
          //   name: 'zh-hans',
          //   filterNodes: node => node.fields && node.fields.language === 'zh-hans',
          // },
      ],
        // Fields to index. If store === true value will be stored in index file. 
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'content', store: true },
          { name: 'url', store: true },
        ],
        // A function for filtering nodes. () => true by default
        // filterNodes: (node) => !isNil(node.rawBody),
        // How to resolve each field's value for a supported node type 
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          Mdx: {
            content: (node) => node.rawBody,
            url: (node) => node.fields.slug,
            language:(node) => node.fields.language,
            excerpt:(node) => node.excerpt,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
