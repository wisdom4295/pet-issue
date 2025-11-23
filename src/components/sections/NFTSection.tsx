'use client'

import styled from 'styled-components'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export default function NFTSection() {
  return (
    <Card>
      <Title>🎨 NFT 갤러리</Title>
      <p>NFT 갤러리 기능이 곧 추가될 예정입니다.</p>
    </Card>
  )
}
