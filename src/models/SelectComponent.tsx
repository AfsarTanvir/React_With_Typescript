import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

function SelectComponent() {
  return (
    <>
      <h1 className="text-center size-4">SelectComponent</h1>
      <div className="w-fit bg-amber-100 m-3 p-2">
        <Select>
          <SelectTrigger className="bg-white w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="bg-amber-300 p-4">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default SelectComponent;