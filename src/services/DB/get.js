import axios from "axios"

const URL_SERVER = 'https://portfolioserver-oscar.up.railway.app'

export const getProjects = async () => {
  const { data } = await axios(`${URL_SERVER}/projects`)
  return data
}