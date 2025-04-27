import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="flex justify-between items-center p-4 bg-darkPurple">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <LanguageSwitcher />
    </nav>
  );
}
