export function generateIntakes(
    months: string[],
    futureYears: number = 3
): string[] {
    const fullMonths: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    // Map of short month names to full month names
    const shortToFullMap: { [key: string]: string } = {
        jan: 'January',
        feb: 'February',
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        aug: 'August',
        sep: 'September',
        oct: 'October',
        nov: 'November',
        dec: 'December'
    };

    const currentMonth: number = new Date().getMonth();
    const currentYear: number = new Date().getFullYear();
    const intakes: string[] = [];

    months.forEach((month) => {
        const fullMonth = shortToFullMap[month.toLowerCase()] || month;
        const monthIndex: number = fullMonths.findIndex(
            (m) => m.toLowerCase() === fullMonth.toLowerCase()
        );
        if (monthIndex === -1) return; // If month name is not found, skip processing

        const monthDiff: number = monthIndex - currentMonth;

        // Calculate the year for the intake
        const intakeYear: number =
            monthDiff < 0 ? currentYear + 1 : currentYear;

        for (let i = 0; i < futureYears; i++) {
            const year = intakeYear + i;
            // Skip current month and current year if month is in the present month
            if (year === currentYear && monthIndex === currentMonth) continue;
            intakes.push(`${fullMonths[monthIndex]} ${year}`);
        }
    });

    // Sort the intakes by year and month
    intakes.sort((a, b) => {
        const [monthA, yearA] = a.split(' ');
        const [monthB, yearB] = b.split(' ');

        // Compare by year first
        const yearDiff = parseInt(yearA) - parseInt(yearB);
        if (yearDiff !== 0) return yearDiff;

        // If years are the same, compare by month index
        const monthIndexA = fullMonths.findIndex(m => m === monthA);
        const monthIndexB = fullMonths.findIndex(m => m === monthB);
        return monthIndexA - monthIndexB;
    });

    return intakes;
}
