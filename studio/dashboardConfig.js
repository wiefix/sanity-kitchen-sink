export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613db74f973b72fca91b561e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xokrugh5',
                  apiId: 'ad9a0ffe-e219-49d3-aa1f-fb296907e28d'
                },
                {
                  buildHookId: '613db74fe920e0c883844c16',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w3h76g8h',
                  apiId: '96e4632c-066f-46c3-bd3f-bb04480a96ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wiefix/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w3h76g8h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
