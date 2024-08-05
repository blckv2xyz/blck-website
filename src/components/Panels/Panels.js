'use client';

import _ from 'lodash';
import styles from './Panels.module.css'
import React, {useState, useEffect, useRef, use} from "react";


const PanelContext = React.createContext();

function PanelsProvider({children, value}) {
    return (
        <PanelContext.Provider value={value}>
            {children}
        </PanelContext.Provider>
    )
}

export function PanelLink({children, onDisabledClick, disable, as = 'a', panel, link, ...p}) {
    
    const {goToPanel} = usePanels();
    const Component = as;

    if (disable) {
        if(!p.style)
            p.style = {};
        p.style.opacity = 0.5;
    }

    return (
        <Component href="#" className={link ? 'link' : ''} onClick={e => {
            e.preventDefault();
            if (disable) {
                onDisabledClick();
                return;
            }
            goToPanel(panel)
        }} {...p}>
            {children}
        </Component>
    )
}

export default function Panels({children, showNav = true, bg = "tranparent", color = "inherit", ...p}){

    const style = Object.assign({}, {
        background: bg,
        color
    }, p.style ? p.style : {});

    const panels = useRef();
    const [panel, setPanel] = useState(0);

    function goToPanel(panel) {
        
        if (panel < 0 || panel >= children.length) return;
    
        const panelWidth = panels.current.children[0].clientWidth;
        const scrollTo = Math.round(panel * panelWidth);
        panels.current.scrollTo({left: scrollTo, behavior: 'smooth'});
    }
    

    function next() {
        goToPanel(panel + 1);
    }

    function prev() {
        goToPanel(panel - 1);
    }

    // Make sure panel is updated on manual scroll
    useEffect(() => {
        
        function handleScroll() {
            const scroll = panels.current.scrollLeft;
            if (scroll < 0) return;

            const width = panels.current.clientWidth;
            const panelWidth = panels.current.children[0].clientWidth;
            const panel = Math.round(scroll / panelWidth);

            setPanel(panel);
        }

        panels.current.addEventListener('scroll', handleScroll);
        return () => panels?.current?.removeEventListener('scroll', handleScroll);

    }, [panels.current]);


    return (
        <div className={styles.container} style={style}>
            
            <PanelsProvider value={{panel, goToPanel, next, prev}}>
                <div className={showNav ? styles.panelsWithNav : styles.panels} ref={panels}>
                    {React.Children.map(children, (child, index) => {
                        if (!child) return;
                        child = React.cloneElement(child, {active: index == panel});
                        return child;
                    })}
                </div>
            </PanelsProvider>

            {showNav && <div className={styles.navigation}>
                {function(){
                    
                    const ref = useRef();

                    useEffect(() => {

                        if(!panels.current) return;
                        if(!ref.current) return;

                        function handleScroll(){
                            
                            const scroll = panels.current.scrollLeft;
                            if (scroll < 0) return;

                            const panelsChildren = Array.from(panels.current.children);
                            const panelsWidth = panelsChildren.map(c => c.clientWidth).reduce((a, b) => a + b, 0);

                            let navWidth = Array.from(ref.current.children)
                            .map(c => c.clientWidth)
                            .reduce((a, b) => a + b, 0)

                            // let targetPos = scroll / (panelsWidth / navWidth)
                            // offset by 50 to center the active item
                            const targetPos = scroll / (panelsWidth / navWidth);
                            ref.current.style.transform = `translateX(-${targetPos}px)`;
    
                        }

                        panels.current.addEventListener('scroll', handleScroll);
                        window.addEventListener('resize', handleScroll);
                        return () => {
                            panels?.current?.removeEventListener('scroll', handleScroll);
                            window.removeEventListener('resize', handleScroll);
                        }

                    }, [panels, ref]);

                    return <div ref={ref} className={styles.navigationInner}>
                        {React.Children.map(children, (child, index) => {

                            if (!child) return;

                            const ref = useRef();
                            function counterTranslating(){
                                if(!panels.current) return;
                                if(!ref.current) return;

                                const scroll = panels.current.scrollLeft;
                                if (scroll < 0) return;

                                const panelsChildren = Array.from(panels.current.children);
                                const panelsWidth = panelsChildren.map(c => c.clientWidth).reduce((a, b) => a + b, 0);

                                let navWidth = Array.from(ref.current.parentElement.children)
                                .map(c => c.clientWidth)
                                .reduce((a, b) => a + (b), 0)

                                // let targetPos = scroll / (panelsWidth / navWidth)
                                // offset by 50 to center the active item
                                const targetPos = scroll / (panelsWidth / navWidth);
                                ref.current.style.transform = `translateX(${targetPos*0.5}px)`;
                                ref.current.style.marginLeft = `-${targetPos/8}px`;

                            }

                            useEffect(() => {
                                panels.current.addEventListener('scroll', counterTranslating);
                                return () => panels?.current?.removeEventListener('scroll', counterTranslating);
                            }, [panels.current, ref]);

                            return (
                                <div ref={ref} className={index == panel ? styles.navigationItem_active : styles.navigationItem} onClick={() => goToPanel(index)}>
                                    <span>{child.props.title}</span>
                                </div>
                            )
                        })}
                    </div>
                }()}
            </div>}

        </div>
    )
}

export function PanelActions({children, disable, justifyContent = 'flex-start', ...p}){

    if(p.style)
        p.style.justifyContent = justifyContent;
    else
        p.style = {justifyContent};

    if(disable){
        p.style.opacity = 0.5;
        p.style.pointerEvents = "none";
    }

    return (
        <div className={styles.panelActions} {...p}>
            {children}
        </div>
    )
}

export function Panel({children, name, noPadding, bgColor, hasActions = false, fullWidth, active, hide, ...p}){

    if(!p.style)
        p.style = {};

    if(fullWidth){
        p.style.minWidth = "100%";
        p.style.maxWidth = "100%";
        p.style.border = "none";
    }

    if(hide) {
        p.style.display = "none";
    }

    if(bgColor){
        p.style.backgroundColor = bgColor
    }

    return (
        <div className={`${active ? styles.panel_active : styles.panel}${hasActions ? ' '+styles.panel_has_actions : ''}`} data-name={name} {...p}>
            {children}
        </div>
    )
}

export function PanelContent({children, noPadding, hasActions, ...p}){

    return (
        <div className={styles.panelContent+`${noPadding ? ' '+styles.panelContent_no_padding : ''}`} {...p}>
            {children}
        </div>
    )
}

export function usePanels(){
    const context = React.useContext(PanelContext);
    if (context === undefined) {
        throw new Error('usePanels must be used within a PanelsProvider');
    }
    return context;
}

