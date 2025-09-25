import { getCredentials } from '../utils/localStorageHelpers';

const BASE_URL = 'https://dg-sandbox.setu.co';

const getHeaders = () => {
  const { clientId, clientSecret, productInstanceId } = getCredentials();
  return {
    'x-client-id': clientId,
    'x-client-secret': clientSecret,
    'x-product-instance-id': productInstanceId,
    'Content-Type': 'application/json',
  };
};

export const uploadDocument = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const { clientId, clientSecret, productInstanceId } = getCredentials();
  
  const response = await fetch(`${BASE_URL}/api/documents`, {
    method: 'POST',
    headers: {
      'x-client-id': clientId,
      'x-client-secret': clientSecret,
      'x-product-instance-id': productInstanceId,
    },
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }
  
  return response.json();
};

export const initiateSignature = async (documentId) => {
  const response = await fetch(`${BASE_URL}/api/signatures`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      documentId,
      signers: [{ email: 'signer@example.com', name: 'Test Signer' }],
    }),
  });
  
  if (!response.ok) {
    throw new Error(`Signature initiation failed: ${response.statusText}`);
  }
  
  return response.json();
};

export const getSignatureStatus = async (signatureId) => {
  const response = await fetch(`${BASE_URL}/api/signatures/${signatureId}`, {
    method: 'GET',
    headers: getHeaders(),
  });
  
  if (!response.ok) {
    throw new Error(`Status check failed: ${response.statusText}`);
  }
  
  return response.json();
};

export const downloadSignedDocument = async (documentId) => {
  const response = await fetch(`${BASE_URL}/api/documents/${documentId}/download`, {
    method: 'GET',
    headers: getHeaders(),
  });
  
  if (!response.ok) {
    throw new Error(`Download failed: ${response.statusText}`);
  }
  
  return response.blob();
};