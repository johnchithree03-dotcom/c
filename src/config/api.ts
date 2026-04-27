/**
 * API Configuration
 * Central location for all API endpoints
 */

// Base URL for the backend API
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// API Endpoints
export const API_ENDPOINTS = {
  // Ride endpoints
  RIDE_ESTIMATE: `${API_BASE_URL}/ride/estimate`,
  RIDE_REQUEST: `${API_BASE_URL}/ride/request`,
  RIDE_CANCEL: `${API_BASE_URL}/ride/cancel`,
  
  // Delivery endpoints
  DELIVERY_ESTIMATE: `${API_BASE_URL}/delivery/estimate`,
  DELIVERY_REQUEST: `${API_BASE_URL}/delivery/request`,
  
  // Intercity endpoints
  INTERCITY_ESTIMATE: `${API_BASE_URL}/intercity/estimate`,
  INTERCITY_REQUEST: `${API_BASE_URL}/intercity/request`,
  
  // Aletwende (shared ride) endpoints
  ALETWENDE_ESTIMATE: `${API_BASE_URL}/aletwende/estimate`,
  ALETWENDE_REQUEST: `${API_BASE_URL}/aletwende/request`,
  
  // User endpoints
  USER_PROFILE: `${API_BASE_URL}/user/profile`,
  USER_PAYMENT_METHODS: `${API_BASE_URL}/user/payment-methods`,
  
  // Location endpoints
  GEOCODE: `${API_BASE_URL}/location/geocode`,
  REVERSE_GEOCODE: `${API_BASE_URL}/location/reverse-geocode`,
  PLACES_AUTOCOMPLETE: `${API_BASE_URL}/location/autocomplete`,
};

// Service type to endpoint mapping
export const SERVICE_ENDPOINTS = {
  ride: {
    estimate: API_ENDPOINTS.RIDE_ESTIMATE,
    request: API_ENDPOINTS.RIDE_REQUEST,
  },
  delivery: {
    estimate: API_ENDPOINTS.DELIVERY_ESTIMATE,
    request: API_ENDPOINTS.DELIVERY_REQUEST,
  },
  intercity: {
    estimate: API_ENDPOINTS.INTERCITY_ESTIMATE,
    request: API_ENDPOINTS.INTERCITY_REQUEST,
  },
  aletwende: {
    estimate: API_ENDPOINTS.ALETWENDE_ESTIMATE,
    request: API_ENDPOINTS.ALETWENDE_REQUEST,
  },
} as const;

export type ServiceType = keyof typeof SERVICE_ENDPOINTS;
