import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold text-emerald mb-6">{t('contact')}</h2>
      <div className="space-y-4">
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com" className="text-emerald underline">your-profile</a></p>
        <p>GitHub: <a href="https://github.com" className="text-emerald underline">your-github</a></p>
      </div>
    </section>
  )
}
