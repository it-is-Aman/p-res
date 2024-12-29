import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from './ProjectData';
import { ExternalLink, Github } from 'lucide-react';

const ProjectDetails = () => {
    // Scroll to the top of the page when this component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const project = projects.find((p) => p.id == id);

    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-4xl font-bold text-gray-700">Project not found</h2>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl my-14 mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
            {/* Project Image */}
            {project.imageUrl && (
                <div className="w-full h-auto overflow-hidden ">
                    <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6">
                {/* Title and Links */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-serif text-gray-900">{project.title}</h2>
                    <div className="flex gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {/* Live Icon */}
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {/* GitHub Icon */}
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                {/* Details */}
                <div className="space-y-6">
                    {/* Inspiration */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspiration</h3>
                        <p className="text-gray-600">{project.inspiration}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Use Case */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Use Case</h3>
                        <p className="text-gray-600">{project.useCase}</p>
                    </div>

                    {/* Features  */}
                    {project.features && project.features.length > 0 && (
                        <section>
                            <h2 className="text-xl font-medium mb-3">Key Features</h2>
                            <ul className="list-disc pl-5 text-gray-600">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="mb-2">{feature}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
