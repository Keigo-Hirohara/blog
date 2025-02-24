export const formatDateForDisplay = (date: string) => {
  const publishedAt = new Date(date);

  const days = [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ];

  return `${publishedAt.getFullYear()}年 ${
    publishedAt.getMonth() + 1
  }月 ${publishedAt.getDate()}日 ${days[publishedAt.getDay()]}`;
};
