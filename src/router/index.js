import { createRouter, createWebHistory } from 'vue-router'
import agentRoutes from "./routes/agent-routes";
import complianceRoutes from "./routes/compliance-routes";
import verificationRoutes from "./routes/verification-routes";
import authRoutes from "./routes/auth-routes";

const baseRoutes = [];

const routes = baseRoutes.concat( agentRoutes, complianceRoutes, verificationRoutes, authRoutes);



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
