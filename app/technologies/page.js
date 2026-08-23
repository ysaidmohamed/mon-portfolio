/**
 * @param {{ technologies?: string[], align?: "left" | "center" | "right" }} props
 */
export default function Tags({ technologies = [], align = "center" }) {
  const alignments = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={`flex w-full flex-wrap justify-center gap-4 ${
        alignments[align] || "justify-center"
      }`}
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="whitespace-nowrap rounded-full border border-blue-300 bg-blue-50 px-6 py-3 text-base font-semibold tracking-wide text-blue-600 shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}