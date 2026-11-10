import tls from "node:tls";

const host = "ac-ey3w9ik-shard-00-00.acycmzm.mongodb.net";

const socket = tls.connect({
   host,
   port: 27017,
   servername: host,
   minVersion: "TLSv1.2",
   maxVersion: "TLSv1.2",
   rejectUnauthorized: true,
});

socket.on("secureConnect", () => {
   console.log("TLS connection successful!");
   console.log("Protocol:", socket.getProtocol());
   socket.end();
});

socket.on("error", (error) => {
   console.error("TLS connection failed:", error);
});
