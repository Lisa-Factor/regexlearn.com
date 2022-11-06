const baseURL = 'https://legaltechfaq.com/regex-tutorial';

interface Props {
  title: string;
  description: string;
  href: string;
  image?: string;
}

const SeoTags = ({
  title,
  description,
  href = '',
  image = baseURL + '/images/og-regexlearn-image.jpg',
}: Props) => (
  <>
  </>
);

export default SeoTags;
