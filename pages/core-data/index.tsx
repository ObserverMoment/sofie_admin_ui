import { Page } from '../../components/layout/page'
import { Title } from '../../components/styled'

export default function Overview() {
  const basePath = '/core-data'
  return (
    <Page
      navItems={[
        { text: 'Overview', link: basePath },
        { text: 'Equipment', link: `${basePath}/equipment` },
        { text: 'Moves', link: `${basePath}/moves` },
        { text: 'Body Areas', link: `${basePath}/body-areas` },
        { text: 'Workout Types', link: `${basePath}/workout-types` },
        { text: 'Workout Goals', link: `${basePath}/workout-goals` },
      ]}
    >
      <Title>Overview dashboard</Title>
      <Title>Summary components</Title>
      <Title>Useage components</Title>
      <Title>Data on popular moves etc</Title>
    </Page>
  )
}
