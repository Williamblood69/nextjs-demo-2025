import { Button, Input, InputGroup } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function FormComponent({ onSearch }) {
  const [textSearch,setTextSearch] = useState("");
  console.log('-textSearch-',textSearch);

  return (
    <div className="bg-neutral-50 py-6 px-4">
      <form 
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(textSearch);
        }}
      >
        <InputGroup className="max-w-md">
          <Input 
            placeholder="Search products" 
            value={textSearch}
            onChange={(event) => setTextSearch(event.target.value)}
          />
        </InputGroup>

        <Button
          color="dark"
          size="sm"
          type="submit"
          className="flex! items-center gap-1"
        >
          <FaSearch color="rgb(255, 255, 255)" />
          <span style={{color: 'white'}}> Search </span>
        </Button>

        <Button
          color="dark"
          size="sm"
          type="add"
          className="flex! items-center gap-1"
        >
          <FaPlus color="rgb(255, 255, 255)" />
          <span style={{color: 'white'}}> Add </span>
        </Button>
      </form>
    </div>
  );
}
