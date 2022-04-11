import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import "./myComponent.css";

export default function MyComponent(props) {
    const options = {
        size : 200,
        minSize : 10,
        gutter : 8,
        provideProps : true,
        numCols : 4,
        fringeWidth : 140,
        yRadius : 100,
        xRadius : 250,
        cornerRadius : 50,
        showGuides : false,
        compact :true,
        gravitation : 5
    };
    const handleClick = (bub) => {
        console.log(bub);
    };
    const children = props.data.map((data,i) => {
        return (
        <Child data = {data} className = "child" key = {i} setClick = {handleClick}></Child>
        );
    });

    return (
        <>
        <BubbleUI options = {options} className = "myBubbleUI">
            {children}
        </BubbleUI>
        </>
    );
}