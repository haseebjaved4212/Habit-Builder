
export function StatsView({ stats, habitName }) {
    if (!stats.showMonthlyStats) return null;

    const successRate = Math.round((stats.totalCompleted / stats.daysSinceStart) * 100);

    return (
        <div className="card fade-in" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-accent)' }}>
            <h2>Monthly Report: {habitName}</h2>
            <p style={{ color: 'var(--color-text-primary)' }}>
                You've been tracking this habit for <strong>{stats.daysSinceStart} days</strong>.
                You completed it <strong>{stats.totalCompleted} times</strong> ({successRate}% success rate).
                You are currently on a <strong>{stats.currentStreak} day streak</strong>! Keep it up!
            </p>
        </div>
    );
}
