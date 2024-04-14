import About from "../../Components/About/About";
import Title from "../../Components/Title/Title";

function MainPage () {
    return (
        <div>
            <Title text="Hello world" />
            <About info={{ title: "Some Title", body: "Some body" }} />
        </div>
    )
}

export default MainPage;