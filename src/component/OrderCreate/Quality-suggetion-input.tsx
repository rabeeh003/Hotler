import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button, DropdownSection } from '@nextui-org/react';

interface QuantityInputProps {
  quantityTypes: string[];
}

const QuantityInput: React.FC<QuantityInputProps> = ({ quantityTypes }) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const quantityOptions: { [key: string]: string[] } = {
    count: ['1', '2', '3', '4', '5'],
    kg: ['500g', '1kg', '2kg', '3kg'],
    custom: ['Quarter', 'Half', 'Full'],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOkClick = () => {
    setDropdownOpen(false);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = (isOpen: boolean) => {
    setDropdownOpen(isOpen);
  };

  return (
    <Dropdown isOpen={dropdownOpen} onOpenChange={handleDropdownToggle}>
      <DropdownTrigger>
        <Button  onClick={() => setDropdownOpen(true)}>
          {inputValue || 'Enter quantity'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection title="Custom">
          <DropdownItem key="input" isReadOnly={true}>
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="px-4 py-2 border rounded"
                placeholder="Enter quantity"
                onClick={(e) => e.stopPropagation()} // Prevent row highlight on click
              />
              <Button color="primary" onClick={handleOkClick}>
                OK
              </Button>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Quantity">
          {quantityTypes.flatMap((type) =>
            quantityOptions[type]?.map((option) => (
              <DropdownItem key={`${type}-${option}`} onClick={() => handleOptionClick(option)}>
                {option}
              </DropdownItem>
            ))
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default QuantityInput;
