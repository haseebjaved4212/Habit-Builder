import { useState } from 'react';
import { HabitItem } from './HabitItem';

export function HabitList({ habits, addHabit, toggleHabit, deleteHabit, getHabitStats }) {
    const [newHabitName, setNewHabitName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newHabitName.trim()) {
            addHabit(newHabitName);
            setNewHabitName('');
        }
    };

    return (
        <div className="habit-list">
            <form onSubmit={handleSubmit} style={{ marginBottom: 'var(--space-md)', display: 'flex', gap: 'var(--space-xs)' }}>
                <input
                    type="text"
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    placeholder="New habit (e.g., Read for 15 mins)..."
                    style={{ flex: 1 }}
                />
                <button type="submit" className="primary" disabled={!newHabitName.trim()}>
                    Add
                </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {habits.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', opacity: 0.7 }}>
                        <p>No habits yet. Start building one today!</p>
                    </div>
                ) : (
                    habits.map(habit => (
                        <HabitItem
                            key={habit.id}
                            habit={habit}
                            onToggle={toggleHabit}
                            getStats={getHabitStats}
                            onDelete={deleteHabit}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
