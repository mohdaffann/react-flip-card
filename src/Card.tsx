import React, { useState } from "react";
import './Card.css'

type flipDirection = "horizontal" | "vertical"
type animationType = "flip" | "fade" | "slide"
type slideDirection = "up" | "down" | "leftToRight" | "rightToLeft"

interface CardProps {
    flipDirection?: flipDirection,
    flipDuration?: number,
    animationType?: animationType,
    slideDirection?: slideDirection,
    fadeDuration?: number,
    slideDuration?: number,
    frontCard: React.ReactNode,
    backCard: React.ReactNode,
    className?: string
}

function Card(
    {
        flipDirection = "horizontal",
        flipDuration = 0.5,
        fadeDuration = 0.5,
        slideDuration = 0.6,
        frontCard,
        backCard,
        animationType = "flip",
        slideDirection = "leftToRight",
        className = ""

    }: CardProps) {
    return (
        <div className={`card ${className} ${animationType} ${animationType === "slide" ? `slide-${slideDirection}` : ""}`} style={{
            "--flip-duration": `${flipDuration}s`,
            "--fade-duration": `${fadeDuration}s`,
            "--slide-duration": `${slideDuration}s`
        } as React.CSSProperties}>
            <div className={`content ${animationType === 'flip' ? `flip-${flipDirection}` : ''}`}>
                <div className="front-side">
                    {frontCard}
                </div>
                <div className="back-side">
                    {backCard}
                </div>
            </div>
        </div >
    )
}

export default Card;
