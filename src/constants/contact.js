/**
 * Business Contact Information Configuration
 * Real verified data for SRI RAJA RAJESHWARI ELECTRICAL, ELECTRONICS & HOME APPLIANCES (Vizag Homely Service)
 */
export const SHOP_CONTACT_INFO = {
  // Primary Telephone & Hotline
  phone: '+91 98855 33214',
  phoneRaw: '+919885533214',

  // Alternate Contact Telephone
  alternatePhone: '+91 98859 92062',
  alternatePhoneRaw: '+919885992062',

  // WhatsApp Messaging Hotline
  whatsappText: 'Chat on WhatsApp',
  whatsappUrl: 'https://wa.me/919885533214?text=Hello%20Sri%20Raja%20Rajeshwari%20Services%2C%20I%20would%20like%20to%20inquire%20about%20a%20repair%20service.',

  // Physical Workshop Location in Visakhapatnam
  locationTitle: 'Murali Nagar, Vizag',
  locationDetails: 'Opposite to Airtel Office, Near by Pastry Chef, Murali Nagar, Visakhapatnam, Andhra Pradesh - 530007',
  landmark: 'Opposite Airtel Office, Near by Pastry Chef',
  city: 'Vizag (Visakhapatnam)',
  pincode: '530007',
  coordinates: {
    lat: 17.7480336,
    lng: 83.2601471,
  },
  // Permanent Google Maps URL (Drops pin directly at workshop coordinates - works 100% on all devices)
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=17.7480336,83.2601471',
  googleMapsPlaceUrl: 'https://www.google.com/maps/place/Muralinagar,+Madhavadhara,+Visakhapatnam,+Andhra+Pradesh+530007/@17.7480336,83.2601471,18z',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=17.7480336,83.2601471',
  googleMapsQuery: 'Murali+Nagar+Visakhapatnam+530007',

  // Business Operating Hours
  hours: {
    days: 'Monday – Saturday',
    timing: '10:00 AM – 9:00 PM',
    sundayNote: 'Sunday: Evening Only (5:00 PM – 9:00 PM)',
  },

  // Future Flask Backend API Target
  apiEndpoint: '/api/repair-requests',
}
