'use client'

import { create } from 'zustand'
import type { Post, GroupBuy, Pet, WalkMate, Moment, NFT, PhysicalItem } from '@/types'

interface Store {
  activeTab: string
  setActiveTab: (tab: string) => void

  posts: Post[]
  addPost: (post: Omit<Post, 'id'>) => void

  groupbuys: GroupBuy[]
  addGroupbuy: (groupbuy: Omit<GroupBuy, 'id'>) => void
  joinGroupbuy: (id: number) => void

  pets: Pet[]
  addPet: (pet: Omit<Pet, 'id'>) => void

  walkMates: WalkMate[]
  moments: Moment[]
  addMoment: (moment: Omit<Moment, 'id'>) => void

  nfts: NFT[]
  physicalItems: PhysicalItem[]
  addPhysicalItem: (item: Omit<PhysicalItem, 'id'>) => void
}

export const useStore = create<Store>((set) => ({
  activeTab: 'home',
  setActiveTab: (tab) => set({ activeTab: tab }),

  posts: [
    {
      id: 1,
      author: '댕댕이맘',
      content: '우리 강아지가 자꾸 기침을 하는데 괜찮을까요? 병원 가봐야 할까요?',
      time: '10분 전',
      likes: 15,
      comments: 8,
      category: '건강/질병'
    },
    {
      id: 2,
      author: '냥이아빠',
      content: '고양이 사료 추천해주세요! 입맛이 까다로운 편이에요.',
      time: '1시간 전',
      likes: 23,
      comments: 12,
      category: '사료/간식'
    },
  ],
  addPost: (post) => set((state) => ({
    posts: [{ ...post, id: state.posts.length + 1 }, ...state.posts]
  })),

  groupbuys: [
    {
      id: 1,
      name: '프리미엄 강아지 사료 10kg',
      price: 45000,
      current: 18,
      target: 30,
      emoji: '🍖'
    },
    {
      id: 2,
      name: '고양이 자동 급식기',
      price: 89000,
      current: 25,
      target: 50,
      emoji: '🍱'
    },
  ],
  addGroupbuy: (groupbuy) => set((state) => ({
    groupbuys: [{ ...groupbuy, id: state.groupbuys.length + 1 }, ...state.groupbuys]
  })),
  joinGroupbuy: (id) => set((state) => ({
    groupbuys: state.groupbuys.map(g =>
      g.id === id && g.current < g.target ? { ...g, current: g.current + 1 } : g
    )
  })),

  pets: [
    {
      id: 1,
      name: '뽀삐',
      type: '강아지',
      breed: '포메라니안',
      age: '3살',
      gender: '여아',
      emoji: '🐕'
    }
  ],
  addPet: (pet) => set((state) => ({
    pets: [...state.pets, { ...pet, id: state.pets.length + 1 }]
  })),

  walkMates: [
    {
      id: 1,
      name: '김철수',
      petName: '초코',
      location: '강남구',
      time: '오후 7시',
      emoji: '🐕'
    },
  ],

  moments: [
    {
      id: 1,
      date: '2024-11-20',
      title: '처음으로 산책 성공!',
      content: '오늘 뽀삐가 처음으로 줄 안 당기고 산책했어요 😊'
    },
  ],
  addMoment: (moment) => set((state) => ({
    moments: [{ ...moment, id: state.moments.length + 1 }, ...state.moments]
  })),

  nfts: [
    {
      id: 1,
      title: '첫 산책 NFT',
      owner: '댕댕이맘',
      edition: '1/100',
      emoji: '🎨'
    },
  ],

  physicalItems: [
    {
      id: 1,
      type: '유치',
      petName: '뽀삐',
      date: '2024-10-15',
      memo: '첫 번째 빠진 이빨',
      verified: true
    },
  ],
  addPhysicalItem: (item) => set((state) => ({
    physicalItems: [...state.physicalItems, { ...item, id: state.physicalItems.length + 1 }]
  })),
}))
