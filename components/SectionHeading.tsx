export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <header id={id} className="max-w-3xl">
      {eyebrow && (
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance">{title}</h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
          {lead}
        </p>
      )}
    </header>
  );
}
