import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};

export default corsOptions;