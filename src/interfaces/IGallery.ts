export interface IGallery {
  data: SubReddit[]
  success: boolean
  status: number
}

export interface SubReddit {
  id: string
  title: string
  description: null | string
  datetime: number
  type?: Type
  animated?: boolean
  width?: number
  height?: number
  size?: number
  views: number
  bandwidth?: number
  vote: null
  favorite: boolean
  nsfw: boolean
  section: Section
  account_url: string
  account_id: number
  is_ad: boolean
  in_most_viral: boolean
  has_sound?: boolean
  tags: Tag[]
  ad_type: number
  ad_url: string
  edited?: number
  in_gallery: boolean
  topic: null
  topic_id: number | null
  link: string
  mp4_size?: number
  mp4?: string
  gifv?: string
  hls?: string
  processing?: Processing
  ad_config: AdConfig
  comment_count: number
  favorite_count: number
  ups: number
  downs: number
  points: number
  score: number
  is_album: boolean
  looping?: boolean
  cover?: string
  cover_width?: number
  cover_height?: number
  privacy?: Privacy
  layout?: Layout
  images_count?: number
  include_album_ads?: boolean
  images: Image[]
}

export interface AdConfig {
  safeFlags: SafeFlag[]
  highRiskFlags: unknown[]
  unsafeFlags: UnsafeFlag[]
  wallUnsafeFlags: string[]
  showsAds: boolean
  showAdLevel: number
}

export enum SafeFlag {
  Album = 'album',
  Gallery = 'gallery',
  InGallery = 'in_gallery',
  PageLoad = 'page_load',
  SixthModSafe = 'sixth_mod_safe'
}

export enum UnsafeFlag {
  OnsfwModUnsafe = 'onsfw_mod_unsafe',
  SixthModUnsafe = 'sixth_mod_unsafe'
}

export interface Image {
  id: string
  title: null
  description?: string
  datetime: number
  type: Type
  animated: boolean
  width: number
  height: number
  size: number
  views: number
  bandwidth: number
  vote: null
  favorite: boolean
  nsfw: null
  section: null
  account_url: null
  account_id: null
  is_ad: boolean
  in_most_viral: boolean
  has_sound: boolean
  tags: unknown[]
  ad_type: number
  ad_url: string
  edited: string
  in_gallery: boolean
  link: string
  comment_count: null
  favorite_count: null
  ups: null
  downs: null
  points: null
  score: null
  mp4_size?: number
  mp4?: string
  gifv?: string
  hls?: string
  processing?: Processing
  looping?: boolean
}

export interface Processing {
  status: Status
}

export enum Status {
  Completed = 'completed'
}

export enum Type {
  ImageGIF = 'image/gif',
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
  VideoMp4 = 'video/mp4'
}

export enum Layout {
  Blog = 'blog'
}

export enum Privacy {
  Hidden = 'hidden'
}

export enum Section {
  Empty = '',
  UAlsoAshley = 'u_AlsoAshley',
  Woahdude = 'woahdude'
}

export interface Tag {
  name: string
  display_name: string
  followers: number
  total_items: number
  following: boolean
  is_whitelisted: boolean
  background_hash: string
  thumbnail_hash: null | string
  accent: null | string
  background_is_animated: boolean
  thumbnail_is_animated: boolean
  is_promoted: boolean
  description: string
  logo_hash: null
  logo_destination_url: null
  description_annotations: object
}
