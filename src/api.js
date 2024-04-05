import axios from 'axios';

export async function fetchStackOverflowTags(pageNumber, pageSize) {
  try {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow`
    );

    if (response.status === 200) {
      return response.data.items;
    } else {
      throw new Error('Failed to fetch tags from Stack Exchange API');
    }
  } catch (error) {
    console.error('Error fetching tags:', error.message);
    throw error;
  }
}
