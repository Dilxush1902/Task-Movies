import axios from "axios";
const baseUrl = "https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/"
export const getMovies = async () => {
  return await axios.get(baseUrl+"movies")
}
export const getMoviesId = async (id=5) => {
	return await axios.get(`${baseUrl}movies/${id}/comments`)
}