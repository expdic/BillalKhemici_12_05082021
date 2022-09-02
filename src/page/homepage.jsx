import Dashboard from "./dashboard";


/**
 * Return React component that display the dashboard content
 * @returns React component.
 */
function Homepage() {
    const URL = window.location.href;
    const userId = URL.split("/").pop();
    return (
        <Dashboard id={userId} />
    );
}

export default Homepage;
