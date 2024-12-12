import dotenv from "dotenv";
import {connectDB} from "./database/mongoose.js";
import app from "./app.js";
dotenv.config({ path: 'D:\kishu\Project_cart\cartbackend\.env' });
connectDB().then(() => {
    app.listen(process.env.PORT||3001, () => {
        console.log("database connected");
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
    .catch((error) => {
        console.log(error);
    })
