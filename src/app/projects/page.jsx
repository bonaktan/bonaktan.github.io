import Link from "next/link";

export const metadata = {
    title: "bonaktan - Projects",
    description: "Projects made by bonaktan",
  };
const projects = [
    {
        name: "CorrectResponse",
        description:
            "An online tool to help Correct Responsing every Periodical Exams",
        link: "CorrectResponse",
    },
    {
        name: "FacebookJSONInterpreter",
        description: "For Facebook Downloaded Data",
        link: "FacebookJSONInterpreter",
    },
    {
        name: "Engrish",
        description:
            "Fix your Engrish through Engrish so that it turns to English",
        link: "Engrish",
    },
    {
        name: "Every Vote Counts - Advocacy",
        description: "For Subject Compliance",
        link: "EveryVoteCounts-SchoolAdvocacy",
    },
];

export default function ProjectList() {
    return (
        <div>
            {projects.map((project, index) => {
                return (
                    <div key={index} className="my-2">
                        <p>
                            <Link href={`/projects/${project.link}`}>
                                {project.name}
                            </Link>
                        </p>
                        <p>{project.description}</p>
                    </div>
                );
            })}
        </div>
    );
}
