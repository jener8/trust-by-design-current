export function FormattedText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean)

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-muted-foreground leading-relaxed${index > 0 ? " mt-3" : ""}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}
