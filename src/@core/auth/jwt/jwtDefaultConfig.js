// const domain = 'https://sichain.herokuapp.com'
const domain = 'http://45.119.86.80:9000'
// ** Auth Endpoints
export default {
  endPoint: domain,
  loginEndpoint: `${domain}/api/v1/auth/jwt/login`,
  // loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  // logoutEndpoint: '/jwt/logout',
  logoutEndpoint: `${domain}/api/v1/auth/jwt/logout`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
  // ** get user
  getUserEndpoint: `${domain}/api/v1/user/me`
}
