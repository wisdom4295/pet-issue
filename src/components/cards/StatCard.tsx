'use client'

import styled from 'styled-components'

const Card = styled.div<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
`

const Value = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Label = styled.div`
  font-size: 14px;
  opacity: 0.9;
`

interface Props {
  value: string
  label: string
  gradient: string
}

export default function StatCard({ value, label, gradient }: Props) {
  return (
    <Card $gradient={gradient}>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Card>
  )
}
