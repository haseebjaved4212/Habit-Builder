
export function HabitGrid({ habit, onToggle }) {
    const today = new Date();
    // Generate last 30 days
    const dates = Array.from({ length: 30 }, (_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() - (29 - i)); // Order from past to today
        return {
            dateObj: d,
            dateString: d.toISOString().split('T')[0]
        };
    });

    return (
        <div className="habit-grid">
            {dates.map(({ dateString, dateObj }) => {
                const isCompleted = habit.completedDates.includes(dateString);
                return (
                    <div
                        key={dateString}
                        className={`grid-box ${isCompleted ? 'completed' : ''}`}
                        onClick={() => onToggle(habit.id, dateString)}
                        title={dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    />
                );
            })}
        </div>
    );
}
