const Utility = {
    "createChild": function (parentId, childElementName, childTextContent) {
        let parentElement = document.getElementById(parentId);
        let child = document.createElement(childElementName);
        child.textContent = childTextContent;
        parentElement.append(child);
    }
};