## Models

### User

id: objectId().str,
slug: 'admin',
username: 'admin',
password: 'wanglei',
nickname: 'Administrator',
email: 'admin@zce.me',
mobile: '13266668888',
status: 'activated',
scope: ''

### Scope

id: objectId().str,
scope: 'posts:update',
default: false

### Client

id: objectId().str,
name: 'OAuth2 Client',
website_url: 'https://github.com/zce/oauth2-example',
privacy_url: 'https://github.com/zce/oauth2-example',
key: 'oauth2-client', // client_id
secret: 'f657d916-0ad9-4b65-9976-3fe796bbdea0', // client_secret
redirects: ['http://localhost:4000/login/callback'], // redirect_uris
grants: ['authorization_code', 'password', 'refresh_token', 'client_credentials'],
scope: 'all',
user_id: 1

### AccessToken

id: objectId().str,
token: 'faee0258-b0a2-4d38-b12b-e0a9932a6b94', // access_token
expires: new Date('2019-05-30 00:00'), // expires_at
scope: 'posts:read',
user_id: 1,
client_id: 1,

### RefreshToken

id: objectId().str,
token: 'cba19635-3bb4-47b1-87f6-8d0ff26b43f2', // refresh_token
expires: new Date('2019-05-30 00:00'), // expires_at
scope: 'posts:read',
user_id: 1,
client_id: 1,

### AuthorizationCode

id: objectId().str,
code: '4023348b5bc4', // authorization_code
expires: new Date('2019-05-30 00:00'), // expires_at
redirect: 'http://localhost:4000/login/callback', // redirect_uri
scope: 'posts:read',
user_id: 1,
client_id: 1,

## Grant Types

### Authorization Code

应用站点：FooApp
授权站点：AuthApp

1. 用户在 FooApp 上点击 AuthApp 授权登录链接，例如：
  - http://localhost:3000/oauth/authorize?response_type=code&client_id=oauth2-example-client&redirect_uri=http://localhost:4000/login/callback&scope=posts:read
2. 用户进入 AuthApp 页面进行授权，如果当前用户还没有在 AuthApp 登录，则需要先跳转到 AuthApp 登录
  -

## References

https://blog.csdn.net/shinepan/article/details/78851886
https://github.com/YardStrong/express-oauth-demo

https://www.jianshu.com/p/7febbe553c83
https://github.com/RobottDog/DCOS-Auth

https://github.com/syntithenai/react-express-oauth-login-system

https://github.com/manjeshpv/node-oauth2-server-implementation

https://github.com/oauth-xx/oauth2

https://tools.ietf.org/html/rfc6749

https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

https://github.com/greenspanx/node_oauth2_rest_api/blob/master/server.js

https://github.com/zhanghengxin/test-oauth2/blob/master/oauth-model/model.js

https://github.com/slavab89/oauth2-server-example-mongodb

请求授权

GET /authorize
  client_id: 9c16d1d9d4235bb723c4
  redirect_uri: https%3A%2F%2Flearn.co%2Fusers%2Fauth%2Fgithub%2Fcallback
  response_type: code
  state: 7947e14af4fd2607a8d47072a91fc5ffeea414aad803eb9f

认证服务器如果没有登陆调整到认证服务器的登陆页

GET /login
  client_id: 9c16d1d9d4235bb723c4
  return_to: %2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D9c16d1d9d4235bb723c4%26redirect_uri%3Dhttps%253A%252F%252Flearn.co%252Fusers%252Fauth%252Fgithub%252Fcallback%26response_type%3Dcode%26state%3D7947e14af4fd2607a8d47072a91fc5ffeea414aad803eb9f

用户在认证服务器登陆

POST /session
  commit: Sign in
  utf8: ✓
  authenticity_token: GoX03z/XHDderiumSP3pMKkK4cP38i5V+hMrRkMDuD0d1jRNB4n81NRedgStfV/s32RsJ54o0Gh39+xkPNx2QA==
  login: zce
  password: 2016@github
  webauthn-support: supported

跳转到授权页面

GET /authorize
  client_id: 9c16d1d9d4235bb723c4
  redirect_uri: https://learn.co/users/auth/github/callback
  response_type: code
  state: 7947e14af4fd2607a8d47072a91fc5ffeea414aad803eb9f

点击授权

POST /authorize
  authorize: 1
  utf8: ✓
  authenticity_token: GedCj5re39pooef5C8P2gLkAsie4wv4DBkouCqbFw7purEdo9+1EgGtI3k0ZSrUx01vd2ozVQe+Ho1nauoGqPA==
  client_id: 9c16d1d9d4235bb723c4
  redirect_uri: https://learn.co/users/auth/github/callback
  state: 7947e14af4fd2607a8d47072a91fc5ffeea414aad803eb9f
  scope:
  authorize: 1

调整到回调页面

GET /callback
  code: 7c91849181a5cc05d777
  state: 7947e14af4fd2607a8d47072a91fc5ffeea414aad803eb9f
