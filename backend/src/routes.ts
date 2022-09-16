import {Router} from "express";
import {SoftwareController} from "./controllers/SoftwareController";
import {adaptRoute} from "./adapters/ExpressRouteAdapter";
import {RequirementController} from "./controllers/RequirementController";
import {UserController} from "./controllers/UserController";
import {SessionController} from "./controllers/SessionController";
import {User} from "./models/User";

const router = Router();

router.get("/software", adaptRoute(new SoftwareController(), "findAll"));
router.get('/software/:id', adaptRoute(new SoftwareController(), 'findById'))
router.post("/software", adaptRoute(new SoftwareController(), "create"));
router.patch('/software/:id', adaptRoute(new SoftwareController(), 'edit'))
router.delete('/requirement/:id', adaptRoute(new RequirementController(), 'delete'));
router.patch('/requirement/:id', adaptRoute(new RequirementController(), 'edit'))
router.post('/user', adaptRoute(new UserController(), 'create'));
router.get('/user/:id', adaptRoute(new UserController(), 'findById'));
router.get('/user', adaptRoute(new UserController(), 'findAll'));
router.delete('/user/:id', adaptRoute(new UserController(), 'delete'));
router.post('/session/login', adaptRoute(new SessionController(), 'login'))
router.patch('/user/:id', adaptRoute(new UserController(), 'edit'))
export default router;
