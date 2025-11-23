'use client'

import styled from 'styled-components'
import ProductCard from '@/components/cards/ProductCard'
import { useStore } from '@/hooks/useStore'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const CardHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

export default function GroupBuySection() {
  const { groupbuys, joinGroupbuy } = useStore()

  return (
    <Card>
      <CardHeader>🛒 진행중인 공동구매</CardHeader>
      <Grid>
        {groupbuys.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onJoin={() => joinGroupbuy(item.id)}
          />
        ))}
      </Grid>
    </Card>
  )
}
