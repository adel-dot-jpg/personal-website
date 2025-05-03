import Link from 'next/link';

type Project = {
  title: string;
  key: string;
  description: string;
  technologies: string;
  status: string;
  lastUpdate: string;
  href: string;
  bg: string;
  projLink: string;
  repoLink: string;
};

export default function ProjectSummaryCard(project: Project) {

  // any links to home (no link available at the time) should not open in a new tab since it leads to the same site you're already on
  var isHome = project.projLink == '/';
  const projtarg = isHome ? undefined : '_blank';
  isHome = project.repoLink == '/';
  const repotarg = isHome ? undefined : '_blank';

  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 xl:px-[10vw] my-6">
      <div
        className="w-full rounded-2xl border border-[var(--radial)] border-l-30 overflow-hidden shadow-2xl shadow-black/50">
        <div
          className="relative bg-contain bg-center"
          style={{
            backgroundImage: `url(${project.bg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col md:flex-row justify-between gap-4 p-6 bg-black/60 backdrop-blur-sm">

            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm sm:text-base text-[var(--secondary)] brightness-200 mb-3 pt-3">{project.description}</p>
              <p className="text-sm font-bold font-[Consolas] text-yellow-400 text-gold">{project.technologies}</p>
            </div>

            <div className="flex-shrink-0 text-sm text-right space-y-2 min-w-[150px]">
              <div>
                <span className="font-semibold text-white/80">Status:</span> {project.status}
              </div>
              <div>
                <span className="font-semibold text-white/80">Last updated:</span> {project.lastUpdate}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={project.projLink}
                  className={`px-4 py-2 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded transition ${ project.status=="Completed" ? "group" : "dead-button" }`}
                  target={projtarg}
                >
                  <p className='pr-4'>View Project <span className="ml-1 group-hover:ml-2 transition-all duration-300 inline-block absolute">→</span></p>
                </a>
                <a
                  href={project.repoLink}
                  className="px-4 py-2 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded transition group"
                  target={repotarg}
                >
                  <p className='pr-4'>GitHub Repo <span className='ml-1 group-hover:ml-2 transition-all duration-300 inline-block absolute'>→</span></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
