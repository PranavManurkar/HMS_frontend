// src/constants/admins.js
export const ADMIN_EMAILS = new Set(
  Array.from({ length: 5 }, (_, i) => `${i + 1}admin@gmail.com`)
);
