import { Label } from "@radix-ui/react-context-menu"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "./ui/select"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { motion } from "framer-motion"
import { useToast } from "./ui/use-toast"

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
		<div className="flex  space-x-3 ">
			<Card className="w-[500px] h-fit">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label>Name</Label>
								<Input
									value={name}
									onChange={(e) => setName(e.target.value)}
									id="name"
									placeholder="Name of your project"
								/>
							</div>
							<div>
								<Label>Framework</Label>
								<Select
									value={framework}
									onValueChange={(e) => setFramework(e)}
								>
									<SelectTrigger className="bg-white" id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="nextjs">Next.js</SelectItem>
										<SelectItem value="sveltekit">SvelteKit</SelectItem>
										<SelectItem value="astro">Astro</SelectItem>
										<SelectItem value="nuxt">Nuxt.js</SelectItem>
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
			<div className="flex flex-col space-y-3 w-full max-h-[70dvh] overflow-y-auto pr-6">
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
