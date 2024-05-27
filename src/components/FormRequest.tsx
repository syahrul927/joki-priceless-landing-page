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

const FormRequest = () => {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label>Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div>
							<Label>Framework</Label>
							<Select>
								<SelectTrigger className="bg-white" id="framework">
									<SelectValue placeholder="Select" />
								</SelectTrigger>
								<SelectContent position="popper">
									<SelectItem value="next">Next.js</SelectItem>
									<SelectItem value="sveltekit">SvelteKit</SelectItem>
									<SelectItem value="astro">Astro</SelectItem>
									<SelectItem value="nuxt">Nuxt.js</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button>Cancel</Button>
				<Button className="bg-white">Deploy</Button>
			</CardFooter>
		</Card>
	)
}
export default FormRequest
