function Image({
  urls,
  alt,
  children,
}: {
  urls: string[];
  alt: string;
  children: React.ReactNode;
}) {
  const avifUrl = urls.find((url) => url.endsWith(".avif"));
  const jpgUrl = urls.find((url) => url.endsWith(".jpg"));
  const pngUrl = urls.find((url) => url.endsWith(".png"));

  return (
    <figure>
      <picture>
        {avifUrl && (
          <source
            srcSet={"https://files.george.black/assets" + avifUrl}
            type="image/avif"
          />
        )}
        {jpgUrl && (
          <img src={"https://files.george.black/assets" + jpgUrl} alt={alt} />
        )}
        {pngUrl && (
          <img src={"https://files.george.black/assets" + pngUrl} alt={alt} />
        )}
      </picture>
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}

export default Image;
