export const langTypeData = ['en', 'zh-tw'] as const;
export type LangType = typeof langTypeData[number];
