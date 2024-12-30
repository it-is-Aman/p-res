import './Projects.css'
import ProjectComponent from './ProjectComponent';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title1: "FaceCare",
      title2: "AI",
      src: "FaceCareAI.png"
    }, {
      id: 2,
      title1: "Tab",
      title2: "Track",
      src: "TabTrack.png"
    }, {
      id: 3,
      title1: "Fit",
      title2: "Track",
      src: "FitTrack.png"
    },
    {
      id: 4,
      title1: "Safe",
      title2: "Zone",
      src: "SafeZone.png"
    },
    {
      id: 5,
      title1: "Expense",
      title2: "Sync",
      src: "ExpenseSync.png"
    },

    {
      id: 6,
      title1: "Crypto",
      title2: "Scope",
      src: "CryptoScope.png"
    }
  ]

  return (
    <main className="main mb-52"
    >
      <div className="gallery font-source-sans-pro">
        <p>Featured Work</p>
        {
          projects.map(project => {
            return <ProjectComponent key={project.id} project={project} />
          })
        }
      </div>
    </main>
  )
}

export default Projects