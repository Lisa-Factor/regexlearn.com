import Icon from 'src/components/Icon';
import IntlLink from 'src/components/IntlLink';

const Logo = () => (
  <IntlLink href="/[lang]">
        <a className="inline-flex items-center" aria-label="Regex-Tutorial">
      <Icon
        className="fill-regreen-400 block sm:hidden"
        icon="unlocked"
        removeInlineStyle
        size={20}
      />
      <img className="hidden sm:block" width={109} height={27} src="/logo.svg" alt="Regex-Tutorial" />
    </a>
  </IntlLink>
);

export default Logo;
