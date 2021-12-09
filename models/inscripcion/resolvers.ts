import { InscriptionModel } from "./inscripcion"


const resolverInscripciones = {
    Query:{
        Inscripciones: async (parent,args)=>{
            const inscripciones = await InscriptionModel.find();
            return inscripciones;
        },
    },
    Mutation: {
        crearInscripcion: async (parent,args)=>{
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado!,
                fechaIngreso: args.fechaIngreso,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            
                return inscripcionCreada;
        },
    },
    };
export {resolverInscripciones}