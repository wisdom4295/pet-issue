'use client'

import styled from 'styled-components'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import HomeSection from '@/components/sections/HomeSection'
import GroupBuySection from '@/components/sections/GroupBuySection'
import CommunitySection from '@/components/sections/CommunitySection'
import ProfileSection from '@/components/sections/ProfileSection'
import WalkMateSection from '@/components/sections/WalkMateSection'
import MomentSection from '@/components/sections/MomentSection'
import NFTSection from '@/components/sections/NFTSection'
import PhysicalSection from '@/components/sections/PhysicalSection'
import { useStore } from '@/hooks/useStore'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

export default function Home() {
  const activeTab = useStore((state) => state.activeTab)

  return (
    <Container>
      <Header />
      <Navigation />
      <Content>
        {activeTab === 'home' && <HomeSection />}
        {activeTab === 'groupbuy' && <GroupBuySection />}
        {activeTab === 'community' && <CommunitySection />}
        {activeTab === 'profile' && <ProfileSection />}
        {activeTab === 'walk' && <WalkMateSection />}
        {activeTab === 'moment' && <MomentSection />}
        {activeTab === 'nft' && <NFTSection />}
        {activeTab === 'physical' && <PhysicalSection />}
      </Content>
    </Container>
  )
}
