// 현재 시간 포맷 (상단바)
export const currentTime = () => {
    return new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

// 타임스탬프 포맷
export const formatTime = (date: any): string => {
    // Date 객체가 아닌 경우
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid date';
    }

    const now = new Date();
    const diffInTime = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${ampm} ${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}`;

    if (diffInDays === 0) {
        return timeString;
    } else if (diffInDays === 1) {
        return `(어제) ${timeString}`;
    } else if (diffInDays === 2) {
        return `(그저께) ${timeString}`;
    } else if (diffInDays <= 3) {
        return `(${diffInDays}일 전) ${timeString}`;
    } else {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `(${month}/${day}) ${timeString}`;
    }
};

// 채팅 리스트용 타임스탬프
export const formatTimeForChatList = (date: any): string => {
    // Date 객체가 아닌 경우
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid date';
    }

    const now = new Date();
    const diffInTime = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${ampm} ${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}`;

    if (diffInDays === 0) {
        return timeString;
    } else if (diffInDays === 1) {
        return `어제`;
    } else if (diffInDays === 2) {
        return `그저께`;
    } else if (diffInDays <= 3) {
        return `${diffInDays}일 전)`;
    } else {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`;
    }
};
