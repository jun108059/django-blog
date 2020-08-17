const sidebar = require('./auto-sidebar-generator');

module.exports = {
    title: 'Django Blog✍',
    description: 'Youngjun django Wiki',
    email: 'youngjun108059@gmail.com',
    base:"/django-blog/",
    head: [
      ['link', { rel: 'icon', href: '/images/logo-144.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
      '@vuepress/back-to-top',
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }]
    ],
    themeConfig: {
      sidebar: [
        sidebar.getSidebarGroup('/200818/', '💙Session 1', true)
      ],
      nav: [
        { text: 'GitHub', link: 'https://github.com/jun108059/django-blog' },
        { text: 'Blog', link: 'https://dev-youngjun.tistory.com/' }
      ],
      smoothScroll: true,
      lastUpdated: 'Last Updated'
    }
  }