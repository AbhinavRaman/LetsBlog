import defaultIcon from '../Media/Icon1.png';

const IHP = ({
  iconImg = null, // Accepts a string (image path) or JSX (e.g., an imported SVG component)
  title = "SEO, to go",
  subtitle = 'Get found faster thanks to built-in search engine optimization tools. Clean URLs, automatic sitemaps, and custom titles and descriptions help put your blog at the top of the stack in search results.'
}) => {
  return (
    <section>
      <div className='h-3/4 bg-transparent flex-col p-4'>
        {
          typeof iconImg === 'string' ? (
            <img src={iconImg} alt="SEO image" className='h-14 mb-4' />
          ) : iconImg ? (
            <div className='h-14 mb-4'>{iconImg}</div> // For JSX SVG
          ) : (
            <img src={defaultIcon} alt="SEO image" className='h-14 mb-4' />
          )
        }
        <h1 className='text-3xl mb-4'>{title}</h1>
        <p className='mb-4'>{subtitle}</p>
      </div>
    </section>
  );
};

export default IHP;