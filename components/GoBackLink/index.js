/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useHistoryContext } from "../../hooks/useRouteHistory";

const GoBackLink = () => {
  const { previousRoute, removeHistory } = useHistoryContext();

  return (
    <Link href={previousRoute} passHref>
      <a onClick={removeHistory}>Go Back</a>
    </Link>
  );
};

export default GoBackLink;
