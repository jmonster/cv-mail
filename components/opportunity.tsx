import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Details, Skill, Project } from "../types/resume"

type Sections = {
  title: string
  collection: Details[]
}

function opportunityTitleFor(label: string, location: string, role?: string) {
  if (location && location.length > 0 && role && role.length > 0) {
    return (
      <h4>
        <span className="font-bold">{label}</span>,{" "}
        <span className="italic">{role}</span>{" "}
        <span className="text-xs">({location})</span>
      </h4>
    )
  } else if (location && location.length > 0) {
    return (
      <h4>
        <span className="font-bold">{label}</span>{" "}
        <span className="text-xs">({location})</span>
      </h4>
    )
  } else if (role && role.length > 0) {
    return (
      <h4>
        <span className="font-bold">{label}</span>,{" "}
        <span className="italic">{role}</span>{" "}
      </h4>
    )
  } else {
    return (
      <h4>
        <span className="font-bold">{label}</span>
      </h4>
    )
  }
}

function Opportunity({ title, collection }: Sections) {
  return (
    <div className="opportunity md:my-4">
      <h3 className="text-sm mb-2 text-indigo-700 dark:text-indigo-300 uppercase font-bold">
        {title}
      </h3>

      <ul>
        {collection &&
          collection.map(
            ({ label, location, role, start, end, notes }, idx) => {
              const item = (
                <li key={idx} className="unbreakable mb-4">
                  {opportunityTitleFor(label, location, role)}

                  <h5 className="text-sm text-gray-500 dark:text-gray-300 font-light uppercase mb-1">
                    {start} {end && ` - ${end}`}
                  </h5>

                  <ul className="list-disc ml-4">
                    {notes &&
                      notes.map((n, idx) => {
                        return (
                          <li key={idx} className="text-sm print:text-xs ">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {n}
                            </ReactMarkdown>
                          </li>
                        )
                      })}
                  </ul>
                </li>
              )

              return item
            }
          )}
      </ul>

      <h1 className="font-thin text-sm inline-block mt-2 px-1 italic bg-green-50 dark:bg-green-950">
        additional qualifications have been omitted for brevity
      </h1>
    </div>
  )
}

export default Opportunity
