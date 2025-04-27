import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-10">
      <img src={profilePic} alt="Profile" className="w-48 h-48 rounded-full border-4 border-emerald m-4" />
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-emerald mb-4">{t('about')}</h2>
        <p className="max-w-lg mx-auto md:mx-0">
          Passionate about analyzing biological data, developing innovative algorithms, and driving scientific discoveries.
        </p>
      </div>
    </section>
  )
}
