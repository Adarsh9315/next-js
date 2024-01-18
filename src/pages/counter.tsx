// src/pages/counter.tsx
import { observer } from 'mobx-react-lite'
import React from 'react'
import Button from '_atoms/Button'
import { counterStore } from '../store/counterStore'

const CounterPage = observer(() => {
  return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Counter: {counterStore.count}</h1>
            <div className="flex space-x-4">
                <Button label="Increment" onClick={() => { counterStore.increment() }} />
                <Button label="Decrement" onClick={() => { counterStore.decrement() }} />
            </div>
        </div>
  )
})

export default CounterPage
