
export function StatsView({ stats, habitName }) {
    if (!stats.showMonthlyStats) return null;

    const successRate = Math.round((stats.totalCompleted / stats.daysSinceStart) * 100);
    const isHabitBuilt = successRate >= 70;

    return (
        <div className="card fade-in" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-accent)' }}>
            <h2>Monthly Report: {habitName}</h2>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                You've been tracking this habit for <strong>{stats.daysSinceStart} days</strong>.
                You completed it <strong>{stats.totalCompleted} times</strong> ({successRate}% success rate).
                You are currently on a <strong>{stats.currentStreak} day streak</strong>!
            </p>

            <div style={{
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isHabitBuilt ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                borderLeft: `4px solid ${isHabitBuilt ? 'var(--color-accent)' : '#525252'}`
            }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: isHabitBuilt ? 'var(--color-accent)' : 'var(--color-text-primary)' }}>
                    Verdict: {isHabitBuilt ? 'Habit Built! 🎉' : 'Keep Trying'}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    {isHabitBuilt
                        ? "You've successfully integrated this habit into your life. Great job!"
                        : "You haven't reached the 70% consistency mark yet. Don't give up!"}
                </p>
            </div>
        </div>
    );
}
