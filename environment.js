import { Constants } from 'expo';
import { Platform } from 'react-native';

const localhost = Platform.OS === 'ios' ?
  'https://localhost:3000' : 'http://10.0.0.64:3000';

const ENV = {
  dev: {
    apiUrl: localhost
  },
  staging: {
    apiUrl: 'http://instadate-api.herokuapp.com/'
  },
  prod: {
    apiUrl: 'http://instadate-api.herokuapp.com/'
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;