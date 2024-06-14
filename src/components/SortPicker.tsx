import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


type Props = {
  selectedSortOrder: string,
  onSelectSort: (sortValue: string) => void,
}

const SortPicker = ({selectedSortOrder, onSelectSort}: Props) => {

  const sortOptions = [
    {value: "", label : "Relevance"},
    {value: "-added", label : "Date added"},
    {value: "name", label : "Name"},
    {value: "-released", label : "Release date"},
    {value: "-metacritic", label : "Popularity"},
    {value: "-rating", label: "Average rating"},
  ]

  const currentSortOrder = sortOptions.find((option) => option.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || "Relevance"}</MenuButton>
      <MenuList>
        {sortOptions.map((option) =>
          <MenuItem onClick={() => onSelectSort(option.value)} key={option.value} value={option.value}>{option.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default SortPicker