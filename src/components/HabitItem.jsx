import { useState } from 'react';
import { StatsView } from './StatsView';
import { HabitGrid } from './HabitGrid';

export function HabitItem({ habit, onToggle, getStats, onDelete }) {
    const today = new Date().toISOString().split('T')[0];
    const isCompleted = habit.completedDates.includes(today);
    const stats = getStats(habit);

    const handleToggle = () => {
        onToggle(habit.id);
    };

    return (
        <div className="habit-container">
            <div className={`card habit-item ${isCompleted ? 'completed' : ''}`}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: isCompleted ? 'var(--color-accent)' : 'var(--color-border)',
                    boxShadow: isCompleted ? '0 0 15px var(--color-accent-glow)' : 'none',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>

                <div className="habit-info" style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: isCompleted ? 'var(--color-accent)' : 'var(--color-text-primary)'
                    }}>
                        {habit.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', marginTop: '0.3em' }}>
                        Current Streak: <span style={{ color: 'var(--color-text-primary)' }}>{stats.currentStreak} days</span>
                    </p>
                </div>

                <button
                    onClick={handleToggle}
                    className={isCompleted ? 'primary' : ''}
                    style={{
                        minWidth: '100px',
                        transform: isCompleted ? 'scale(1.05)' : 'scale(1)'
                    }}
                >
                    {isCompleted ? 'Completed' : 'Do it'}
                </button>

                <div style={{ width: '100%', marginTop: '0.5rem' }}>
                    <HabitGrid habit={habit} onToggle={onToggle} />
                </div>
            </div>

            {stats.showMonthlyStats && (
                <div style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', marginLeft: '1rem' }}>
                    <StatsView stats={stats} habitName={habit.name} />
                </div>
            )}
        </div>
    );
}
