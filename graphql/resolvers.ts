import { userResolvers } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';
import { resolversAvance } from '../models/avances/resolvers';
import { resolverInscripciones } from '../models/inscripcion/resolvers';

export const resolvers = [userResolvers, projectResolvers, resolversAvance, resolverInscripciones];
