const HP = ({
  title = "Blog with the best",
  subtitle = "More bloggers and independent creators choose LetsBlog than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.",
  className = "",
  textColor = "text-black",
}) => {
  return (
    <div className={`w-full h-3/4 bg-section-light flex flex-col p-8 md:p-12 rounded-xl shadow-md ${className}`}>
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${textColor}`}>{title}</h1>
      <p className={`text-lg md:text-xl mb-4 ${textColor}`}>{subtitle}</p>
    </div>
  );
};

export default HP;