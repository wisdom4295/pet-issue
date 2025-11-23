'use client'

import styled from 'styled-components'
import type { Post } from '@/types'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Author = styled.div`
  flex: 1;
`

const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
`

const Time = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 107, 157, 0.1);
  color: ${({ theme }) => theme.colors.primary};
`

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <Card>
      <Header>
        <Avatar>👤</Avatar>
        <Author>
          <Name>{post.author}</Name>
          <Time>{post.time}</Time>
        </Author>
        <Badge>{post.category}</Badge>
      </Header>
      <Content>{post.content}</Content>
      <Actions>
        <ActionButton>❤️ {post.likes}</ActionButton>
        <ActionButton>💬 {post.comments}</ActionButton>
        <ActionButton>🔗 공유</ActionButton>
      </Actions>
    </Card>
  )
}
