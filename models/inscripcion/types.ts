import { gql } from 'apollo-server-express';

const inscripcionTypes = gql`
  scalar Date

  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      fechaIngreso: Date
      proyecto: String
      estudiante: String! 
    ): Inscripcion
  }
`;

export { inscripcionTypes };
