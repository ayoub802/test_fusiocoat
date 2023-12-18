const disctionaries = {
    en: () => import('./Language/en.json').then(r => r.default),
    fr: () => import('./Language/fr.json').then(r => r.default)
}

export const getDictionary = (lang) => {
    return disctionaries[lang]();
}