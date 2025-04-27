import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold text-emerald mb-6">{t('projects')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
          <p>Short description of project 1.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
          <p>Short description of project 2.</p>
        </div>
      </div>
    </section>
  )
}
