import React from "react"

export default function ViewSettings(props)
{
    return (
    <ul>
        <li>Font size: {props.settings.fontSize}</li>
        <li>Font color: {props.settings.fontColor}</li>
    </ul>
        
    )
}