import { AdvancementModel } from "./avances";


const resolversAvance = {
    Query:{
        Avances: async(parent,args)=>{
            const avances = await AdvancementModel.find()
            return avances;
        },
       
    },
    Mutation: {
        crearAvance: async (parents,args)=>{
            const avanceCreado = AdvancementModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor
            }

            );
            return avanceCreado;
        },
    },
};

export{resolversAvance};