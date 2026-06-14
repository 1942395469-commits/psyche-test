import { Suspense } from 'react'
import ResultClient from './ResultClient'

export default function Page() {
  return (
    <Suspense fallback={<div style={{ color: 'white' }}>loading...</div>}>
      <ResultClient />
    </Suspense>
  )
}