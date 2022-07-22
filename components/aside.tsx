import ReactMarkdown from "react-markdown";

type SectionNotes = {
  notes: string[];
};

type Sections = {
  title: string;
  collection: SectionNotes[];
};

function Aside({ title, collection }: Sections) {
  return (
    <div className="opportunity md:my-4">
      <h3 className="text-sm text-indigo-700 dark:text-indigo-300 mb-2 uppercase font-bold">
        {title}
      </h3>

      <ul>
        {collection &&
          collection.map(({ notes }, idx) => {
            const item = (
              <li key={idx} className="mb-4">
                <ul>
                  {notes.map((n, idx) => {
                    return (
                      <li key={idx} className="mb-1 md:mb-3 md:text-xs">
                        <ReactMarkdown>{n}</ReactMarkdown>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );

            return item;
          })}
      </ul>
    </div>
  );
}

export default Aside;
