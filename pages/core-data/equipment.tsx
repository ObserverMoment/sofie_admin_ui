import { gql, useQuery } from '@apollo/client'
import { Page } from '../../components/layout/page'
import { Title } from '../../components/styled'

export const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      id
      name
    }
  }
`

export default function Moves() {
  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)
  console.log(data)

  return (
    <Page>
      <Title>Equipment: </Title>
      {data && data.equipments.map((e) => <div key={e.id}>{e.name}</div>)}
    </Page>
  )
}
