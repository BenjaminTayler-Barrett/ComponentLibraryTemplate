import React from "react";
import "../../tailwind.css";
import "./Hello.scss";

export interface HelloProps {
    text: string;
}

class Hello extends React.Component<HelloProps> {
    override render() {
        return <div className="Hello text-3xl font-bold underline">{this.props.text}</div>;
    }
}

export default Hello;
