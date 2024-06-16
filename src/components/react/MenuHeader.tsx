"use client"

import * as React from "react"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "https://ui.shadcn.com/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "https://ui.shadcn.com/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "https://ui.shadcn.com/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "https://ui.shadcn.com/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "https://ui.shadcn.com/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "https://ui.shadcn.com/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
]

export default function MenuHeader() {
	return (
		<NavigationMenu className="z-[5] hidden md:block m750:max-w-[300px] border-none">
			<NavigationMenuList className="m750:max-w-[300px]">
				<NavigationMenuItem>
					<a href="/project">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<span className="m750:max-w-[80px] m750:text-xs">Project</span>
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="https://ui.shadcn.com/docs">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<span className="m750:max-w-[80px] m750:text-xs">
								Documentation
							</span>
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"hover:bg-accent block select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-black",
						className
					)}
					{...props}
				>
					<div className="text-base font-heading leading-none">{title}</div>
					<p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
