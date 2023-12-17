import axios from "axios"

const URL_SERVER = 'https://portfolioserver-oscar.up.railway.app'

export const getProjects = async () => {
  try {
    const { data } = await axios(`${URL_SERVER}/projects`)
    return data
  } catch (error) {
    console.error(error);
  }
}

export const getTechnologies = async () => {
  try {
    const { data } = await axios(`${URL_SERVER}/technologies`)
    return data
  } catch (error) {
    console.error(error);
  }
}