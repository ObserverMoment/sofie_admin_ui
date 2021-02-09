import { Page } from '../../components/layout/page'
import { Title } from '../../components/styled'

export default function Overview() {
  const basePath = '/official-content'
  return (
    <Page
      navItems={[
        { text: 'Overview', link: basePath },
        { text: 'Workouts', link: `${basePath}/workouts` },
        { text: 'Plans', link: `${basePath}/plans` },
        { text: 'Events', link: `${basePath}/events` },
        { text: 'Clubs', link: `${basePath}/clubs` },
      ]}
    >
      <Title>Overview dashboard</Title>
      <Title>Summary components</Title>
      <Title>Useage components</Title>
      <Title>Data on popular moves etc</Title>
    </Page>
  )
}
