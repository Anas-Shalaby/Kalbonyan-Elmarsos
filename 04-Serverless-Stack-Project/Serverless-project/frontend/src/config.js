const config = {
  SENTRY_DSN:
    "https://249007c1526d43c7b68b85fb7537543d@o1376033.ingest.sentry.io/6684938",
  // Backend config
  STRIPE_KEY:
    "pk_test_51LZXIrKczUq84uf38j3iF9jAHjGzJrDQVbUBegy8tOzplQp6wokEfO8ZQtGWTsDiHiAdxdtFiBScapUWMKO0aITl007NNbdBgj",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
