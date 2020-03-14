export const getCodeLangKey = (code) => {
    return {
        202: '202',
        210: '210',
        211: '211',
        217: '217'
    }[code] || 'unknown';
};
