"use client";

import React from 'react';
import { useSession, signOut } from "next-auth/react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ChefHat } from 'lucide-react';

function AdminNavbar() {
  const { data: session } = useSession()
  return (
    <Navbar className='sticky top-0'>
      <NavbarBrand>
      <ChefHat size={30} />
        <p className="font-bold text-inherit">Hotler</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end">
      <ThemeSwitcher/>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={session?.user?.name || 'user'}
              size="sm"
              src={session?.user?.image || ''}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem onClick={()=>signOut()} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default AdminNavbar;
