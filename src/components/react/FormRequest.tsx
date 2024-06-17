import { Label } from "@radix-ui/react-context-menu"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "../ui/select"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { motion } from "framer-motion"
import { useToast } from "../ui/use-toast"

const FormRequest = () => {
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [framework, setFramework] = useState("")
	const [description, setDescription] = useState("")
	const [list, setList] = useState<CardRequestProps[]>([])
	const { toast } = useToast()

	const clear = () => {
		setName("")
		setPhone("")
		setFramework("")
		setDescription("")
	}

	const onSubmit = () => {
		if (!name || !framework || !phone) {
			toast({
				title: "Error!",
				description: "Please fill the field!",
				variant: "destructive",
			})
			return
		}
		setList([...list, { name, framework, description }])
		clear()
	}

	return (
		<form className="max-w-md flex flex-col space-y-3">
			<div className="flex flex-col space-y-1.5">
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					id="name"
					placeholder="Your Name"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					id="name"
					placeholder="Phone Number"
				/>
			</div>
			<div>
				<Select value={framework} onValueChange={(e) => setFramework(e)}>
					<SelectTrigger className="bg-white" id="framework">
						<SelectValue placeholder="Project Type" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectItem value="website">Website</SelectItem>
						<SelectItem value="mobileapp">Mobile App</SelectItem>
						<SelectItem value="custom">Custom App</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
				<Textarea
					placeholder="Describe your app"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<Button onClick={onSubmit} variant={"black"}>
				Send
			</Button>
		</form>
	)
}
export default FormRequest
interface CardRequestProps {
	name: string
	framework: string
	description: string
}
const CardRequest = (props: CardRequestProps) => {
	return (
		<motion.div
			animate={{ x: 0, opacity: 1, animation: "ease-in-out" }}
			transition={{
				duration: 0.4,
			}}
			initial={{
				opacity: 0.5,
				x: -50,
			}}
			className="w-full"
		>
			<Card className="bg-accent">
				<CardHeader className="">
					<CardTitle>{props.name}</CardTitle>
					<CardDescription className="uppercase">
						{props.framework}
					</CardDescription>
				</CardHeader>
				<CardContent>{props.description}</CardContent>
			</Card>
		</motion.div>
	)
}
