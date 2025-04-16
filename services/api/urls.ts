import { env } from "@/config/env";

export const APIUrls = {
  productos: {
    all: `${env.API_URL}/productos`,
  },
  servicios: {
    all: `${env.API_URL}/servicios`,
  },
  contacto: {
    all: `${env.API_URL}/contacto`,
  },
  auth: {
    user: `${env.API_URL}/auth/user`,
    login: `${env.API_URL}/auth/login`,
  },
};
