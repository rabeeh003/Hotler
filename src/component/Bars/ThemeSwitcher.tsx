"use client";

import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="flex items-center">
            <Switch
                checked={theme === 'dark'}
                onChange={handleChange}
                color="primary"
                size="lg"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
            />
        </div>
    )
}
