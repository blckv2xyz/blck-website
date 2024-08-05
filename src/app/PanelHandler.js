'use client'
import { usePanels } from "@/components/Panels/Panels";
import { useTheme } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { useEffect } from "react";

export default function PanelHandler(){
    
    const {panel} = usePanels();
    const {switchTheme} = useTheme();

    useEffect(() => {
        switchTheme();
    }, [panel]);

    return null;

}