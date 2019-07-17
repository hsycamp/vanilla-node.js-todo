const serveStatic = require("./middlewares/serve-static");
const logger = require("./middlewares/logger");
const errors = require("./middlewares/errors");
const bodyParser = require("./middlewares/body-parser");
const signIn = require("./routers/sign-in");
const signUp = require("./routers/sign-up");
const session = require("./middlewares/session");
const index = require("./routers/index");
const signInHandler = require("./api/sign-in-handler");
const signUpHandler = require("./api/sign-up-handler");
const signOutHandler = require("./api/sign-out-handler");
const getClassifiedCards = require("./api/get-classified-cards");
const addNewCard = require("./api/add-new-card");
const deleteCard = require("./api/delete-card");
const editCard = require("./api/edit-card");
const updateStatus = require("./api/update-status");
const App = require("./src/application");
const app = App();

app.use(logger());
app.use(session());
app.use(serveStatic());
app.use(bodyParser());
app.get("/", signIn.getSignInPage());
app.get("/sign-up", signUp.getSignUpPage());
app.post("/sign-up", signUpHandler.signUp());
app.post("/sign-in", signInHandler.signIn());
app.get("/todo", index.index());
app.post("/sign-out", signOutHandler.signOut());
app.post("/api/get-classified-cards", getClassifiedCards.getClassifiedCards());
app.post("/api/add-new-card", addNewCard.addNewCard());
app.post("/api/delete-card", deleteCard.deleteCard());
app.post("/api/edit-card", editCard.editCard());
app.post("/api/update-status", updateStatus.updateStatus());
app.use(errors.error404());
app.use(errors.error());

module.exports = app;
