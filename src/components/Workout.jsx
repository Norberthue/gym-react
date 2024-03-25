import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCart from './ExerciseCart'

export default function Workout(props) {
  const { workout } = props
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
            return (
              <ExerciseCart i={i} exercise={exercise} key={i}>
                
              </ExerciseCart>
            )
          })}
      </div>
    </SectionWrapper>
  )
}
