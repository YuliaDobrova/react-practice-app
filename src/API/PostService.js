import axios from 'axios';

export default class PostService {
  static async getAll(limit = 5, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      { params: { _limit: limit, _page: page } },
      // 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=3',
    );
    return response;
    // return response.data;
  }

  static async getById(id) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id,
    );
    return response;
    // return response.data;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    // console.log('response.data', response.data);
    return response;
  }
}
