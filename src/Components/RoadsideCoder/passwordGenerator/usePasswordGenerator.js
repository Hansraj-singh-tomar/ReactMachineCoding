import { useState } from "react";

const usePasswordGenerator = () => {
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    function generatePassword(checkboxData, length) {
        let charSet = "",
            generatedPassword = "";

        const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

        if (selectedOption.length === 0) {
            setErrorMessage("select atleast one option");
            setPassword("");
            return;
        }

        selectedOption.forEach((option) => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                case "Include Lowercase Letters":
                    charSet += "abcdefghijklmnopqrstuvwxyz";
                    break;

                case "Include Numbers":
                    charSet += "0123456789";
                    break;

                case "Include Symbols":
                    charSet += "@#$$%^&*()";
                    break;

                default:
                    break;
            }
        });

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }

        setPassword(generatedPassword);
        setErrorMessage("");
    }

    return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
