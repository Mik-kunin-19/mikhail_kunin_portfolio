import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="space-x-2">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
}
