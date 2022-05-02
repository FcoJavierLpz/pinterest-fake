import { AxiosResponse } from 'axios'
import http from './http'
import { SORT, WINDOW, PAGE } from '../constants/gallery/pathParameters'

export const getGallery = (
  sort: string = SORT.TOP,
  window: string = WINDOW.WEEK,
  page: number = PAGE.ZERO
): Promise<AxiosResponse> => {
  return http.get(`/api/gallery/${sort}/${window}/${page}`)
}

export const getGalleryByTags = (
  tagName: string,
  sort: string = SORT.TOP,
  window: string = WINDOW.WEEK,
  page: number = PAGE.ZERO
): Promise<AxiosResponse> => {
  return http.get(`/api/gallery/t/${tagName}/${sort}/${window}/${page}`)
}
