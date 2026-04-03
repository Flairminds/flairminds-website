const allowedOrigins = [
    "https://flairminds.com",
    "https://www.flairminds.com"
];

export const verifyOrigin = (req, res, next) => {
    // Check both Origin and Referer explicitly
    const origin = req.headers.origin;
    const referer = req.headers.referer;

    // We require the request to explicitly identify where it came from
    // Postman/cURL by default do not send Origin or Referer for simple GET/POST
    if (!origin && !referer) {
        console.warn(`[Block] Missing Origin/Referer header from IP: ${req.ip}`);
        return res.status(403).json({ error: "Access denied." });
    }

    // Attempt to match the request origin with our allowed list
    const source = origin || referer;

    const isAllowed = allowedOrigins.some(url => source.startsWith(url));

    if (!isAllowed) {
        console.warn(`[Block] Untrusted origin attempted access: ${source}`);
        return res.status(403).json({ error: "Access denied. Origin not trusted." });
    }

    next();
};
