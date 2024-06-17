import {
	TypewriterEffect,
	TypewriterEffectSmooth,
} from "../ui/typewriter-effect"

export default function HeroTitle() {
	const words = [
		{
			text: "Build",
		},
		{
			text: "your",
		},
		{
			text: "Web",
			className: "border-b-8 border-main",
		},
		{
			text: "and",
		},
		{
			text: "App",
			className: "border-b-8 border-main",
		},
		{
			text: "with",
		},
		{
			text: "us",
		},
	]

	return <TypewriterEffect words={words} cursorClassName="bg-main" />
}
