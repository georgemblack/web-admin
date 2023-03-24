function DomainName(props: { url: string }) {
  const time = props.url
    .replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/)[0];

  return <>{time}</>;
}

export default DomainName;
