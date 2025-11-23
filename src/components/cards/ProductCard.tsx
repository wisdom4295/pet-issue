'use client'

import styled from 'styled-components'
import type { GroupBuy } from '@/types'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
`

const Info = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`

const Title = styled.div`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Price = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ProgressBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, #FF6B9D, #4ECDC4);
  transition: width 0.3s;
`

const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`

interface Props {
  product: GroupBuy
  onJoin: () => void
}

export default function ProductCard({ product, onJoin }: Props) {
  const progress = (product.current / product.target) * 100

  return (
    <Card>
      <Image>{product.emoji}</Image>
      <Info>
        <Title>{product.name}</Title>
        <Price>{product.price.toLocaleString()}원</Price>
        <Meta>
          <span>{product.current}명 참여</span>
          <span>목표: {product.target}명</span>
        </Meta>
        <ProgressBar>
          <ProgressFill $progress={progress} />
        </ProgressBar>
        <Button onClick={onJoin}>참여하기</Button>
      </Info>
    </Card>
  )
}
