
export function HabitGrid({ habit, onToggle }) {
    const today = new Date();
    // Generate last 30 days
    const dates = Array.from({ length: 30 }, (_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() - (29 - i)); // Order from past to today (index 0 is 29 days ago, index 29 is today)
        return {
            dateObj: d,
            dateString: d.toISOString().split('T')[0],
            dayNumber: i + 1 // 1 to 30
        };
    });

    return (
        <div className="habit-grid">
            {dates.map(({ dateString, dateObj, dayNumber }) => {
                const isCompleted = habit.completedDates.includes(dateString);
                return (
                    <div
                        key={dateString}
                        className={`grid-box ${isCompleted ? 'completed' : ''}`}
                        onClick={() => onToggle(habit.id, dateString)}
                        title={dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    >
                        {isCompleted ? '✓' : dayNumber}
                    </div>
                );
            })}
        </div>
    );
}
