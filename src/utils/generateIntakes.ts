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

        // Calculate the month for the intake
        // const intakeMonth: number = monthDiff < 0 ? 12 + monthDiff : monthIndex;

        for (let i = 0; i < futureYears; i++) {
            intakes.push(`${fullMonths[monthIndex]} ${intakeYear + i}`);
        }
    });

    intakes.sort((a, b) => {
        const yearA: number = parseInt(a.split(' ')[1]);
        const yearB: number = parseInt(b.split(' ')[1]);
        return yearA - yearB;
    });

    return intakes;
}
