export interface Post {
  id: number
  author: string
  content: string
  time: string
  likes: number
  comments: number
  category: string
}

export interface GroupBuy {
  id: number
  name: string
  price: number
  current: number
  target: number
  emoji: string
}

export interface Pet {
  id: number
  name: string
  type: string
  breed: string
  age: string
  gender: string
  emoji: string
}

export interface WalkMate {
  id: number
  name: string
  petName: string
  location: string
  time: string
  emoji: string
}

export interface Moment {
  id: number
  date: string
  title: string
  content: string
}

export interface NFT {
  id: number
  title: string
  owner: string
  edition: string
  emoji: string
}

export interface PhysicalItem {
  id: number
  type: string
  petName: string
  date: string
  memo: string
  verified: boolean
}
