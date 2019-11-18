// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome test',
    siteDescription: 'Getting started with Gridsome',
    templates: {
        Post: '/:title',
        Tag: '/tag/:id'
    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                path: 'content/posts/*.md',
                // route: '/blog/:slug',
                refs: {
                    // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
                    tags: {
                        typeName: 'Tag',
                        create: true
                    }
                }
            }
        }
    ],
    transformers: {
        remark: {
            //Add markdown support to all file-system sources
            remark: {
                externalLinksTarget: '_blank',
                externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
                anchorClassName: 'icon icon-link',
                plugins: [
                    '@gridsome/remark-prismjs'
                ]
            }
        }
    }
}
