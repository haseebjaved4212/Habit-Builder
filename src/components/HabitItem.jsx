import { HabitGrid } from './HabitGrid';
import { StatsView } from './StatsView';

export function HabitItem({ habit, onToggle, getStats, onDelete }) {
    const stats = getStats(habit);
    const successRate = stats.daysSinceStart > 0
        ? Math.round((stats.totalCompleted / stats.daysSinceStart) * 100)
        : 0;

    // Calculate completed count for the 30-day window
    const completedCount = habit.completedDates.length; // Simplified for now, ideally filtered by window

    return (
        <div className="card fade-in" style={{ padding: '1.5rem', borderRadius: '24px', border: 'none' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
                        {habit.name}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                        To Stay Healthy
                    </p>
                </div>
                <button
                    onClick={() => onDelete(habit.id)}
                    style={{
                        background: 'transparent',
                        padding: '8px',
                        color: '#525252'
                    }}
                    title="Delete Habit"
                >
                    🗑️
                </button>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                {/* Streak Badge */}
                <div className="stats-badge" style={{ backgroundColor: 'var(--color-streak-bg)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '1.2rem' }}>🔥</span>
                        <span className="stats-label" style={{ color: 'var(--color-streak-text)' }}>STREAK</span>
                    </div>
                    <span className="stats-value" style={{ color: 'var(--color-streak-text)' }}>
                        {stats.currentStreak} Days
                    </span>
                </div>

                {/* Score Badge */}
                <div className="stats-badge" style={{ backgroundColor: 'var(--color-score-bg)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '1.2rem' }}>🏅</span>
                        <span className="stats-label" style={{ color: 'var(--color-score-text)' }}>SCORE</span>
                    </div>
                    <span className="stats-value" style={{ color: 'var(--color-score-text)' }}>
                        {successRate}%
                    </span>
                </div>
            </div>

            {/* Grid Section */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--color-text-secondary)',
                        textTransform: 'uppercase'
                    }}>
                        30 Day Progress
                    </span>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        backgroundColor: '#262626',
                        padding: '2px 8px',
                        borderRadius: '10px'
                    }}>
                        {completedCount}/30
                    </span>
                </div>

                <HabitGrid habit={habit} onToggle={onToggle} />
            </div>

            {/* Footer */}
            <div style={{ marginTop: '1.5rem' }}>
                {stats.showMonthlyStats ? (
                    <StatsView stats={stats} habitName={habit.name} />
                ) : (
                    <div style={{
                        border: '1px dashed #404040',
                        borderRadius: '16px',
                        padding: '12px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem'
                    }}>
                        <span>🕒</span> Full stats unlock after day 30
                    </div>
                )}
            </div>

        </div>
    );
}
