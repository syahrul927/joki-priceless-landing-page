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
	const [framework, setFramework] = useState("")
	const [description, setDescription] = useState("")
	const [list, setList] = useState<CardRequestProps[]>([])
	const { toast } = useToast()

	const clear = () => {
		setName("")
		setFramework("")
		setDescription("")
	}

	const onSubmit = () => {
		if (!name || !framework) {
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
		<div className="flex py-12 md:flex-row gap-3 flex-col  ">
			<Card className="md:w-[500px] w-full h-fit">
				<CardHeader>
					<CardTitle>Informasi Projek</CardTitle>
					<CardDescription>Deskripsikan kebutuhan kamu!</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label>Nama Kamu</Label>
								<Input
									value={name}
									onChange={(e) => setName(e.target.value)}
									id="name"
									placeholder="Name of your project"
								/>
							</div>
							<div>
								<Label>Jenis Aplikasi</Label>
								<Select
									value={framework}
									onValueChange={(e) => setFramework(e)}
								>
									<SelectTrigger className="bg-white" id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="Website">Website</SelectItem>
										<SelectItem value="Mobile App">Mobile App</SelectItem>
										<SelectItem value="Desktop">Desktop</SelectItem>
										<SelectItem value="Custom App">Custom App</SelectItem>
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
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button onClick={clear}>Cancel</Button>
					<Button onClick={onSubmit} className="bg-white">
						Deploy
					</Button>
				</CardFooter>
			</Card>
			<div className="flex flex-col space-y-3 w-full md:max-h-[70dvh] overflow-y-auto ">
				{list.map((item) => (
					<CardRequest {...item} key={item.name} />
				))}
			</div>
		</div>
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
