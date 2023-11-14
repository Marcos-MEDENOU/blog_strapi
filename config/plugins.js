// ./config/plugins.js
'use strict';

module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::home.home',
          published: {
            url: 'http://localhost:1337',
          },
        },
        {
          uid: 'api::page.page',
          draft: {
            url: 'http://localhost:1337/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:1337/{slug}',
          },
        },
        {
          uid: 'api::post.post',
          draft: {
            url: 'http://localhost:1337/api/post/preview',
            query: {
              type: 'post',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:1337/post/{slug}',
          },
        },
      ],
    },
  },
};