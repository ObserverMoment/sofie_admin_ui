// import React, { useState } from 'react'
// import { LoadingDots } from '../../components/loadingIndicators'
// import { showToast } from '../../components/notifications'
// import { SummaryCard } from '../../components/styled-components/cards'
// import {
//   FlexBox,
//   MainText,
//   Title,
// } from '../../components/styled-components/styled'
// import {
//   PublicContentValidationStatus,
//   WorkoutPlanWithMetaDataAdmin,
// } from '../../graphql/generated_types'

// export default function WorkoutPlans() {
//   const [{ isOpen, title }, setModalState] = useState({
//     isOpen: false,
//     title: 'Workout Plan',
//   })

//   const { loading, error, data } = useAdminPublicWorkoutPlansQuery({
//     variables: {
//       status: PublicContentValidationStatus.Pending,
//     },
//   })

//   const [activeWorkoutPlanData, setActiveWorkoutPlanData] = useState(null)

//   function handleCardClick(data: WorkoutPlanWithMetaDataAdmin) {
//     setActiveWorkoutPlanData(data)
//     setModalState({ isOpen: true, title: 'Workout Plan' })
//   }

//   if (error) {
//     showToast(`Error retrieving data`, 'Error', 5000)
//     console.error(error)
//     return null
//   } else if (loading) {
//     return <LoadingDots />
//   } else {
//     return (
//       <FlexBox direction="row" justify="center" wrap="wrap">
//         {data.adminPublicWorkoutPlans.map((wp) => (
//           <WorkoutPlanSummaryCard
//             workoutPlan={wp as WorkoutPlanWithMetaDataAdmin}
//             handleCardClick={handleCardClick}
//           />
//         ))}
//       </FlexBox>
//     )
//   }
// }

// interface WorkoutPlanSummaryCardProps {
//   workoutPlan: WorkoutPlanWithMetaDataAdmin
//   handleCardClick: (workoutPlan: WorkoutPlanWithMetaDataAdmin) => void
// }

// export const WorkoutPlanSummaryCard = ({
//   workoutPlan,
//   handleCardClick,
// }: WorkoutPlanSummaryCardProps) => (
//   <SummaryCard
//     maxWidth="300px"
//     margin="10px"
//     onClick={() => handleCardClick(workoutPlan)}
//   >
//     <FlexBox>
//       <Title>{workoutPlan.name}</Title>
//       <MainText>{workoutPlan.description}</MainText>
//       {workoutPlan.coverImageUri && (
//         <FlexBox align="center">
//           <img
//             style={{ borderRadius: '20px' }}
//             height="100px"
//             src={`https://ucarecdn.com/${workoutPlan.coverImageUri}/`}
//           />
//         </FlexBox>
//       )}
//     </FlexBox>
//   </SummaryCard>
// )
