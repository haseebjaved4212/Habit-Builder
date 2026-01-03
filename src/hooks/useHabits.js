import { useState, useEffect } from 'react';

export function useHabits() {
    const [habits, setHabits] = useState(() => {
        try {
            const saved = localStorage.getItem('habits');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load habits", e);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    const addHabit = (name) => {
        if (!name.trim()) return;
        const newHabit = {
            id: crypto.randomUUID(),
            name: name.trim(),
            createdAt: new Date().toISOString(),
            completedDates: [] // Array of "YYYY-MM-DD" strings
        };
        setHabits(prev => [...prev, newHabit]);
    };

    const toggleHabit = (id, date = null) => {
        const targetDate = date || new Date().toISOString().split('T')[0];

        setHabits(prev => prev.map(habit => {
            if (habit.id !== id) return habit;

            const isCompleted = habit.completedDates.includes(targetDate);
            const newCompletedDates = isCompleted
                ? habit.completedDates.filter(d => d !== targetDate)
                : [...habit.completedDates, targetDate];

            return { ...habit, completedDates: newCompletedDates };
        }));
    };

    const deleteHabit = (id) => {
        setHabits(prev => prev.filter(h => h.id !== id));
    };

    const getHabitStats = (habit) => {
        const today = new Date();
        const created = new Date(habit.createdAt);
        const diffTime = Math.abs(today - created);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Calculate streak (consecutive days ending today or yesterday)
        let currentStreak = 0;
        const dates = new Set(habit.completedDates);
        // Check today
        let checkDate = new Date();
        let checkString = checkDate.toISOString().split('T')[0];

        // If not done today, check if done yesterday to start streak count
        if (!dates.has(checkString)) {
            checkDate.setDate(checkDate.getDate() - 1);
            checkString = checkDate.toISOString().split('T')[0];
            if (!dates.has(checkString)) {
                currentStreak = 0;
            } else {
                currentStreak = 1;
            }
        } else {
            // Done today, count backwards
            while (dates.has(checkString)) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
                checkString = checkDate.toISOString().split('T')[0];
            }
        }

        return {
            daysSinceStart: diffDays,
            totalCompleted: habit.completedDates.length,
            currentStreak,
            showMonthlyStats: diffDays >= 30
        };
    };

    return { habits, addHabit, toggleHabit, deleteHabit, getHabitStats };
}
