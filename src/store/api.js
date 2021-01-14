export class API {
  constructor(store) {
    this.store = store;
  }

  async fetch(endpoint) {
    const [method, path] = endpoint.split(' ');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic dHVyYm86dHVyYm8=',
    };
    return window.fetch(path, {method, headers})
      .then(response => response.json());
  }

  getParts() {
    return this.fetch('GET /api/parts');
  }

  getReasons() {
    return this.fetch('GET /api/reasons');
  }
}