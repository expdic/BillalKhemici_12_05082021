/**
 * Return a React component that display an error message if we not have a id of user
 * @returns React component.
 */
function errorUser() {
    return (
        <div>
            <div className="divError">
                <span className="spanError">Erreur : </span>
                <span>L'utilisateur demandé est inexistant</span>
            </div>
        </div>
    );
}

export default errorUser;