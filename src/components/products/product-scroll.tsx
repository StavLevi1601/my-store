import { Footer, NavigationButton, PageInfo } from "../store-style";

type Props = {
  previousPage: () => void;
  currentPage: number;
  maxPages: number;
  nextPage: () => void;
};

export function ProductScroll({
  previousPage,
  currentPage,
  maxPages,
  nextPage,
}: Props) {
  return (
    <Footer>
      <NavigationButton onClick={previousPage}>
        {"< Prev Page"}
      </NavigationButton>
      <PageInfo>
        {currentPage} of {maxPages}
      </PageInfo>
      <NavigationButton onClick={nextPage}>{"Next Page >"}</NavigationButton>
    </Footer>
  );
}
