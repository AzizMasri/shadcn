"use client"

import { Bolt, LogOut, Moon, Sun, User } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar'


function Navbar() {
    const {setTheme} = useTheme();

  return (
    <nav className='p-4 flex items-center justify-between'>
        <SidebarTrigger />
        <div className='flex items-center gap-4'>
            <Link href='/' className=''>Dashboard</Link>
            {/* Toggle Dark Mode */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className='mr-2 h-[1.2rem] w-[1.2rem]'/>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Bolt className='mr-2 h-[1.2rem] w-[1.2rem]'/>
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'>
                            <LogOut className='mr-2 h-[1.2rem] w-[1.2rem]'/>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
           
        </div>
        
    </nav>
  )
}

export default Navbar