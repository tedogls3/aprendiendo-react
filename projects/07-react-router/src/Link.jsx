import { navigate } from './utils/navigation';

/* eslint-disable react/prop-types */
export function Link({ target, to, ...props }) {
  const handleClick = e => {
    const isMainEvent = e.button === 0;
    const isModified = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.cmdKey;
    const isManagableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManagableEvent && !isModified) {
      e.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
