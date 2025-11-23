'use client'

import styled from 'styled-components'
import { useStore } from '@/hooks/useStore'

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`

const Tab = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textLight};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background: ${({ $active, theme }) =>
  $active ? theme.colors.primary : 'rgba(255, 107, 157, 0.1)'};
  }
`

const tabs = [
  { id: 'home', label: '🏠 홈' },
  { id: 'groupbuy', label: '🛒 공동구매' },
  { id: 'community', label: '💬 커뮤니티' },
  { id: 'profile', label: '🐶 내 반려동물' },
  { id: 'walk', label: '🚶 산책메이트' },
  { id: 'moment', label: '📅 모먼트' },
  { id: 'nft', label: '🎨 NFT 갤러리' },
  { id: 'physical', label: '🏆 실물연동' },
]

export default function Navigation() {
  const { activeTab, setActiveTab } = useStore()

  return (
    <Nav>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          $active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </Nav>
  )
}
