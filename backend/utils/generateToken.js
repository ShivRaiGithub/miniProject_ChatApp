import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, "U0QzOeVw/9kXG5orJ0hlV5eUR1DFd1K6WZk0c7lmYQk=", {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, 
		sameSite: "strict", 
		secure: "development" !== "development",
	});
};

export default generateTokenAndSetCookie;
