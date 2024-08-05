import { InputHTMLAttributes } from 'react'
import { InputGroup, InputLeftElement, Icon, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai'

const Inputs = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<InputGroup bg={"#191919"} className="header__inputGroup">
			<InputLeftElement
				className="header__inputEl"
				pointerEvents='none'
				children={<Icon as={AiOutlineSearch} />}
			/>
			<Input type='text' className="header__input" placeholder='Search for anything...' />
		</InputGroup>
	)
}

export default Inputs
