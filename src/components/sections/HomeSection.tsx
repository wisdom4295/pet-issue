'use client'

import styled from 'styled-components'
import StatCard from '@/components/cards/StatCard'
import PostCard from '@/components/cards/PostCard'
import { useStore } from '@/hooks/useStore'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const CardHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

export default function HomeSection() {
  const posts = useStore((state) => state.posts)

  return (
    <>
      <Card>
        <CardHeader>📊 대시보드</CardHeader>
        <StatsGrid>
          <StatCard
            value="1,247"
            label="활성 회원"
            gradient="linear-gradient(135deg, #FF6B9D 0%, #4ECDC4 100%)"
          />
          <StatCard
            value="89"
            label="진행중인 공구"
            gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          />
          <StatCard
            value="342"
            label="이번주 산책"
            gradient="linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
          />
          <StatCard
            value="156"
            label="NFT 발행"
            gradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
          />
        </StatsGrid>
      </Card>

      <Card>
        <CardHeader>🔥 인기 게시물</CardHeader>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Card>
    </>
  )
}
