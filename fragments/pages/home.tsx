import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  Switch,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  Label,
  Menubar,
  MenubarContent,
  MenubarTrigger,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarShortcut,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PopoverDemo,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <div class="flex flex-col items-center py-24 z-10 relative">
        <h2 class="text-lg font-semibold leading-8  ">AlpineJs Example with HMR</h2>
        <div class="py-4 inline-flex gap-2 items-center mx-auto" x-data="{ count: 0 }">
          <p>
            Count: <span x-text="count"></span>
          </p>
          <PopoverDemo />
        </div>
      </div>
    </div>
  )
}
