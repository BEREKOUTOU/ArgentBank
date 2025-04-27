export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return regex.test(name);
};
//* The isValidName function checks if a given name is valid according to a specific regex pattern.
//* It returns true if the name matches the pattern, and false otherwise.
export const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
// * The isValidEmail function checks if a given email address is valid according to a specific regex pattern.
// * It returns true if the email matches the pattern, and false otherwise.
export const isValidPassword = (password) => {
    // Example criteria: at least 8 characters, at least one letter and one number
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
};
