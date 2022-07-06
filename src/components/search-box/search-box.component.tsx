import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string,
//   placeholder? : string | null;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type USAddress = {
//   street: string;
//   state: string;
// }

// type NorthAmericanAddress = CanadianAddress | USAddress;

// const Address: NorthAmericanAddress = {
//   street: 'street Name',
//   state: 'state name',
//   // province: 'province name'
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}


const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
