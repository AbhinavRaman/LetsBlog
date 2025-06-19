const HP = ({
  title = "Blog with the best",
  subtitle = "More bloggers and independent creators choose LetsBlog than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.",
  className = ""
}) => {
  return (
    <div className={`w-full h-3/4 bg-transparent flex flex-col p-4 ${className}`}>
      <h1 className="text-4xl mb-4">{title}</h1>
      <p className="mb-4">{subtitle}</p>
    </div>
  );
};

export default HP;