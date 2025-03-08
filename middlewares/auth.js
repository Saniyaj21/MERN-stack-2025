export const isLogedIn = (req, res, next) => {
    console.log("user is logged in");
    next();
}