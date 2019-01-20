export const getFilters = () =>
  fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776').then(response => response.json());
