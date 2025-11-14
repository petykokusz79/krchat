import { useState } from "preact/hooks"
import { LeftPane } from "./LeftPane"
import "./Main.css"
import { RightPane } from "./RightPane"
import { ConversationDto } from "./ChatService"

export function Main() {
	let [selected, setSelected] = useState<ConversationDto>();

	return <div class={"Main " + (selected ? "right" : "left")}>
		<LeftPane selected={selected} onSelect={setSelected}/>
		<RightPane
			conversation={selected}
			onBack={() => setSelected(undefined)}
		/>
	</div>
}
