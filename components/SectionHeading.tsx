export default function SectionHeading({
  number,
  title,
  as: Heading = "h2",
}: {
  number: string;
  title: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="section-heading">
      <span className="section-index" aria-hidden="true">{number}</span>
      <Heading>{title}</Heading>
    </div>
  );
}
