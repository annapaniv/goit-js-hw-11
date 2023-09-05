import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39161432-6518ec2c77554301fceb83fe1';

export class PixabayServiceApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
    this.totalHits = 0;
  }

  async fetchImages() {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}`, {
      params: {
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: this.page,
        per_page: this.per_page,
      },
    });

    this.totalHits = response.data.totalHits;

    return response.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
