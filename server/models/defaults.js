exports.clients = [
  {
    id: 1,
    name: 'OAuth2 Client',
    website_url: 'https://github.com/zce/oauth2-example',
    privacy_url: 'https://github.com/zce/oauth2-example',
    client_id: 'oauth2-client',
    client_secret: 'f657d916-0ad9-4b65-9976-3fe796bbdea0',
    redirect_uris: ['http://localhost:4000/login/callback'],
    grants: ['authorization_code', 'password', 'refresh_token', 'client_credentials'],
    scope: 'all',
    user_id: 1
  }
]

exports.authorization_codes = [
  {
    id: 1,
    code: '4023348b5bc4',
    expires: new Date('2019-05-30 00:00'),
    redirect_uri: 'http://localhost:4000/login/callback',
    scope: 'posts:read',
    user_id: 1,
    client_id: 1,
  }
]

exports.access_tokens = [
  {
    id: 1,
    token: 'faee0258-b0a2-4d38-b12b-e0a9932a6b94',
    expires: new Date('2019-05-30 00:00'),
    scope: 'posts:read',
    user_id: 1,
    client_id: 1,
  }
]

exports.refresh_tokens = [
  {
    id: 1,
    token: 'cba19635-3bb4-47b1-87f6-8d0ff26b43f2',
    expires: new Date('2019-05-30 00:00'),
    scope: 'posts:read',
    user_id: 1,
    client_id: 1,
  }
]

exports.scopes = [
  {
    id: 1,
    scope: 'posts:read',
    id_default: true
  },
  {
    id: 2,
    scope: 'posts:create',
    id_default: false
  },
  {
    id: 3,
    scope: 'posts:delete',
    id_default: false
  },
  {
    id: 4,
    scope: 'posts:update',
    id_default: false
  }
]

exports.users = [
  {
    id: 1,
    slug: 'admin',
    username: 'admin',
    password: 'wanglei',
    nickname: 'Administrator',
    email: 'admin@zce.me',
    mobile: '13266668888',
    status: 'activated',
    scope: ''
  },
  {
    id: 2,
    slug: 'zce',
    username: 'zce',
    password: 'wanglei',
    nickname: 'Wang Lei',
    email: 'w@zce.me',
    mobile: '13266668888',
    status: 'activated',
    scope: ''
  }
]

exports.posts = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'Hello world',
    excerpt: '欢迎使用WordPress。这是您的第一篇文章。编辑或删除它，然后开始写作吧！',
    content: '<p>欢迎使用WordPress。这是您的第一篇文章。编辑或删除它，然后开始写作吧！</p>'
  },
  {
    id: 2,
    slug: 'welcome-to-ghost',
    title: 'Welcome to Ghost',
    excerpt: '👋 Welcome, it\'s great to have you here.',
    content: '<p>👋 Welcome, it\'s great to have you here.</p>'
  }
]
