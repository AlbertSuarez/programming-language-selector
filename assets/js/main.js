const getLanguage = () => {
    languageResult = languages[Math.floor(Math.random() * languages.length)];
    console.log(languageResult);
};

getLanguage();