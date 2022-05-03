import { AxiosResponse } from 'axios'
import http from './http'
import { SORT, WINDOW, PAGE } from '../constants/gallery/pathParameters'

export const getGallery = (
  page: number = PAGE.ZERO,
  sort: string = SORT.TOP,
  window: string = WINDOW.WEEK
): Promise<AxiosResponse> => {
  return http.get(`/api/gallery/${sort}/${window}/${page}`)
}

export const getGalleryByTags = (
  tagName: string,
  page: number = PAGE.ZERO,
  sort: string = SORT.TOP,
  window: string = WINDOW.WEEK
): Promise<AxiosResponse> => {
  return http.get(`/api/gallery/t/${tagName}/${sort}/${window}/${page}`)
}
