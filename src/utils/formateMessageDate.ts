export const formatMessageDate = (createdAt: string): string => {
    const now = new Date();
    const messageDate = new Date(createdAt);

    const timeDiff = now.getTime() - messageDate.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedTime = messageDate.toLocaleTimeString('en-US', options);

    if (seconds < 60) {
        return `${formattedTime} - Just now`;
    }

    if (hours < 24) {
        if (minutes < 60) {
            return `${formattedTime} - ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        }
        return `${formattedTime} - ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const formattedDate = messageDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year:
            now.getFullYear() === messageDate.getFullYear()
                ? undefined
                : 'numeric'
    });

    return `${formattedTime} - ${formattedDate}`;
};
