import { useState } from 'react'
import { useHabits } from './hooks/useHabits'
import { HabitList } from './components/HabitList'

function App() {
  const { habits, addHabit, toggleHabit, deleteHabit, getHabitStats } = useHabits();

  return (
    <div className="app-container fade-in">
      <h1>Habit Builder</h1>

      <HabitList
        habits={habits}
        addHabit={addHabit}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        getHabitStats={getHabitStats}
      />
    </div>
  )
}

export default App
