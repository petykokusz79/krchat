import "./IconButton.css"

export type IconButtonProps = {
	iconName: string,
	text: string,
	onClick: () => void
}

export function IconButton({iconName, text, onClick}: IconButtonProps) {
	return <button class="IconButton" type="button" onClick={onClick}>
		<span class="material-symbols-outlined">{iconName}</span>
		<span>{text}</span>
	</button>
}
