"use client";

import React from 'react';
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
import { ChefHat, Repeat } from 'lucide-react';
import { removeToken } from '../../../lib/tokenExpair';
import { useAppSelector } from '../../../lib/redux/hooks';

function AdminNavbar() {
  const { name, email, profile, superUser } = useAppSelector((state) => state.shop)
  const logout = async () => {
    await removeToken()
    window.location.reload()
  }
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
        <ThemeSwitcher />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={name?.toString()}
              size="sm"
              src={profile?.toString()}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 bg-slate-100 dark:bg-gray-800">
              <div className=' flex'>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform m-2"
                  color="secondary"
                  size="sm"
                  src={profile?.toString()}
                />
                <div className='flex flex-col px-2'>
                  <span className="font-semibold text-gray-400 text-xs">as super admin</span>
                  <span className="font-semibold">{name}</span>
                </div>
              </div>
            </DropdownItem>
            <DropdownItem key="settings">Profile</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="help_and_feedback">Contact</DropdownItem>
            <DropdownItem key="help_and_feedback">
              {superUser == true? (
                <div className='flex items-center justify-between'>
                  Swich to user
                  <Repeat className='w-4 h-4' />
                </div>
              ) : (
                <div className='flex items-center justify-between'>
                  Swich to super user
                  <Repeat className='w-4 h-4' />
                </div>
              )}
            </DropdownItem>
            <DropdownItem key="logout" className='text-red-500'  onClick={() => logout()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default AdminNavbar;
