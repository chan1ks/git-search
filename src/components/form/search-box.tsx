import React, { ChangeEvent, FormEvent } from 'react';

interface SearchBoxProps {
  handleChange: (searchText: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchBox = ({ handleChange, handleSubmit }: SearchBoxProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <div className="input-group">
        <input
          className="form-control no-border-radius--right"
          type="text"
          placeholder="Search a user"
          onChange={onChange}
        />
        <button
          className="btn btn-primary no-border-radius--left"
          type="submit"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
