import { Option, SortBy } from "../store-style";

type Props = {
  options: string[];
  onSortChange: (option: string) => void;
};

export function ProductSortBy({ options, onSortChange }: Props) {
  return (
    <SortBy>
      {options.map((option) => (
        <Option key={option} onClick={() => onSortChange(option)} role="button">
          {option}
        </Option>
      ))}
    </SortBy>
  );
}
