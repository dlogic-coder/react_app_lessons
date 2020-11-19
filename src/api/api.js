import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

export const getMe = () => {
   return axios.get(baseUrl + `auth/me`, {
      withCredentials: true
   })
      .then(response => response.data)
}

export const getUsers = (currentPage = 1, pageSize = 20) => {
   return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true
   })
      .then(response => response.data)
}

export const followUser = (userId) => {
   return axios.post(baseUrl + `follow/${userId}`, {}, {
      withCredentials: true,
      headers: {
          'api-key': '2d9353f2-93a5-40bc-9b6a-63aaff6c606a'
      }
  })
      .then(response => response.data)
}

export const unFollowUser = (userId) => {
   return axios.delete(baseUrl + `follow/${userId}`, {
      withCredentials: true,
      headers: {
          'api-key': '2d9353f2-93a5-40bc-9b6a-63aaff6c606a'
      }
  })
      .then(response => response.data)
}

export const getProfile = (userId) => {
   return axios.get(baseUrl + `profile/${userId}`)
   .then(response => response.data)
}
