export default function DsaTopicContent({ topic }) {
  return (
    <div className="space-y-10 bg-gradient-to-br from-black via-gray-900 to-black px-5 md:px-10 py-10 rounded-md shadow-md shadow-white">
      {topic.content.map((block, idx) => {
        switch (block.type) {
          case "intro":
            return (
              <section key={idx}>
                <h1 className="text-3xl font-light text-blue-600">
                  {block.heading}
                </h1>
                <p className="mt-4 text-gray-500">{block.text}</p>
              </section>
            );
          case "learn":
            return (
              <section key={idx} className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-500">
                  {block.heading}
                </h2>
                <ul className="list-disc pl-5 mt-2 text-gray-500 space-y-1">
                  {block.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </section>
            );
          case "methods":
            return (
              <section key={idx} className="mt-6 ">
                <h2 className="text-2xl font-semibold text-blue-500">
                  {block.heading}
                </h2>
                {block.methods.map((m, i) => (
                  <div
                    key={i}
                    className="mb-4 p-3 border text-gray-500 mt-5 bg-black/30 rounded-xl shadow-lg shadow-blue-500/30"
                  >
                    <strong className="font-medium text-white">
                      {m.method}
                    </strong>
                    : {m.description}
                    <pre className="bg-gray-900 rounded-md text-gray-400 my-3 p-2 text-wrap">
                      Before: {m.example.before}
                      {"\n"}
                      Code: {m.example.code}
                      {"\n"}
                      After: {m.example.after}
                    </pre>
                  </div>
                ))}
              </section>
            );
          case "exampleBlock":
            return (
              <section key={idx} className="mt-6">
                <h2 className="mb-1 text-2xl font-semibold text-blue-500">
                  {block.heading}
                </h2>
                <p className="mt-4 text-gray-500">{block.description}</p>
                <pre className="bg-gray-900 rounded-md text-gray-300 border mt-2 p-2 text-sm md:text-lg text-wrap">
                  {block.code}
                </pre>
                <p className="mt-2 text-gray-300">
                  Input: <code className="text-gray-500">{block.input}</code>
                </p>
                <p className="text-gray-300">
                  Expected Output:{" "}
                  <code className="text-gray-500">{block.expectedOutput}</code>
                </p>
              </section>
            );
          case "theory":
            return (
              <section key={idx} className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-500">
                  {block.heading}
                </h2>
                <p className="text-gray-500">{block.text}</p>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
