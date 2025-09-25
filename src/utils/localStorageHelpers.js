const STORAGE_KEYS = {
  CLIENT_ID: 'setu_client_id',
  CLIENT_SECRET: 'setu_client_secret',
  PRODUCT_INSTANCE_ID: 'setu_product_instance_id',
};

export const saveCredentials = (credentials) => {
  Object.entries(credentials).forEach(([key, value]) => {
    if (value) {
      localStorage.setItem(STORAGE_KEYS[key.toUpperCase()], value);
    }
  });
};

export const getCredentials = () => {
  return {
    clientId: localStorage.getItem(STORAGE_KEYS.CLIENT_ID) || '',
    clientSecret: localStorage.getItem(STORAGE_KEYS.CLIENT_SECRET) || '',
    productInstanceId: localStorage.getItem(STORAGE_KEYS.PRODUCT_INSTANCE_ID) || '',
  };
};

export const clearCredentials = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

export const hasCredentials = () => {
  const creds = getCredentials();
  return creds.clientId && creds.clientSecret && creds.productInstanceId;
};