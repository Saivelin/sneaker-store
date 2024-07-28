
export interface UserTag {
    id: number
    title: string
    value: string
}

export type usersItem = {
    id: number
    title: string
    description: string
    views: number
    creation_date: string
    photos: string[]
    videos: string
    tags_id: UserTag[]
    preview: string
    intro: string
    subtitle: string
    keywords?: string[]
    type: 'usefulMaterials' | 'article'
    enableToView?: boolean
}

export interface AddUserDto {
    title: string
    description: string
    photos: string[]
    videos: string
    tags_id: number[]
    preview: string
    intro: number
    type?: string
    subtitle: string
    keywords?: any
    enableToView?: boolean
}

export interface UpdateUserDto {
    id: number
    title: string
    description: string
    photos: string[]
    videos: string[]
    tags_id: number[]
    preview: string
    intro: number
    type?: string
    subtitle: string
    keywords?: any
    enableToView?: boolean
}
